import Layout from '../components/layout'
import '../styles/style.sass'
import '../styles/theme.sass'
import Head from 'next/head'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {

  return (
    <Layout >
      <Head>
        <title>Malak Nakaa </title>
        <meta charset="UTF-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="twitter:image:src" content="/icons/twitter.png" />
        <meta property="fb:image" content="/icons/facebook.png" />
        <meta property="og:image" content="/images/me.jpg" />
        <meta property="og:title" content="Malak Nakaa" />
        <meta property="fb:title" content="Malak Nakaa" />
        <meta property="twitter:title" content="Malak Nakaa" />
        <meta name="Description" content="Site personnel de Malak Nakaa" />
        <meta name="Keywords" content="Site personnel de Malak Nakaa,Malak Nakaa's portfolio" />
        <meta name="google-site-verification" content="nmG596id8_ITnyFhT6XRJY0gE-nKdWY2WRLk3-ulGwA" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="#" />
        <link rel="shortcut icon" href="/images/me.jpg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp