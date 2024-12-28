"use client";

export default function HomePage() {
  return (
    <main className="bg-gray-600 text-gray-400 min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Başlık */}
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
          Online Otizm Danışma
        </h1>
        <p className="text-lg text-gray-400 text-center mb-10">
          Online Otizm Danışma, ailelere ve öğretmenlere rehberlik ederek otizm
          spektrumundaki çocuklara özel eğitim ve destek sağlar.
        </p>

        {/* Hizmetler */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            Hizmetlerimiz
          </h2>
          <div className="space-y-6">
            {/* Aile Danışmanlığı */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Aile Danışmanlığı
              </h3>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Çocuğun özel eğitim ihtiyaçlarını anlamak ve desteklemek için rehberlik sağlar.</li>
                <li>Çocuğun gelişimsel süreçlerinde ailelerin nasıl destek olabileceğini öğretir.</li>
              </ul>
            </div>
            {/* Diğer hizmetler */}
          </div>
        </section>

        {/* Çözüm Bulduğu Sorunlar */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            Çözüm Bulduğu Sorunlar
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Bilinç Eksikliği:</strong> Ailelere rehberlik eder ve bilinçlendirir.
            </li>
            <li>
              <strong>Kaynak Eksikliği:</strong> Öğretmenler ve aileler için uygun öğretim materyalleri sağlar.
            </li>
            <li>
              <strong>Erken Müdahale Eksikliği:</strong> Çocukların erken dönemde desteklenmesini sağlar.
            </li>
            <li>
              <strong>Erişim Sorunları:</strong> Uzman desteğine ulaşamayan aileler için online danışmanlık sunar.
            </li>
            <li>
              <strong>Bireyselleştirilmiş Destek Eksikliği:</strong> Çocukların bireysel ihtiyaçlarına uygun çözümler sunar.
            </li>
            <li>
              <strong>Davranış Problemleri:</strong> Uygun davranış yönetimi stratejileriyle çocukların sosyal uyumunu artırır.
            </li>
          </ul>
        </section>
      </div>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905411808198"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all flex items-center space-x-2"
      >
        <span className="text-white text-lg font-medium">Uzmana Danış</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 2.13.56 4.15 1.63 5.94L0 24l6.31-1.63A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.95 17.4l-.88-.43c-.45-.22-.78-.2-1.11.14l-.33.33c-.22.22-.56.44-.88.33a9.67 9.67 0 01-4.63-4.63c-.11-.33 0-.66.33-.88l.33-.33c.34-.34.36-.67.14-1.11l-.44-.89c-.22-.45-.56-.67-.9-.56-.56.11-1.1.45-1.56.9-.56.56-1.22 1.45-1.22 2.33 0 .22 0 .45.11.67a12.49 12.49 0 006.66 6.66c.22.11.45.11.67.11.89 0 1.78-.67 2.33-1.22.45-.45.79-.89.9-1.56.11-.33-.11-.67-.56-.89z" />
        </svg>
      </a>
    </main>
  );
}