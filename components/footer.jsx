import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo ve Slogan */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Online Otizm Danışma</h1>
            <p className="text-sm mt-2">Online destek ve rehberlik için buradayız.</p>
          </div>
      
          {/* Menü Linkleri */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <ul className="flex justify-center md:justify-center space-x-4">
              <li>
                <a href="/hakkimizda" className="hover:text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/hizmetler" className="hover:text-white">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
      
          {/* İletişim Bilgileri */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm">Telefon: <a href="tel:+905411808198" className="hover:text-white">+905411808198</a></p>
            <p className="text-sm">E-posta: <a href="mailto:onlineotizmdanism@gmail.com" className="hover:text-white">onlineotizmdanism@gmail.com</a></p>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Online Otizm Danışma</p>
          </div>
        </div>
      </footer>
    );
};
