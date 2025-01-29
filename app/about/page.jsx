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
    {
      title: "Erişim Kolaylığı ve Esneklik",
      description:
        "Coğrafi konumdan bağımsız olarak uzman desteğine her yerden ulaşabilirsiniz. Esnek randevu saatleri ile zamandan tasarruf edin.",
      icon: "🌍",
    },
    {
      title: "Zamandan ve Maliyetten Tasarruf",
      description:
        "Ulaşım ve diğer ek masrafları ortadan kaldırarak daha ekonomik bir danışmanlık hizmeti sunuyoruz.",
      icon: "💰",
    },
    {
      title: "Kişiselleştirilmiş Destek",
      description:
        "Her çocuğun ihtiyacına özel olarak hazırlanan bireysel eğitim planlarıyla gelişim süreçlerini destekliyoruz.",
      icon: "🎯",
    },
    {
      title: "Ev Ortamında Rahatlık ve Güven",
      description:
        "Çocuklar, kendi ev ortamlarında daha rahat hisseder ve eğitim süreçlerine daha kolay adapte olabilirler.",
      icon: "🏡",
    },
    {
      title: "Ailelerin Sürece Dahil Olması",
      description:
        "Ebeveynlere doğrudan rehberlik ederek çocuklarına nasıl destek olabileceklerini öğretiyoruz.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Sürekli ve Güncel Bilgiye Erişim",
      description:
        "Eğitim materyalleri ve kaynaklara kolayca ulaşarak en güncel eğitim yöntemlerini öğrenebilirsiniz.",
      icon: "📚",
    },
    {
      title: "Sosyal ve Duygusal Destek",
      description:
        "Aileler için bireysel danışmanlık ve topluluk desteği sunarak duygusal dayanıklılığı artırıyoruz.",
      icon: "❤️",
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