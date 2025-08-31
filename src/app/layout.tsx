'use client'
import { Nunito } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../utils/redux/store';
import Navbar from '../components/Navbar';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className='relative h-screen m-0 p-1 flex-col justify-between flex gap-2'>
        <Provider store={store}>
          <Navbar />
          {children}
          <ToastContainer position="bottom-center" autoClose={2000} />
        </Provider>
      </body>
    </html>
  );
}