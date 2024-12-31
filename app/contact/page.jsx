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
      </div>
    </>
  );
}