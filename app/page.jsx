'use client';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
            window.chatbase = (...args) => {
                if (!window.chatbase.q) {
                    window.chatbase.q = [];
                }
                window.chatbase.q.push(args);
            };
            window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                    if (prop === 'q') {
                        return target.q;
                    }
                    return (...args) => target(prop, ...args);
                }
            });
        }

        const onLoad = () => {
            const script = document.createElement('script');
            script.src = 'https://www.chatbase.co/embed.min.js';
            script.id = 'WAlB5bCRUkhz_HGkJ5QJc';
            script.dataset.domain = 'www.chatbase.co';
            document.body.appendChild(script);
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
        }

        const observer = new MutationObserver(() => {
            document.body.removeAttribute('cz-shortcut-listen');
        });
        observer.observe(document.body, { attributes: true });

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: 'Bireysel Eğitim Danışmanlığı',
            description: 'Çocuğunuzun bireysel ihtiyaçlarına uygun özel eğitim programları oluşturuyoruz.',
            link: '/services/bireysel-egitim-danismanligi'
        },
        {
            title: 'Sosyal Becerilerin Geliştirilmesi',
            description: 'Çocukların sosyal becerilerini geliştirmek için etkinlik önerileri ve yöntemler sunmak.',
            link: '/services/sosyal-becerilerin-gelistirilmesi'
        },
        {
            title: 'Davranış Yönetimi',
            description: 'Davranış problemleri ile başa çıkma stratejileri ve pozitif davranış yönetimi teknikleri.',
            link: '/services/davranis-yonetimi'
        },
        {
            title: 'Motor Becerilerin Geliştirilmesi',
            description: 'Evde çocukların motor becerilerini geliştirmek için egzersiz teknikleri.',
            link: '/services/motor-becerilerin-gelistirilmesi'
        },
        {
            title: 'İletişim Becerilerinin Desteklenmesi',
            description: 'Çocukların iletişim becerilerini geliştirmek için öneriler ve araçlar.',
            link: '/services/iletisim-becerilerinin-desteklenmesi'
        },
        {
            title: 'Günlük Yaşam Becerileri',
            description: 'Günlük yaşamda bağımsızlık kazanmak için pratik beceriler ve ipuçları.',
            link: '/services/gunluk-yasam-becerileri'
        }
    ];

    return (
        <>
            <Head>
                <title>Online Otizm Danışma - Engelsiz Beceriler</title>
                <meta
                    name="description"
                    content="Otizmli çocuklar ve aileleri için bireysel eğitim, terapi rehberliği, sosyal beceri geliştirme, aile desteği ve daha fazlası."
                />
                <meta
                    name="keywords"
                    content="Otizm danışmanlık, bireysel eğitim, sosyal beceriler, aile rehberliği, otizm destek"
                />
                <meta name="author" content="Online Otizm Danışma" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Online Otizm Danışma - Engelsiz Beceriler" />
                <meta
                    property="og:description"
                    content="Otizmli çocuklar ve aileleri için bireysel eğitim, terapi rehberliği, sosyal beceri geliştirme, aile desteği ve daha fazlası."
                />
                <meta property="og:image" content="https://onlineotizmdanisma.com/favicon.ico" />
                <meta property="og:url" content="https://onlineotizmdanisma.com/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-600 text-gray-400 min-h-screen py-10 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-wrap items-center justify-center mb-8 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                            <Image
                                src="/home-pic-optimized.webp"
                                alt="Otizm danışmanlık görseli"
                                width={400}
                                height={400}
                                quality={60}
                                className="object-cover rounded-lg shadow-md"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left md:pl-4">
                            <h1 className="text-4xl font-bold text-gray-100">Online Otizm Danışma</h1>
                            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                                Online Otizm Danışma, otizm spektrumundaki çocukların ailelerine rehberlik ve destek
                                sağlar. Erken tanı, sosyal beceri geliştirme, iletişim desteği ve günlük yaşam
                                becerilerinin kazandırılması gibi birçok alanda uzman desteği sunar. Online Otizm
                                Danışma, her adımda yanınızda!
                            </p>

                            {/* Otizm Testi Butonu */}
                            <div className="mt-6">
                                <Link href="/otizm_test">
                                    <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all">
                                        🧩 Çocuğumu Değerlendir
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Hizmetlerimiz</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <Link key={index} href={service.link} passHref legacyBehavior>
                                    <a className="no-underline">
                                        <div className="bg-gray-700 p-6 rounded cursor-pointer border-none transition duration-200 hover:bg-gray-600 hover:text-white">
                                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-300">{service.description}</p>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
                {/* WhatsApp Butonu */}
                {/* <a
                    href="https://wa.me/905411808198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all flex items-center space-x-2"
                >
                    <span className="text-white text-lg font-medium">Uzmana Danış</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.13.56 4.15 1.63 5.94L0 24l6.31-1.63A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.95 17.4l-.88-.43c-.45-.22-.78-.2-1.11.14l-.33.33c-.22.22-.56.44-.88.33a9.67 9.67 0 01-4.63-4.63c-.11-.33 0-.66.33-.88l.33-.33c.34-.34.36-.67.14-1.11l-.44-.89c-.22-.45-.56-.67-.9-.56-.56.11-1.1.45-1.56.9-.56.56-1.22 1.45-1.22 2.33 0 .22 0 .45.11.67a12.49 12.49 0 006.66 6.66c.22.11.45.11.67.11.89 0 1.78-.67 2.33-1.22.45-.45.79-.89.9-1.56.11-.33-.11-.67-.56-.89z" />
                    </svg>
                </a> */}
            </main>
        </>
    );
}
