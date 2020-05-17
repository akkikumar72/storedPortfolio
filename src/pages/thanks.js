import React from 'react';
import Layout from '../components/layout'
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import Profile from '../components/profile';

export default () => (
  <>
    <Helmet
      title="Gladino.net - The portfolio of Akash Pathak"
      meta={[
        { name: 'Gladino', content: 'Portfolio' },
        { name: 'keywords', content: 'akash, react, UI/UX, open source,portfolio ' },
      ]}
    >
    </Helmet>
    <div id="main">
    <h1>Thank you!</h1>
    <p>You form is submitted successfully!!!</p>
    </div>
  </>
);
