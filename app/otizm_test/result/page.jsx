"use client";

import { useSearchParams } from "next/navigation";
import Link from 'next/link';

export default function TestResult() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Bilinmiyor";
  const risk = searchParams.get("risk") || "Bilinmiyor";
  const message = searchParams.get("message") || "Bilinmiyor";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600">Test Sonucunuz</h1>
        <p className="mt-4 font-bold text-lg">Çocuk Adı: {decodeURIComponent(name)}</p>
        <p className="mt-2 font-bold text-lg">{decodeURIComponent(risk)}</p>
        <p className="mt-4 text-gray-600">{decodeURIComponent(message)}</p>
        <Link href="/services" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Hizmetlerimiz
        </Link>
      </div>
    </div>
  );
}