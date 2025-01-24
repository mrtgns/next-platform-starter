'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'bloglar'));
                const blogsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogsData);
                setLoading(false);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="text-center text-lg text-gray-300">Yükleniyor...</div>;
    }

    return (
        <div className="bg-gray-600 min-h-screen py-12">
            {/* SEO için Meta Etiketleri */}
            <Head>
                <title>Blog Yazıları | Güncel İçerikler ve Haberler</title>
                <meta
                    name="description"
                    content="En yeni blog yazılarını keşfedin. Güncel haberler, bilgiler ve rehber içerikler sizi bekliyor!"
                />
                <meta
                    name="keywords"
                    content="Çocuğumda otizm belirtileri nelerdir?,Otizm teşhisi nasıl konur?,Evde otizmli çocuğumla nasıl çalışabilirim?,otizm"
                />
                <meta name="robots" content="index, follow" />
            </Head>

            {/* Schema Markup */}
            <Script
                id="schema-markup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        headline: 'Blog Yazıları | Güncel İçerikler ve Haberler',
                        description:
                            'Çocuğumda otizm belirtileri nelerdir?,Otizm teşhisi nasıl konur?,Evde otizmli çocuğumla nasıl çalışabilirim?,otizmEn yeni blog yazılarını keşfedin. Güncel haberler, bilgiler ve rehber içerikler sizi bekliyor!'
                    })
                }}
            />

            {/* Sayfa Başlığı */}
            <h1 className="text-3xl font-bold text-center mb-12 text-gray-100">Blog Yazıları</h1>

            {/* Blog Kartları */}
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden bg-gray-700">
                                {/* Blog Resmi */}
                                <Image
                                    src={`/blog-resimleri/${blog.resim || 'default-blog.png'}`} // Public klasörü altında blog-resimleri dizini
                                    alt={blog.baslik} // SEO için başlığı alt text olarak kullan
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                    quality={75}
                                    loading="lazy"
                                />
                                <div className="p-6">
                                    {/* Başlık */}
                                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">
                                        {blog.baslik}
                                    </h1>
                                    {/* İçerik */}
                                    <p className="leading-relaxed mb-3 text-gray-300">
                                        {blog.icerik[0].slice(0, 100)}... {/* İlk arrayın ilk 100 karakteri */}
                                    </p>
                                    {/* Buton */}
                                    <div className="flex items-center justify-end">
                                        <Link
                                            href={`/blog/${blog.id}`}
                                            className="text-indigo-400 inline-flex items-center hover:text-indigo-300"
                                        >
                                            Devamını Oku
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}