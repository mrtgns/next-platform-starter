"use client";

export default function AboutUs() {
  const aboutSections = [
    {
      title: "Hakkımızda",
      description:
        "Online Otizm Danışma, otizm spektrumundaki çocukların ailelerine rehberlik ve destek sağlamak amacıyla kurulmuş bir platformdur. Amacımız, otizmli çocukların gelişimini desteklemek için ailelere bilimsel temellere dayalı eğitim programları, sosyal beceri geliştirme yöntemleri ve davranış yönetimi stratejileri sunmaktır. Aileler için özel olarak hazırladığımız platformda, çocukların gelişimini destekleyecek evde uygulanabilir etkinlikler, eğitim programları ve oyun tabanlı aktiviteler sunuyoruz.",
      icon: "🌟",
    },
    {
      title: "Misyonumuz",
      description:
        "Otizm spektrumundaki çocukların ve ailelerinin yaşam kalitesini artırmak için bilimsel temellere dayalı, kolay erişilebilir ve etkili destek sağlamak. Ailelerin çocuklarına evde etkili bir şekilde destek olmalarına yardımcı olmak ve çocukların bağımsız yaşam becerilerini kazanmalarını sağlamak.",
      icon: "🎯",
    },
    {
      title: "Vizyonumuz",
      description:
        "Otizmli çocukların ve ailelerinin ihtiyaçlarına yönelik kapsamlı bir kaynak merkezi haline gelmek. Her çocuğun bireysel ihtiyaçlarına göre özel olarak hazırlanmış eğitim programları ve aktiviteler sunarak, ailelerin güvenilir bir rehber olarak başvurabileceği bir platform olmak.",
      icon: "🔍",
    },
    {
      title: "Değerlerimiz",
      description:
        "Bilimsellik, erişilebilirlik, empati, bağımsızlık, güven ve sürekli gelişim temel değerlerimizdir. Ailelerin ve çocukların ihtiyaçlarını anlayarak güvenilir ve bilimsel bir destek sunmayı hedefliyoruz.",
      icon: "💡",
    }
  ];

  return (
    <div className="bg-gray-600 text-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-semibold text-white mb-10">
          Hakkımızda
        </h1>

        {aboutSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </h2>
            <p className="text-gray-200">{section.description}</p>
          </div>
        ))}

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
