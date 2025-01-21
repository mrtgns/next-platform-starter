'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import Head from 'next/head';
import Script from 'next/script';

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
        return <div className="text-center text-lg">Yükleniyor...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
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
            <h1 className="text-3xl font-bold text-center mb-6">Blog Yazıları</h1>

            {/* Blog Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <article key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{blog.baslik}</h2>
                            <p className="text-gray-700">{blog.icerik.slice(0, 100)}...</p>
                            <Link href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                                Daha Fazla
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
