'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices([
            {
                title: 'Bireysel Eğitim Danışmanlığı',
                description: 'Çocuğunuzun bireysel ihtiyaçlarına uygun özel eğitim programları oluşturuyoruz.',
                icon: '🎓',
                slug: 'bireysel-egitim-danismanligi'
            },
            {
                title: 'Sosyal Becerilerin Geliştirilmesi',
                description: 'Çocukların sosyal becerilerini geliştirmek için etkinlik önerileri ve yöntemler sunmak.',
                icon: '🤝',
                slug: 'sosyal-becerilerin-gelistirilmesi'
            },
            {
                title: 'Davranış Yönetimi',
                description: 'Davranış problemleri ile başa çıkma stratejileri ve pozitif davranış yönetimi teknikleri.',
                icon: '🧠',
                slug: 'davranis-yonetimi'
            },
            {
                title: 'Motor Becerilerin Geliştirilmesi',
                description: 'Ergoterapist eşliğinde evde çocukların motor becerilerini geliştirmek için egzersiz teknikleri.',
                icon: '🏃‍♂️',
                slug: 'motor-becerilerin-gelistirilmesi'
            },
            {
                title: 'İletişim Becerilerinin Desteklenmesi',
                description: 'Çocukların iletişim becerilerini geliştirmek için öneriler ve araçlar.',
                icon: '🗣️',
                slug: 'iletisim-becerilerinin-desteklenmesi'
            },
            {
                title: 'Günlük Yaşam Becerileri',
                description: 'Günlük yaşamda bağımsızlık kazanmak için pratik beceriler ve ipuçları.',
                icon: '🏡',
                slug: 'gunluk-yasam-becerileri'
            }
        ]);
    }, []);

    return (
        <>
            <Head>
                <title>Hizmetlerimiz - Online Otizm Danışma</title>
                <meta
                    name="description"
                    content="Online Otizm Danışma olarak bireysel eğitim danışmanlığı, aile rehberliği ve online eğitim destek hizmetleri sunuyoruz."
                />
                <meta
                    name="keywords"
                    content="Online Otizm Danışma, hizmetlerimiz, bireysel eğitim danışmanlığı, aile rehberliği, online eğitim destek"
                />
                <meta name="author" content="Online Otizm Danışma" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Hizmetlerimiz - Online Otizm Danışma" />
                <meta
                    property="og:description"
                    content="Online Otizm Danışma olarak bireysel eğitim danışmanlığı, aile rehberliği ve online eğitim destek hizmetleri sunuyoruz."
                />
                <meta property="og:url" content="https://siteniz.com/services" />
                <meta property="og:image" content="https://siteniz.com/path-to-your-logo.png" />
                <meta property="og:type" content="website" />
            </Head>

            <div className="bg-gray-600 text-gray-300 min-h-screen py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-center text-4xl font-semibold text-gray-100 mb-4">Hizmetlerimiz</h1>
                    <p className="text-center text-lg text-gray-400 mb-10">
                        Çocuğunuzun bireysel gelişimini desteklemek için özel olarak hazırladığımız eğitsel değerlendirme ile evde kolayca uygulayabileceğiniz etkinliklerle çocuğunuzun gelişimine  yardımcı oluyoruz.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link key={service.slug} href={`/services/${service.slug}`} className="no-underline hover:no-underline">
                                <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:bg-gray-600 transition duration-200">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h2 className="text-2xl font-bold text-gray-100 mb-2">{service.title}</h2>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>
                            </Link>
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