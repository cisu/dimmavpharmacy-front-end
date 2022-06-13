import '../styles/globals.css';
import Layout from '../components/layout';

import "../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
