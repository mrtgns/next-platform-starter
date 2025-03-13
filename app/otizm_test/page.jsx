"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function OtizmTesti() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    day: '',
    month: '',
    year: '',
    sehir: '',
    answers: Array(20).fill(null),
  });

  const [error, setError] = useState('');

  const questions = [
    'Çocuğunuz göz teması kuruyor mu?',
    'İsmi söylendiğinde tepki veriyor mu?',
    'Başka çocuklarla oyun oynuyor mu?',
    'İletişim kurarken işaret kullanıyor mu?',
    'Nesnelere veya oyuncaklara ilgi gösteriyor mu?',
    'Sosyal gülümseme yapıyor mu?',
    'İsteklerini belirtmek için kelimeler veya sesler çıkarıyor mu?',
    'Yeni şeyler öğrenirken taklit yapıyor mu?',
    'Rutin değişikliklere uyum sağlıyor mu?',
    'Tekrarlayıcı hareketler yapıyor mu?',
    'Oyuncakları amacına uygun kullanıyor mu?',
    'Ses veya dokulara aşırı hassasiyet var mı?',
    'Duygularını ifade etmekte zorlanıyor mu?',
    'Yeni insanlarla etkileşime giriyor mu?',
    'Sorulara uygun şekilde yanıt veriyor mu?',
    'Belirli konulara aşırı ilgi gösteriyor mu?',
    'Beklemeyi ve sırasını beklemeyi biliyor mu?',
    'Günlük rutinlerinde aşırı katı mı?',
    'Sesiyle ilgili gariplikler var mı?',
    'Başkalarının ilgisini çekmek için işaret ediyor mu?',
  ];

  const kritikSorular = [2, 5, 6, 7, 9, 13, 14, 15];

  // Kullanıcının Evet/Hayır butonlarını tıklamasıyla answers dizisini güncelleme
  const handleAnswer = (index, answer) => {
    setFormData((prev) => {
      const updatedAnswers = [...prev.answers];
      updatedAnswers[index] = answer;
      return { ...prev, answers: updatedAnswers };
    });
  };

  // Metin kutularındaki değişiklikleri formData'ya yazma
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✔️ Orijinal (veya istediğiniz) risk mesajlarını geri koyduk
  const analyzeRisk = (answers) => {
    let kritikHayirSayisi = 0;
    let toplamHayirSayisi = 0;

    answers.forEach((cevap, index) => {
      if (cevap === 'Hayır') {
        toplamHayirSayisi++;
        if (kritikSorular.includes(index + 1)) {
          kritikHayirSayisi++;
        }
      }
    });

    if (kritikHayirSayisi >= 2 || toplamHayirSayisi >= 8) {
      return {
        risk: '🚨 Yüksek Risk',
        mesaj: `Yaptığınız test sonucuna göre çocuğunuzun otizm açısından **yüksek risk taşıdığı** görülmektedir.
**Önerilen Adımlar:** 
- En kısa sürede bir çocuk nöroloğu veya gelişim uzmanına danışmalısınız. 
- **Online Otizm Danışmanlığı** hizmetimizden yararlanarak gelişim sürecine destek olabilirsiniz. 
- Erken müdahale, çocuğunuzun gelişimi için büyük bir avantaj sağlar.`,
      };
    } else if (kritikHayirSayisi === 1 || toplamHayirSayisi >= 3) {
      return {
        risk: '⚠️ Orta Risk',
        mesaj: `Yaptığınız test sonucuna göre çocuğunuzda otizme işaret edebilecek bazı belirtiler olabilir.
**Ne Yapmalısınız?**  
- **Online Otizm Danışmanlığı** hizmetimizden yararlanarak gelişim sürecine destek olabilirsiniz.  
- Bir çocuk gelişim uzmanına veya psikoloğa danışabilirsiniz.`,
      };
    } else {
      return {
        risk: '✅ Düşük Risk',
        mesaj: `Yaptığınız test sonucuna göre çocuğunuzun otizm riski düşük görünüyor. Ancak gelişimini takip etmeye devam edin.
**Önerilen Adımlar:** 
- Çocuğunuzla bol bol göz teması kurarak konuşun ve oyunlar oynayın. 
- Eğer hala endişeleriniz varsa, gelişim takibi için **Online Otizm Danışma** ile iletişime geçebilirsiniz.`,
      };
    }
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basit bir doğrulama (Boş alan var mı, vs.)
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.sehir ||
      formData.answers.includes(null)
    ) {
      setError('Lütfen tüm alanları doldurun ve tüm soruları cevaplayın.');
      return;
    }

    const riskAnalizi = analyzeRisk(formData.answers);

    try {
      await addDoc(collection(db, 'otizm_testleri'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        sehir: formData.sehir,
        birthDate: new Date(`${formData.year}-${formData.month}-${formData.day}`),
        answers: formData.answers,
        risk: riskAnalizi.risk,
        message: riskAnalizi.mesaj,
        submittedAt: Timestamp.now(),
      });

      // Parametreler encode edilerek yönlendirme
      router.push(
        `/otizm_test/result?result=${encodeURIComponent(riskAnalizi.risk)}&message=${encodeURIComponent(riskAnalizi.mesaj)}`
      );
    } catch (error) {
      console.error('Veri kaydedilemedi:', error);
      setError(`Veri kaydedilemedi: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">M-CHAT-R/F Testi</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Kişisel Bilgiler */}
          <div>
            <label className="block font-semibold">Ad Soyad*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Şehir*</label>
            <input
              type="text"
              name="sehir"
              value={formData.sehir}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Telefon*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">E-posta*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Doğum Tarihi*</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="day"
                placeholder="Gün"
                value={formData.day}
                onChange={handleChange}
                className="border p-2 w-1/3 rounded"
              />
              <input
                type="number"
                name="month"
                placeholder="Ay"
                value={formData.month}
                onChange={handleChange}
                className="border p-2 w-1/3 rounded"
              />
              <input
                type="number"
                name="year"
                placeholder="Yıl"
                value={formData.year}
                onChange={handleChange}
                className="border p-2 w-1/3 rounded"
              />
            </div>
          </div>

          {/* Sorular */}
          {questions.map((question, index) => (
            <div key={index} className="p-2 border rounded mb-2">
              <p className="font-semibold">{index + 1}. {question}</p>
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => handleAnswer(index, 'Evet')}
                  className={`px-4 py-2 rounded ${
                    formData.answers[index] === 'Evet' ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  Evet
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(index, 'Hayır')}
                  className={`px-4 py-2 rounded ${
                    formData.answers[index] === 'Hayır' ? 'bg-red-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  Hayır
                </button>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Testi Gönder
          </button>
        </form>
      </div>
    </div>
  );
}