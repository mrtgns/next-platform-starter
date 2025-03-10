'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import servicesData from '../../data/services.json';

export default function ServiceDetail() {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop();

    const [service, setService] = useState(null);

    useEffect(() => {
        const key = slug?.toLowerCase();
        if (key && servicesData[key]) {
            setService(servicesData[key]);
        }
    }, [slug]);

    if (!service) {
        return <div className="text-center text-red-500">Hizmet bulunamadı.</div>;
    }

    return (
        <div className="bg-gray-600 text-gray-300 min-h-screen py-12">
            <div className="container mx-auto px-6">
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h1 className="text-center text-4xl font-semibold text-gray-100 mb-4">{service.title}</h1>
                
                {service.description.map((section, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-center text-2xl font-bold text-gray-100 mb-2">
                            {section.heading}
                        </h2>
                        {section.content.map((text, idx) => (
                            <p key={idx} className="text-left text-lg text-gray-200 mb-2">
                                {text}
                            </p>
                        ))}
                    </div>
                ))}

                <div className="mt-6 text-center flex justify-center gap-4">
                    <Link href="/services" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Hizmetler Sayfasına Dön
                    </Link>
                    <Link href="/contact" className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                        Daha Fazla Bilgi Al
                    </Link>
                </div>
            </div>
        </div>
    );
}