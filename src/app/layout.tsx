'use client'
import { Nunito } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../components/redux/store';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className='relative min-h-screen'>
        <Provider store={store}>
          {children}
        </Provider>
        <ToastContainer position="top-center" autoClose={2000} />
      </body>
    </html>
  );
}