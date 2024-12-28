"use client";

import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Bireysel Eğitim Danışmanlığı",
      description:
        "Çocukların bireysel ihtiyaçlarına uygun eğitim programları oluşturuyoruz.",
      icon: "🎓",
    },
    {
      title: "Aile Rehberliği",
      description:
        "Ailelerin çocuklarına en iyi şekilde destek verebilmeleri için rehberlik sağlıyoruz.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Grup Etkinlikleri",
      description:
        "Sosyal becerileri geliştirmek için grup etkinlikleri düzenliyoruz.",
      icon: "🤝",
    },
    {
      title: "Online Eğitim ve Destek",
      description:
        "Evden eğitim desteği almak isteyenler için çevrimiçi çözümler sunuyoruz.",
      icon: "💻",
    },
  ];

  return (
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
  );
}