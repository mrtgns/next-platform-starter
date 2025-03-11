"use client";

export default function AboutUs() {
  const aboutSections = [
    {
      title: "Hakkımızda",
      description:
        "Online Otizm Danışma, otizmli çocukların ailelerine rehberlik ve destek olmak için kurulmuş bir platformdur. Amacımız, bilimsel temellere dayalı eğitim programları, sosyal beceri geliştirme yöntemleri ve davranış yönetimi stratejileri ile ailelere güvenilir bir rehber sunmaktır. Aileler için özel olarak hazırladığımız platformda, evde kolayca uygulanabilecek etkinlikler, eğitim programları ve oyun tabanlı aktiviteler sunuyoruz.",
      icon: "🌟",
    },
    {
      title: "Misyonumuz",
      description:
        "Otizmli çocukların ve ailelerinin yaşam kalitesini artırmak için bilimsel, erişilebilir ve etkili destek sunmak. Ailelerin çocuklarına evde daha etkili destek olmalarını sağlamak ve bağımsız yaşam becerilerini geliştirmelerine yardımcı olmak.",
      icon: "🎯",
    },
    {
      title: "Vizyonumuz",
      description:
        "Otizmli çocuklar ve aileleri için güvenilir ve kapsamlı bir kaynak merkezi olmak. Her çocuğun bireysel ihtiyaçlarına göre özelleştirilmiş eğitim programları sunarak, ailelerin başvurabileceği güvenilir bir rehber haline gelmek.",
      icon: "🔍",
    },
    {
      title: "Değerlerimiz",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bilimsellik:</strong> Bilimsel temellere dayalı içerikler sunuyoruz.</li>
          <li><strong>Erişilebilirlik:</strong> Her aile, ihtiyaç duyduğu bilgiye kolayca ulaşabilmelidir.</li>
          <li><strong>Empati:</strong> Ailelerin ve çocukların yaşadığı zorlukları anlıyoruz.</li>
          <li><strong>Bağımsızlık:</strong> Çocukların günlük yaşamda bağımsız olmalarını destekliyoruz.</li>
          <li><strong>Güven:</strong> Ailelerin güvenle başvurabileceği bir platform sunuyoruz.</li>
          <li><strong>Sürekli Gelişim:</strong> İçeriklerimizi sürekli güncelleyerek en iyi desteği sağlıyoruz.</li>
        </ul>
      ),
      icon: "💡",
    },
  ];

  return (
    <div className="bg-gray-600 text-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-semibold text-white mb-10">
          Hakkımızda
        </h1>

        {aboutSections.map((section, index) => (
          <div key={index} className="mb-8 border-b border-gray-700 pb-4">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </h2>
            <div className="text-gray-300">{section.description}</div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200 inline-block"
          >
            Daha Fazla Bilgi Al
          </a>
        </div>
      </div>
    </div>
  );
}
