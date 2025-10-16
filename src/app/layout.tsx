'use client'
import { Nunito } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../utils/redux/store';
import { useEffect } from 'react';
import { checkVPN } from '../utils/apiServices';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    checkVPN()
  }, [])

  return (
    <html lang="en" className={nunito.className}>
      <body className='m-0 px-2 lg:px-3 lg:w-5xl xl:w-6xl mx-auto'>
        <Provider store={store}>
          {children}
          <ToastContainer position="bottom-center" autoClose={2000} />
        </Provider>
      </body>
    </html>
  );
}