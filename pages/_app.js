import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useEffect, useState} from 'react'
import Router from 'next/router'
import Loader from '../src/components/Loader'

const App = ({ Component, pageProps }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => {
        clearTimeout(timer);
      };
  };

  Router.onRouteChangeError = () => {
    setLoading(false);
  };

  return (
    loading ? <Loader />
    : <>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
};

export default App;