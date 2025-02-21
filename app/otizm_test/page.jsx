"use client";

import { useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function OtizmTesti() {
  // **Durum Yönetimi (State)**
  // Form verilerini ve diğer durumları tutmak için useState kullanıyoruz.
  const [formData, setFormData] = useState({
    name: "",        // Çocuğun adı
    phone: "",       // Telefon numarası
    email: "",       // E-posta adresi
    day: "",         // Doğum günü (gün)
    month: "",       // Doğum ayı
    year: "",        // Doğum yılı
    sehir: "",       // Şehir
    answers: Array(20).fill(null), // 20 sorunun cevaplarını tutan dizi (başlangıçta hepsi null)
  });

  const [error, setError] = useState("");       // Hata mesajlarını tutar
  const [submitted, setSubmitted] = useState(false); // Form gönderildi mi?
  const [testResult, setTestResult] = useState(null); // Test sonucunu tutar

  // **Sorular Listesi**
  // Testte sorulacak 20 soru aşağıda tanımlı.
  const questions = [
    "Çocuğunuz göz teması kuruyor mu?",
    "İsmi söylendiğinde tepki veriyor mu?",
    "Başka çocuklarla oyun oynuyor mu?",
    "İletişim kurarken işaret kullanıyor mu?",
    "Nesnelere veya oyuncaklara ilgi gösteriyor mu?",
    "Sosyal gülümseme yapıyor mu?",
    "İsteklerini belirtmek için kelimeler veya sesler çıkarıyor mu?",
    "Yeni şeyler öğrenirken taklit yapıyor mu?",
    "Rutin değişikliklere uyum sağlıyor mu?",
    "Çok fazla sallanma veya dönme gibi tekrarlayıcı hareketler yapıyor mu?",
    "Oyuncakları amacına uygun kullanıyor mu?",
    "Aşırı hassasiyet gösterdiği sesler veya dokular var mı?",
    "Duygularını ifade etmekte zorlanıyor mu?",
    "Yeni insanlarla etkileşime giriyor mu?",
    "Sorulara uygun şekilde yanıt veriyor mu?",
    "Belirli konulara aşırı ilgi gösteriyor mu?",
    "Beklemeyi ve sırasını beklemeyi biliyor mu?",
    "Günlük rutinlerinde aşırı katı mı?",
    "Sesiyle ilgili gariplikler var mı?",
    "Başkalarının ilgisini çekmek için işaret ediyor mu?",
  ];

  // **Kritik Sorular**
  // Bu soruların "Hayır" cevabı risk analizinde daha önemli.
  const kritikSorular = [2, 5, 6, 7, 9, 13, 14, 15];

  // **Form Alanlarını Güncelleme Fonksiyonu**
  // Kullanıcı bir metin alanına (ad, telefon vb.) veri girerse bu çalışır.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // **Cevapları Güncelleme Fonksiyonu**
  // Kullanıcı "Evet" veya "Hayır" butonuna tıklarsa bu çalışır.
  const handleAnswer = (index, answer) => {
    const updatedAnswers = [...formData.answers];
    updatedAnswers[index] = answer; // Belirli sorunun cevabını günceller
    setFormData({ ...formData, answers: updatedAnswers });
  };

  // **Risk Analizi Fonksiyonu**
  // Cevaplara göre otizm riskini hesaplar.
  const analyzeRisk = (answers) => {
    if (!answers || answers.length === 0)
      return { risk: "Bilinmiyor", mesaj: "Yanıt bulunamadı." };

    let kritikHayirSayisi = 0; // Kritik sorularda "Hayır" sayısı
    let toplamHayirSayisi = 0; // Tüm sorularda "Hayır" sayısı

    answers.forEach((cevap, index) => {
      if (cevap === "Hayır") {
        toplamHayirSayisi++;
        if (kritikSorular.includes(index + 1)) {
          kritikHayirSayisi++;
        }
      }
    });

    // **Risk Seviyeleri**
    if (kritikHayirSayisi >= 2 || toplamHayirSayisi >= 8) {
      return {
        risk: "🚨 Yüksek Risk",
        mesaj: `
          Yaptığınız test sonucuna göre çocuğunuzun otizm açısından **yüksek risk taşıdığı** görülmektedir.  
          ### **Önerilen Adımlar:**  
          - En kısa sürede bir çocuk nöroloğu veya gelişim uzmanına danışmalısınız.  
          - **Online Otizm Danışmanlığı** hizmetimizden yararlanarak gelişim sürecine destek olabilirsiniz.  
          - Erken müdahale, çocuğunuzun gelişimi için büyük bir avantaj sağlar.  
        `,
      };
    } else if (kritikHayirSayisi === 1 || toplamHayirSayisi >= 3) {
      return {
        risk: "⚠️ Orta Risk",
        mesaj: `
          Yaptığınız test sonucuna göre çocuğunuzda otizme işaret edebilecek bazı belirtiler olabilir.  
          **Ne Yapmalısınız?**  
          - Çocuğunuzun sosyal ve iletişim becerilerini desteklemek için etkileşimli oyunlar oynayın.  
          - Bir çocuk gelişim uzmanına veya psikoloğa danışabilirsiniz.  
        `,
      };
    } else {
      return {
        risk: "✅ Düşük Risk",
        mesaj: `
          Yaptığınız test sonucuna göre çocuğunuzun otizm riski düşük görünüyor. Ancak gelişimini takip etmeye devam edin.  
          **Önerilen Adımlar:**  
          - Çocuğunuzla bol bol göz teması kurarak konuşun ve oyunlar oynayın.  
        `,
      };
    }
  };

  // **Form Gönderme Fonksiyonu**
  const handleSubmit = async (e) => {
    e.preventDefault();

    // **Zorunlu Alan Kontrolü**
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
      setError("Lütfen tüm zorunlu alanları doldurun ve soruları cevaplayın.");
      return;
    }

    // **E-posta ve Telefon Doğrulama**
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^\d{10,15}$/.test(phone);
    if (!isValidEmail(formData.email)) {
      setError("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
    if (!isValidPhone(formData.phone)) {
      setError("Lütfen geçerli bir telefon numarası girin (10-15 rakam).");
      return;
    }

    // **Doğum Tarihi Kontrolü**
    const formattedMonth = formData.month.padStart(2, "0"); // Ay 2 haneli olmalı
    const formattedDay = formData.day.padStart(2, "0");     // Gün 2 haneli olmalı
    const isValidDate = (day, month, year) => {
      const date = new Date(`${year}-${month}-${day}`);
      return (
        date.getDate() === Number(day) &&
        date.getMonth() + 1 === Number(month) &&
        date.getFullYear() === Number(year)
      );
    };
    if (!isValidDate(formattedDay, formattedMonth, formData.year)) {
      setError("Lütfen geçerli bir doğum tarihi girin.");
      return;
    }

    setError(""); // Hata yoksa temizle
    const riskAnalizi = analyzeRisk(formData.answers);

    // **Firebase'e Veri Kaydetme**
    try {
      await addDoc(collection(db, "otizm_testleri"), {
        name: formData.name,
        sehir: formData.sehir,
        phone: formData.phone,
        email: formData.email,
        birthDate: new Date(`${formData.year}-${formattedMonth}-${formattedDay}`),
        answers: formData.answers,
        risk: riskAnalizi.risk,
        message: riskAnalizi.mesaj,
        submittedAt: Timestamp.now(),
      });

      setTestResult({
        name: formData.name,
        risk: riskAnalizi.risk,
        message: riskAnalizi.mesaj,
      });
      setSubmitted(true); // Form gönderildi olarak işaretle
    } catch (error) {
      setError(`Veri kaydedilemedi: ${error.message}. Lütfen tekrar deneyin.`);
    }
  };

  // **Test Sonucu Gösterimi**
  if (submitted && testResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-green-600">Test Sonucunuz</h1>
          <p className="mt-4 font-bold text-lg">Çocuk Adı: {testResult.name}</p>
          <p className="mt-2 font-bold text-lg">{testResult.risk}</p>
          <p className="mt-4 text-gray-600">{testResult.message}</p>
        </div>
      </div>
    );
  }

  // **Form Arayüzü**
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">M-CHAT-R/F Testi</h1>
        <p className="text-xl text-center mb-4">Amerikan Psikiyatri Derneği Tanı Kriterleri</p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Ad Soyad */}
          <label className="block font-medium mb-1">Ad Soyad*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {/* Şehir */}
          <label className="block font-medium mb-1">Şehir*</label>
          <input
            type="text"
            name="sehir"
            value={formData.sehir}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {/* Telefon */}
          <label className="block font-medium mb-1">Telefon Numarası*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {/* E-Posta */}
          <label className="block font-medium mb-1">E-Posta*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {/* Doğum Tarihi */}
          <label className="block font-medium mb-1">Çocuğun Doğum Tarihi*</label>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              name="day"
              value={formData.day}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
              placeholder="Gün"
              required
            />
            <input
              type="number"
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
              placeholder="Ay"
              required
            />
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-1/3 p-2 border rounded"
              placeholder="Yıl"
              required
            />
          </div>
          {/* Sorular */}
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{index + 1}. {question}</p>
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => handleAnswer(index, "Evet")}
                  className={`p-2 rounded ${
                    formData.answers[index] === "Evet" ? "bg-green-600 text-white" : "bg-gray-200"
                  }`}
                >
                  Evet
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(index, "Hayır")}
                  className={`p-2 rounded ${
                    formData.answers[index] === "Hayır" ? "bg-red-600 text-white" : "bg-gray-200"
                  }`}
                >
                  Hayır
                </button>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4"
          >
            Testi Gönder
          </button>
        </form>
      </div>
    </div>
  );
}