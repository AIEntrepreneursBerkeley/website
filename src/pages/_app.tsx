import { type AppProps } from 'next/app';
import '~/styles/globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const signifier = localFont({
  src: [
    {
      path: '../../public/fonts/signifier-web-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/signifier-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-signifier',
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} ${signifier.variable} relative font-sans`}>
    <Component {...pageProps} />
    <Analytics />
  </div>
);

export default MyApp;
