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
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            } finally {
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
            <Head>
                <title>Blog Yazıları | Güncel İçerikler ve Haberler</title>
                <meta
                    name="description"
                    content="En yeni blog yazılarını keşfedin. Güncel haberler, bilgiler ve rehber içerikler sizi bekliyor!"
                />
                <meta
                    name="keywords"
                    content="Çocuğumda otizm belirtileri nelerdir?, Otizm teşhisi nasıl konur?, Evde otizmli çocuğumla nasıl çalışabilirim?, otizm"
                />
                <meta name="robots" content="index, follow" />
            </Head>

            <Script
                id="schema-markup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        headline: 'Blog Yazıları | Güncel İçerikler ve Haberler',
                        description:
                            'Çocuğumda otizm belirtileri nelerdir?, Otizm teşhisi nasıl konur?, Evde otizmli çocuğumla nasıl çalışabilirim?, otizm. En yeni blog yazılarını keşfedin. Güncel haberler, bilgiler ve rehber içerikler sizi bekliyor!'
                    })
                }}
            />

            <h1 className="text-3xl font-bold text-center mb-12 text-gray-100">Blog Yazıları</h1>

            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden bg-gray-700">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={`/blog-resimleri/${blog.resim || 'default-blog.png'}`}
                                        alt={blog.baslik}
                                        fill
                                        sizes="100vw"
                                        className="object-cover rounded-t-lg"
                                        quality={75}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-100 mb-3 truncate">
                                        {blog.baslik}
                                    </h2>
                                    <p className="leading-relaxed text-gray-300 mb-4">
                                        {blog.icerik[0].slice(0, 100)}...
                                    </p>
                                    <div className="flex justify-end">
                                        <Link
                                            href={`/blog/${blog.id}`}
                                            className="text-indigo-400 hover:text-indigo-300 transition"
                                        >
                                            Devamını Oku
                                            <svg
                                                className="w-4 h-4 ml-1 inline"
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
