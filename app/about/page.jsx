"use client";

export default function AboutUs() {
  const aboutSections = [
    {
      title: "Misyonumuz",
      description:
        "Her bireyin eşit eğitim hakkına sahip olduğu bir dünya için çalışıyoruz. Otizmli bireylerin ihtiyaçlarına uygun çözümler sunmayı amaçlıyoruz.",
      icon: "🌟",
    },
    {
      title: "Vizyonumuz",
      description:
        "Otizmli bireylerin bağımsız, üretken ve mutlu bir hayat sürmelerini destekleyen lider bir platform olmak.",
      icon: "🔍",
    },
    {
      title: "Değerlerimiz",
      description:
        "Empati, yenilikçilik ve sürdürülebilirlik temel değerlerimizdir. Aileler ve uzmanlarla iş birliği içinde çalışırız.",
      icon: "💡",
    },
  ];

  return (
    <div className="bg-gray-600 text-gray-300 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-semibold text-gray-100 mb-10">
          Hakkımızda
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:bg-gray-600 transition duration-200"
            >
              <div className="text-5xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold text-gray-100 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 inline-block"
          >
            Daha Fazla Bilgi Al
          </a>
        </div>
      </div>
    </div>
  );
}