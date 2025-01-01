'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
    useEffect(() => {
        // Chatbase yükleme
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
            window.chatbase = (...args) => {
                if (!window.chatbase.q) {
                    window.chatbase.q = [];
                }
                window.chatbase.q.push(args);
            };
            window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                    if (prop === "q") {
                        return target.q;
                    }
                    return (...args) => target(prop, ...args);
                },
            });
        }

        const onLoad = function () {
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "WAlB5bCRUkhz_HGkJ5QJc"; // Chatbase bot ID'nizi buraya ekleyin.
            script.domain = "www.chatbase.co";
            document.body.appendChild(script);
        };

        if (document.readyState === "complete") {
            onLoad();
        } else {
            window.addEventListener("load", onLoad);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Online Otizm Danışma - Engelsiz Beceriler</title>
                <meta
                    name="description"
                    content="Otizmli çocuklar ve aileleri için bireysel eğitim, terapi rehberliği, sosyal beceri geliştirme, aile desteği ve daha fazlası. Otizm yolculuğunuzda yanınızdayız."
                />
                <meta
                    name="keywords"
                    content="Otizm danışmanlık, bireysel eğitim, sosyal beceriler, aile rehberliği, otizm destek"
                />
                <meta name="author" content="Engelsiz Beceriler" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Online Otizm Danışma - Engelsiz Beceriler" />
                <meta
                    property="og:description"
                    content="Otizmli çocuklar ve aileleri için bireysel eğitim, terapi rehberliği, sosyal beceri geliştirme, aile desteği ve daha fazlası."
                />
                <meta property="og:image" content="https://siteniz.com/path-to-your-logo.png" />
                <meta property="og:url" content="https://siteniz.com/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-600 text-gray-400 min-h-screen py-10 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Başlık ve Görsel */}
                    <div className="flex flex-wrap items-center justify-center mb-8 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                            <Image
                                src="/home-pic.jpg"
                                alt="Otizm danışmanlık görseli"
                                width={500}
                                height={500}
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left md:pl-4">
                            <h1 className="text-4xl font-bold text-gray-100">Online Otizm Danışma</h1>
                            <p className="text-lg text-gray-400 mt-4">
                                Otizm Yolculuğunuzda Yanınızdayız. Online Otizm Danışma, ailelere rehberlik ederek otizm
                                spektrumundaki çocuklara özel eğitim ve destek sağlar. Eğitim, terapi programları,
                                sosyal becerilerin geliştirilmesi, aile desteği ve daha fazlasını sunuyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}