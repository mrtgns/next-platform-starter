import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#e7f6fc] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-[80px] h-[80px]">
            <Image 
              src="/Logo.png" 
              alt="Online Otizm Danışma Logo" 
              layout="fill"
              objectFit="contain" 
              className="cursor-pointer"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-500 font-medium cursor-pointer">
              Hakkımızda
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}