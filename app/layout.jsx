import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: 'odd',
        default: 'Online Otizm Danışma'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
          <meta name="google-site-verification" content="O56gcdRhHe0H3HNWbT24NSxcKbei7w1I03WAY_3l1PY" />
          <body
           
          >
            <Header/>
            {children}
            <Footer/>
          </body>
        </html>
      );
}
