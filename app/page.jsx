'use client';

import Image from 'next/image';

export default function HomePage() {
    return (
        <main className="bg-gray-600 text-gray-400 min-h-screen py-10 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Başlık ve Görsel */}
                <div className="flex flex-wrap items-center justify-center mb-8 space-y-4 md:space-y-0">
                    {/* Resim */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                        <Image
                            src="/home-pic.jpg"
                            alt="Online Otizm Danışma"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                    {/* Yazı */}
                    <div className="w-full md:w-1/2 text-center md:text-left md:pl-4">
                        <h1 className="text-4xl font-bold text-gray-100">
                            Online Otizm Danışma
                        </h1>
                        <p className="text-lg text-gray-400 mt-4">
                            Otizm Yolculuğunuzda Yanınızdayız. Online Otizm Danışma, ailelere rehberlik
                            ederek otizm spektrumundaki çocuklara özel eğitim ve destek sağlar. Hizmetlerimiz arasında, otizmli
                            çocuklar için uygun eğitim ve terapi programları, sosyal becerilerin geliştirilmesi, aile desteği ve
                            eğitimi bulunmaktadır. Ayrıca, davranış yönetimi, iletişim becerilerinin desteklenmesi, erken
                            müdahale programları ve kaynak/destek grupları hakkında bilgiler sunmaktayız. Otizmli çocukların
                            eğitim hakları ve günlük yaşam becerilerini geliştirmek için de rehberlik ediyoruz.
                        </p>
                    </div>
                </div>

                {/* Hizmetler */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-100 mb-4">Hizmetlerimiz</h2>
                    <div className="space-y-6">
                        {/* Eğitim ve Terapi Rehberliği */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Eğitim ve Terapi Rehberliği</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>
                                    Otizmli çocuklar için uygun eğitim ve terapi programları hakkında bilgi ve rehberlik
                                    sağlamak.
                                </li>
                            </ul>
                        </div>
                        {/* Sosyal Becerilerin Geliştirilmesi */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                Sosyal Becerilerin Geliştirilmesi
                            </h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>
                                    Çocukların sosyal becerilerini geliştirmek için etkinlik önerileri ve yöntemler
                                    sunmak.
                                </li>
                            </ul>
                        </div>
                        {/* Aile Desteği ve Eğitimi */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Aile Desteği ve Eğitimi</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>
                                    Aile üyelerinin otizm konusunda bilinçlenmesi ve çocuğa nasıl destek olabilecekleri
                                    konusunda eğitimler.
                                </li>
                            </ul>
                        </div>
                        {/* Davranış Yönetimi */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Davranış Yönetimi</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>
                                    Davranış problemleri ile başa çıkma stratejileri ve pozitif davranış yönetimi
                                    teknikleri.
                                </li>
                            </ul>
                        </div>
                        {/* İletişim Becerilerinin Desteklenmesi */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                İletişim Becerilerinin Desteklenmesi
                            </h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>Çocukların iletişim becerilerini geliştirmek için öneriler ve araçlar.</li>
                            </ul>
                        </div>
                        {/* Erken Müdahale Programları */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Erken Müdahale Programları</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>Erken tanı ve müdahale programları hakkında bilgi ve yönlendirme.</li>
                            </ul>
                        </div>
                        {/* Kaynak ve Destek Grupları */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Kaynak ve Destek Grupları</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>Aileler için yerel ve çevrimiçi destek grupları ve kaynak bilgileri.</li>
                            </ul>
                        </div>

                        {/* Günlük Yaşam Becerileri */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Günlük Yaşam Becerileri</h3>
                            <ul className="list-disc pl-6 text-gray-300">
                                <li>Günlük yaşamda bağımsızlık kazanmak için pratik beceriler ve ipuçları.</li>
                            </ul>
                        </div>
                    </div>
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
