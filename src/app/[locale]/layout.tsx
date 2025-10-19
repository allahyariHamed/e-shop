import { Nunito } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import ReduxProvider from '@/src/utils/redux/reduxProvider';
import { NextIntlClientProvider } from 'next-intl';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <html lang={locale} className={nunito.className}>
      <body className='m-0 px-2 lg:px-3 lg:w-5xl xl:w-6xl mx-auto'>
        <NextIntlClientProvider locale={locale}>
          <ReduxProvider>
            {children}
            <ToastContainer position="bottom-center" autoClose={2000} />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}