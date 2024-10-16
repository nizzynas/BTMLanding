import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/images/meta/meta-logo-192.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta
            name="description"
            content="Revolutionizing crypto transactions with BTMs, providing seamless liquidity management for all your blockchain needs."
          />
          <meta name="thumbnail" content="/images/meta/meta-logo-192.png" />

          <meta property="og:url" content="https://yourwebsite.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BTM Solutions | Transforming Crypto with Seamless Liquidity" />
          <meta
            property="og:description"
            content="Experience the next generation of Blockchain Teller Machines with cutting-edge liquidity solutions and real-time transaction capabilities."
          />
          <meta property="og:image" content="/images/meta/meta-preview-fb.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="yourwebsite.com" />
          <meta property="twitter:url" content="https://yourwebsite.com/" />
          <meta name="twitter:title" content="BTM Solutions | Transforming Crypto with Seamless Liquidity" />
          <meta
            name="twitter:description"
            content="Upgrade your crypto experience with BTMs that offer instant liquidity and secure transaction management."
          />
          <meta name="twitter:image" content="/images/meta/meta-preview.jpg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=optional" rel="stylesheet" />

          {/* Google Tag Manager */}
          <Script
            id="gtm"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              ;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-NZG9GMK');
            `,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>

        <body className="dark">
          <Main />
          <NextScript />
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NZG9GMK"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
