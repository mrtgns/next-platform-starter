// pages/about.js
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Hakkımızda
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Otizmli bireylerin ve ailelerinin yaşam kalitesini artırmayı amaçlayan bir platformuz.
          Uzmanlarımız, ailelere ve bireylere online danışmanlık hizmeti sunarak, gelişimsel
          süreçlerinde destek sağlamaktadır. Amacımız, bilimsel yöntemlerle bireylerin potansiyellerini en
          üst düzeye çıkarmalarına yardımcı olmak ve ailelerin bu yolculukta yanlarında olmaktır.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Misyonumuz</h2>
            <p className="text-gray-700 leading-relaxed">
              Misyonumuz, otizmli bireylerin eğitim, iletişim ve sosyal yaşam becerilerini geliştirecek
              araç ve kaynakları erişilebilir kılmaktır. Online danışmanlık hizmetlerimiz ile, ailelere ve
              bireylere rehberlik ederek, bağımsız ve mutlu bir yaşam için temel oluşturuyoruz.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Vizyonumuz</h2>
            <p className="text-gray-700 leading-relaxed">
              Vizyonumuz, otizm topluluğu için bir fark yaratmak, bireylerin potansiyellerine ulaşmasını
              sağlamak ve toplumda otizme yönelik farkındalığı artırmaktır. Teknolojiyi en iyi şekilde
              kullanarak, destek hizmetlerini her yere ulaştırmayı hedefliyoruz.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-center">Değerlerimiz</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Bireysel farkları ve potansiyelleri ön planda tutmak.</li>
            <li>Bilimsel temellere dayalı hizmetler sunmak.</li>
            <li>Aileleri güçlendirerek birlikte bir yolculuk yapmak.</li>
            <li>Empati, saygı ve güvenilirlik ilkeleriyle çalışmak.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;