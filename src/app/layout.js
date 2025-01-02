import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';

import { Inter, Space_Grotesk } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Indian e-Visa Application - Fast, Secure & Official Service',
  description:
    'Apply for your Indian e-Visa through our secure platform. Quick processing for tourist, business, medical & conference visas. Expert assistance available 24/7.',
  keywords:
    'Indian e-visa application, tourist visa India, business visa India, medical visa India, conference visa India, visa processing service',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indian e-Visa Application - Fast, Secure & Official Service',
    description:
      'Apply for your Indian e-Visa through our secure platform. Quick processing for tourist, business, medical & conference visas. Expert assistance available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Indian Visa Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian e-Visa Application - Fast, Secure & Official Service',
    description:
      'Apply for your Indian e-Visa through our secure platform. Quick processing for tourist, business, medical & conference visas. Expert assistance available 24/7.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body
        className={`${inter.className} flex flex-col min-h-screen antialiased bg-surface selection:bg-primary/20 selection:text-primary`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              toastClassName="!bg-gradient-to-r !from-primary !to-tertiary !text-white !rounded-xl !shadow-lg"
            />
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
