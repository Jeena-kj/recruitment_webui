import localFont from "next/font/local";
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/globals.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metaData = {
 title: "Software Recruitment Co.",
 description: "Find Your Dream Job With Us."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
