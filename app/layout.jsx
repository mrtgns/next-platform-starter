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
          <body
           
          >
            <Header/>
            {children}
            <Footer/>
          </body>
        </html>
      );
}
