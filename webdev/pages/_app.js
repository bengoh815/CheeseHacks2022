import styles from '../styles/global.css'
import Layout from '../components/Layout'
import React from 'react';


function MyApp({ Component, pageProps }) {
    return ( 
    <Layout>
    <Component {...pageProps} />
    </Layout>
    )
  }
  
  export default MyApp
  