// components/Footer.js

import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Logo ve Slogan */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-white">Online Otizm Danışma</h1>
                    <p className="text-sm mt-2">Online destek, rehberlik ve yönlendirme.</p>
                </div>

                {/* Logo Ortalamak için Flex ve Margin Düzenlemeleri */}
                <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                    <div className="relative w-[80px] h-[80px]">
                        <Image
                            src="/Logo.png"
                            alt="Online Otizm Danışma Logo"
                            layout="fill"
                            objectFit="contain"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p className="text-sm">
                        Telefon:{' '}
                        <a href="tel:+905411808198" className="hover:text-white">
                            +905411808198
                        </a>
                    </p>
                    <p className="text-sm">
                        E-posta:{' '}
                        <a href="mailto:onlineotizmdanism@gmail.com" className="hover:text-white">
                            onlineotizmdanism@gmail.com
                        </a>
                    </p>
                    <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Online Otizm Danışma</p>
                </div>
            </div>
        </footer>
    );
}
