"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

export const dynamic = "force-dynamic"; // Sayfanın dinamik olmasını sağlar

function ResultContent() {
    const searchParams = useSearchParams();
    const result = searchParams.get("result");
    const message = searchParams.get("message");

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Sonuçlar</h1>
                <p className="text-lg text-gray-700">
                    Test Sonucu: <strong>{result || "Bilinmiyor"}</strong>
                </p>
                {message && (
                    <p className="mt-4 text-gray-600">
                        {message ? decodeURIComponent(message) : ""}
                    </p>
                )}
                <div className="mt-6 text-center flex justify-center gap-4">
                    <Link href="/services" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Hizmetlerimiz
                    </Link>
                    <Link href="/contact" className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                        Daha Fazla Bilgi Al
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div>Sonuçlar yükleniyor...</div>}>
            <ResultContent />
        </Suspense>
    );
}