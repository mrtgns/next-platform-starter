import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header/>
            {children}
          </body>
        </html>
      );
}
