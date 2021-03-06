import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const meta = ({ latestPodcast }) => {
  const title = `Bitfaced Gaming and Pop Culture Podcast ${latestPodcast.title}`;

  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/pippa/image/fetch/h_32,w_32,f_auto/https://assets.pippa.io/shows/5aa6c68ed19e4ab7501ffd5d/show-cover.jpg" data-react-helmet="true" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.bitfaced.com" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://bitfaced-assets.s3.us-east-2.amazonaws.com/FBpre.jpg" />
        <meta property="og:description" content={latestPodcast.content} />
        <meta name="msvalidate.01" content="397DC1B89F47E94AE576233E3E3D298B" />
        <meta name="google-site-verification" content="Skr1DY0RuQrohFqXu5sk0WcMzZp-OVC7inox9ihM0ng" />
        <meta name="Description" content={latestPodcast.content} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="author" content="Eric G. Hollis & Tyler R. Glaze" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=6, user-scalable=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>
        {
        `body, html, #__next { 
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 0px;
          margin: 0px;
          overscroll-behavior: none;
        }

        body {
          background: url(https://bitfaced-assets.s3.us-east-2.amazonaws.com/siBackground.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}
      </style>
    </div>
  );
};

meta.propTypes = {
  latestPodcast: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

meta.defaultProps = {
  latestPodcast: {
    title: '',
    content: '',
  },
};

export default meta;
