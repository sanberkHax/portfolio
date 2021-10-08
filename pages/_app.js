import '../stylesheets/main.scss';
import AOS from 'aos';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
