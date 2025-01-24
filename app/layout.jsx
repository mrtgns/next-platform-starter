import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s - Online Otizm Danışma',
        default: 'Online Otizm Danışma - Otizm Rehberlik ve Destek'
    },
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png']
    }
};

export default function RootLayout({ children }) {
    // JSON-LD Schema Markup
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Online Otizm Danışma',
        description: 'Otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği.',
        url: 'https://onlineotizmdanisma.com',
        logo: 'https://onlineotizmdanisma.com/public/Logo.png', // Logonuzun tam URL'sini ekleyin
        serviceType: 'Online Danışmanlık',
        areaServed: 'Türkiye',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+905411808198', // Gerçek telefon numaranızı ekleyin
            contactType: 'Müşteri Hizmetleri'
        }
    };

    return (
        <html lang="tr">
            <head>
                {/* Temel SEO Meta Etiketleri */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Online Otizm Danışma: Otizm belirtileri, erken tanı, evde eğitim ve rehabilitasyon süreçlerinde uzman rehberlik. Aileler için özel çözümler!"
                />
                <meta
                    name="keywords"
                    content="otizm belirtileri, erken tanı, otizm eğitimi, özel eğitim merkezi, otizmli çocuklarla iletişim, evde otizm desteği, otizm danışmanlık"
                />
                <meta name="author" content="Online Otizm Danışma" />
                <meta name="publisher" content="Online Otizm Danışma" />
                <meta name="google-site-verification" content="O56gcdRhHe0H3HNWbT24NSxcKbei7w1I03WAY_3l1PY" />

                {/* Sosyal Medya Open Graph Etiketleri */}
                <meta property="og:title" content="Online Otizm Danışma - Otizm Rehberlik ve Destek" />
                <meta
                    property="og:description"
                    content="Otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği."
                />
                <meta property="og:image" content="https://onlineotizmdanisma.com/og-image.jpg" />
                <meta property="og:url" content="https://onlineotizmdanisma.com" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="tr_TR" />

                {/* Favicons ve Performans */}
                <link rel="canonical" href="https://onlineotizmdanisma.com" />
                <link rel="icon" href="https://onlineotizmdanisma.com/favicon.ico" />
                <link rel="apple-touch-icon" href="https://onlineotizmdanisma.com/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                {/* Schema Markup */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
