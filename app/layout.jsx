import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s - Online Otizm Danışma',
        default: 'Online Otizm Danışma - Otizm Rehberlik ve Destek'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <head>
                {/* Temel SEO Meta Etiketleri */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Online Otizm Danışma, otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği sağlar." />
                <meta name="keywords" content="otizm, otizm danışmanlık, otizm eğitimi, özel eğitim, otizm destek, aile rehberliği, bireysel eğitim, otizm spektrum" />
                <meta name="author" content="Online Otizm Danışma" />
                <meta name="google-site-verification" content="O56gcdRhHe0H3HNWbT24NSxcKbei7w1I03WAY_3l1PY" />

                {/* Sosyal Medya Open Graph Etiketleri */}
                <meta property="og:title" content="Online Otizm Danışma - Otizm Rehberlik ve Destek" />
                <meta property="og:description" content="Otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği sağlayan platform." />
                <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Etiketleri */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Online Otizm Danışma - Otizm Rehberlik ve Destek" />
                <meta name="twitter:description" content="Otizm spektrumundaki çocuklar için bireyselleştirilmiş eğitim çözümleri ve aile rehberliği sağlayan platform." />
                <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Ekstra SEO ve Performans */}
                <link rel="canonical" href="https://yourwebsite.com" />
                <meta name="robots" content="index, follow" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}