import { type AppProps } from 'next/app';
import '~/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.variable} relative font-sans`}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
