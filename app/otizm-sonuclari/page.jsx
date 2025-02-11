'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function OtizmSonuclari() {
    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const adminPassword = '1234'; // Şifreni buradan değiştir

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchResults = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'otizm_testleri'));
                const results = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTestResults(results);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === adminPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Yanlış şifre! Lütfen tekrar deneyin.');
        }
    };

// Yaş hesaplama fonksiyonu (Doğum tarihini string veya timestamp olarak kabul eder)
const calculateAge = (birthDate) => {
    if (!birthDate) return 'Bilinmiyor';

    let birth;
    if (typeof birthDate === 'string') {
        // Eğer doğum tarihi string olarak Firestore'a kaydedildiyse
        birth = new Date(birthDate);
    } else if (birthDate.toDate) {
        // Eğer doğrudan Firestore Timestamp formatındaysa
        birth = birthDate.toDate();
    } else {
        return 'Bilinmiyor';
    }

    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return `${age} yaş`;
};

    // Otizm riski hesaplama fonksiyonu
    const analyzeRisk = (answers) => {
        if (!answers || answers.length === 0) return { 
            risk: 'Bilinmiyor', 
            mesaj: 'Yanıt bulunamadı. Lütfen testi kontrol edin.' 
        };
    
        // M-CHAT-R/F'deki kritik sorular
        const kritikSorular = [2, 5, 6, 7, 9, 13, 14, 15]; // Kritik soruların indexleri (1'den başlıyorsa 0 indeks ekleyerek güncelle)
    
        let kritikHayirSayisi = 0;
        let toplamHayirSayisi = 0;
    
        answers.forEach((cevap, index) => {
            if (cevap === "Hayır") {
                toplamHayirSayisi++;
                if (kritikSorular.includes(index + 1)) {
                    kritikHayirSayisi++;
                }
            }
        });
    
        // Risk analizi
        if (kritikHayirSayisi >= 2 || toplamHayirSayisi >= 8) {
            return { 
                risk: "🚨 Yüksek Risk", 
                mesaj: `
                Yaptığız test sonucuna göre çocuğunuzun otizm açısından **yüksek risk taşıdığı** görülmektedir.  
                **Önerilen Adımlar:**  
                - En kısa sürede bir çocuk nöroloğu veya gelişim uzmanına danışmalısınız.  
                - **Online Otizm Danışmanlığı** hizmetimizden yararlanarak gelişim sürecine destek olabilirsiniz.  
                - Erken müdahale, çocuğunuzun gelişimi için büyük bir avantaj sağlar.  
                `
            };
        } else if (kritikHayirSayisi === 1 || toplamHayirSayisi >= 3) {
            return { 
                risk: "⚠️ Orta Risk", 
                mesaj: `
                Yaptığız test sonucuna göre çocuğunuzda otizme işaret edebilecek bazı belirtiler olabilir.  
                **Ne Yapmalısınız?**  
                - Çocuğunuzun sosyal ve iletişim becerilerini desteklemek için etkileşimli oyunlar oynayın.  
                - Bir çocuk gelişim uzmanına veya psikoloğa danışabilirsiniz.  
                - **Online Otizm Danışmanlığı** hizmetimizden rehberlik alabilirsiniz.  
                `
            };
        } else {
            return { 
                risk: "✅ Düşük Risk", 
                mesaj: `
                Yaptığız test sonucuna göre çocuğunuzun otizm riski düşük görünüyor. Ancak gelişimini takip etmeye devam edin.  
                **Önerilen Adımlar:**  
                - Çocuğunuzla bol bol göz teması kurarak konuşun ve oyunlar oynayın.  
                - Eğer hala endişeleriniz varsa, gelişim takibi için ** Online Otizm Danışma** ile iletişime geçebilirsiniz.  
                `
            };
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Sonuçları Gör</h1>
                    <form onSubmit={handleLogin}>
                        <label className="block font-medium mb-2">Şifre Girin:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Giriş Yap
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Otizm Test Sonuçları</h1>
            
            {loading ? (
                <div className="text-center text-lg text-gray-300">Yükleniyor...</div>
            ) : testResults.length === 0 ? (
                <p className="text-center text-gray-500">Henüz test sonucu yok.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Ad Soyad</th>
                                <th className="border border-gray-300 p-2">Yaş</th>
                                <th className="border border-gray-300 p-2">Telefon</th>
                                <th className="border border-gray-300 p-2">E-Posta</th>
                                <th className="border border-gray-300 p-2">Yanıtlar</th>
                                <th className="border border-gray-300 p-2">Risk Seviyesi</th>
                                <th className="border border-gray-300 p-2">Açıklama</th>
                                <th className="border border-gray-300 p-2">Tarih</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testResults.map((result) => {
                                const analiz = analyzeRisk(result.answers);
                                return (
                                    <tr key={result.id} className="border-t">
                                        <td className="border border-gray-300 p-2">{result.name || 'Bilinmiyor'}</td>
                                        <td className="border border-gray-300 p-2">{calculateAge(result.birthDate)}</td>
                                        <td className="border border-gray-300 p-2">{result.phone || 'Yok'}</td>
                                        <td className="border border-gray-300 p-2">{result.email || 'Yok'}</td>
                                        <td className="border border-gray-300 p-2">
                                            {result.answers ? result.answers.join(', ') : 'Yanıt Yok'}
                                        </td>
                                        <td className="border border-gray-300 p-2 font-bold">
                                            {analiz.risk}
                                        </td>
                                        <td className="border border-gray-300 p-2">{analiz.mesaj}</td>
                                        <td className="border border-gray-300 p-2">
                                            {result.submittedAt ? new Date(result.submittedAt.toDate()).toLocaleString() : 'Yok'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
