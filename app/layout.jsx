import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Open_Sans } from 'next/font/google'; // ✅ Next.js optimize edilmiş Google Fonts

// ✅ Open Sans fontunu Next.js ile entegre et
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap',
});

export const metadata = {
    title: {
        template: '%s - Online Otizm Danışma',
        default: 'Online Otizm Danışma'
    },
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png']
    }
};

export default function RootLayout({ children }) {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Online Otizm Danışma',
        description: 'Otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği.',
        url: 'https://onlineotizmdanisma.com',
        logo: 'https://onlineotizmdanisma.com/Logo.png',
        serviceType: 'Online Danışmanlık',
        areaServed: 'Türkiye',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+905411808198',
            contactType: 'Müşteri Hizmetleri'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Otizm Danışmanlık ve Test Hizmetleri',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Otizm Testi',
                        description:
                            'Otizm spektrum bozukluğu belirtilerini tespit etmek için bilimsel M-CHAT-R/F otizm testi uygulayın.',
                        url: 'https://onlineotizmdanisma.com/otizm-testi'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Otizm Danışmanlık',
                        description: 'Otizmli çocuklar için bireyselleştirilmiş danışmanlık ve aile rehberliği.',
                        url: 'https://onlineotizmdanisma.com/otizm-danismanlik'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Özel Eğitim Programları',
                        description:
                            'Otizmli çocuklar için özel eğitim materyalleri ve bireyselleştirilmiş eğitim çözümleri.',
                        url: 'https://onlineotizmdanisma.com/ozel-egitim'
                    }
                }
            ]
        }
    };

    return (
        <html lang="tr" dir="ltr" className={openSans.className}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <meta
                    name="description"
                    content="Bilimsel M-CHAT-R/F otizm testi ile çocuğunuzun otizm riski olup olmadığını öğrenin. Ücretsiz online otizm testi ile erken teşhis imkanı."
                />
                <meta
                    name="keywords"
                    content="otizm testi, otizm test, otizm belirtileri, otizm testi online, çocuk otizm testi, otizm testi nasıl yapılır, otizm danışmanlık, otizm spektrum bozukluğu"
                />
                <meta name="author" content="Online Otizm Danışma" />
                <meta name="publisher" content="Online Otizm Danışma" />
                <meta name="google-site-verification" content="O56gcdRhHe0H3HNWbT24NSxcKbei7w1I03WAY_3l1PY" />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:title" content="Otizm Testi - Çocuğunuzun Otizm Riskini Öğrenin" />
                <meta
                    property="og:description"
                    content="Bilimsel M-CHAT-R/F otizm testi ile çocuğunuzun otizm spektrum bozukluğu riski olup olmadığını hemen öğrenin."
                />
                <meta property="og:image" content="https://onlineotizmdanisma.com/otizm-test-og-image.jpg" />
                <meta property="og:url" content="https://onlineotizmdanisma.com/otizm-testi" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="tr_TR" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://onlineotizmdanisma.com/otizm-testi" />
                <link rel="icon" href="https://onlineotizmdanisma.com/favicon.ico" />
                <link rel="apple-touch-icon" href="https://onlineotizmdanisma.com/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Schema.org Yapılandırılmış Veriler */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}