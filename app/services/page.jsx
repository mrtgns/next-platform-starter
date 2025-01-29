"use client";

import Link from "next/link";
import Head from "next/head";

export default function Services() {
  const services = [
    {
      title: "Bireysel Eğitim Danışmanlığı",
      description:
        "Çocukların bireysel ihtiyaçlarına uygun eğitim programları oluşturuyoruz.",
      icon: "🎓",
    },
    {
      title: "Aile Desteği ve Eğitimi",
      description: "Aile üyelerinin otizm konusunda bilinçlenmesi ve çocuğa nasıl destek olabilecekleri konusunda eğitimler.",
      icon: "👨‍👩‍👧‍👦",
    },
    
    {
      title: "Online Eğitim ve Destek",
      description:
        "Evden eğitim desteği almak isteyenler için çevrimiçi çözümler sunuyoruz.",
      icon: "💻",
    },
    {
      title: "Eğitim ve Terapi Rehberliği",
      description: "Otizmli çocuklar için uygun eğitim ve terapi programları hakkında bilgi ve rehberlik sağlamak.",
      icon: "📚",
    },
    {
      title: "Sosyal Becerilerin Geliştirilmesi",
      description: "Çocukların sosyal becerilerini geliştirmek için etkinlik önerileri ve yöntemler sunmak.",
      icon: "🤝",
    },
    {
      title: "Davranış Yönetimi",
      description: "Davranış problemleri ile başa çıkma stratejileri ve pozitif davranış yönetimi teknikleri.",
      icon: "🧠",
    },
    {
      title: "Motor Becerilerin Geliştirilmesi",
      description: "Ergoterapist eşliğinde evde çocukların motor becerilerini geliştirmek için egzersiz teknikleri.",
      icon: "🏃‍♂️",
    },
    {
      title: "İletişim Becerilerinin Desteklenmesi",
      description: "Çocukların iletişim becerilerini geliştirmek için öneriler ve araçlar.",
      icon: "🗣️",
    },
    {
      title: "Erken Müdahale Programları",
      description: "Erken tanı ve müdahale programları hakkında bilgi ve yönlendirme.",
      icon: "⏳",
    },
    {
      title: "Ulaşılabilir Kaynak Bulma",
      description: "Aileler için çevrimiçi destek ve kaynak bilgileri.",
      icon: "🔍",
    },
    {
      title: "Günlük Yaşam Becerileri",
      description: "Günlük yaşamda bağımsızlık kazanmak için pratik beceriler ve ipuçları.",
      icon: "🏡",
    },
  ];

  return (
    <>
      <Head>
        <title>Hizmetlerimiz - Engelsiz Beceriler</title>
        <meta
          name="description"
          content="Engelsiz Beceriler olarak bireysel eğitim danışmanlığı, aile rehberliği ve online eğitim destek hizmetleri sunuyoruz."
        />
        <meta
          name="keywords"
          content="Engelsiz Beceriler, hizmetlerimiz, bireysel eğitim danışmanlığı, aile rehberliği, online eğitim destek"
        />
        <meta name="author" content="Engelsiz Beceriler" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hizmetlerimiz - Engelsiz Beceriler" />
        <meta
          property="og:description"
          content="Engelsiz Beceriler olarak bireysel eğitim danışmanlığı, aile rehberliği ve online eğitim destek hizmetleri sunuyoruz."
        />
        <meta property="og:url" content="https://siteniz.com/services" />
        <meta
          property="og:image"
          content="https://siteniz.com/path-to-your-logo.png"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-gray-600 text-gray-300 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-semibold text-gray-100 mb-10">
            Hizmetlerimiz
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:bg-gray-600 transition duration-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200">
                Daha Fazla Bilgi Al
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}