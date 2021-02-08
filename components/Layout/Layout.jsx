import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { googleSearchConsole, localStorageCompareKey } from '../../constants';
import { useEffect } from "react";
const Logo = require("./logo.png");

const LayoutPage = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={props.canonical} />
        <link rel="shortcut icon" href={Logo} />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta name="google-site-verification" content={googleSearchConsole} />
        <meta data-n-head="true" property="og:title" content={props.title} />
        <meta data-n-head="true" property="og:type" content="website" />
        <meta data-n-head="true" property="fb:app_id" content="937234366335504" />
        <meta data-n-head="true" property="fb:admins" content="100004244474013" />
        <meta data-n-head="true" property="og:site_name" content="Nội thất Dodo" />
        <meta data-n-head="true" property="og:url" content={props.canonical} />
        <meta data-n-head="true" property="og:image" content={props.image} />
        <meta data-n-head="true" property="og:description" content={props.description} />
        <meta data-n-head="true" name="twitter:card" content="summary" />
        <meta data-n-head="true" name="twitter:site" content="@noithatdodo" />
        <meta data-n-head="true" name="twitter:creator" content="@noithatdodo" />
        <meta data-n-head="true" name="twitter:title" content={props.title} />
        <meta data-n-head="true" name="twitter:description" content={props.description} />
        <meta data-n-head="true" name="twitter:image" content={props.image} />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaObject }} >
        </script> */}
      </Head>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};

export default LayoutPage;
