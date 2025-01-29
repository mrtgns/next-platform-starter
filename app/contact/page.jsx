"use client";

import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  const contactDetails = [
    {
      title: "Telefon",
      description: "+90 541 180 81 98",
      icon: "📞",
      link: "tel:+905411808198",
    },
    {
      title: "E-posta",
      description: "onlineotizmdanisma@gmail.com",
      icon: "📧",
      link: "mailto:onlineotizmdanisma@gmail.com",
    },
    {
      title: "Instagram",
      description: "@onlineotizmdanisma",
      icon: "📸",
      link: "https://www.instagram.com/onlineotizmdanisma/",
    },
  ];

  return (
    <>
      <Head>
        <title>İletişim - Engelsiz Beceriler</title>
        <meta
          name="description"
          content="Engelsiz Beceriler ile iletişime geçmek için telefon, e-posta ve sosyal medya bilgilerini burada bulabilirsiniz."
        />
        <meta
          name="keywords"
          content="Engelsiz Beceriler, iletişim, otizm danışmanlık, telefon, e-posta, Instagram"
        />
        <meta name="author" content="Engelsiz Beceriler" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="İletişim - Engelsiz Beceriler" />
        <meta
          property="og:description"
          content="Engelsiz Beceriler ile iletişime geçmek için telefon, e-posta ve sosyal medya bilgilerini burada bulabilirsiniz."
        />
        <meta property="og:url" content="https://siteniz.com/contact" />
        <meta
          property="og:image"
          content="https://siteniz.com/path-to-your-logo.png"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-gray-600 text-gray-300 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-semibold text-gray-100 mb-10">
            İletişim
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                onClick={() => window.open(detail.link, "_blank")}
                className="bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:bg-gray-600 transition duration-200 cursor-pointer"
              >
                <div className="text-5xl mb-4">{detail.icon}</div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">
                  {detail.title}
                </h2>
                <p className="text-gray-400">{detail.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200">
                Ana Sayfaya Dön
              </button>
            </Link>
          </div>
        </div>
         {/* WhatsApp Butonu */}
                <a
                    href="https://wa.me/905411808198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all flex items-center space-x-2"
                >
                    <span className="text-white text-lg font-medium">Uzmana Danış</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.13.56 4.15 1.63 5.94L0 24l6.31-1.63A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.95 17.4l-.88-.43c-.45-.22-.78-.2-1.11.14l-.33.33c-.22.22-.56.44-.88.33a9.67 9.67 0 01-4.63-4.63c-.11-.33 0-.66.33-.88l.33-.33c.34-.34.36-.67.14-1.11l-.44-.89c-.22-.45-.56-.67-.9-.56-.56.11-1.1.45-1.56.9-.56.56-1.22 1.45-1.22 2.33 0 .22 0 .45.11.67a12.49 12.49 0 006.66 6.66c.22.11.45.11.67.11.89 0 1.78-.67 2.33-1.22.45-.45.79-.89.9-1.56.11-.33-.11-.67-.56-.89z" />
                    </svg>
                </a>
      </div>
    </>
  );
}