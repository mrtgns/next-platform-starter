"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const dynamic = "force-dynamic"; // Sayfanın dinamik olmasını sağlar

function ResultContent() {
    const searchParams = useSearchParams();
    const result = searchParams?.get("result") || "Bilinmiyor";
    const message = searchParams?.get("message") ? decodeURIComponent(searchParams.get("message")) : "";

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Test Sonuçları</h1>
                <div>
                    <p>Test Sonucu: <strong>{result}</strong></p>
                    {message && <p className="mt-2">{message}</p>}
                </div>
                <div className="mt-4 flex gap-4">
                    <Link href="/services" className="text-blue-500 hover:underline">Hizmetlerimiz</Link>
                    <Link href="/contact" className="text-green-500 hover:underline">Daha Fazla Bilgi Al</Link>
                </div>
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultContent />
        </Suspense>
    );
}