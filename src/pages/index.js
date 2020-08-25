import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import Profile from '../components/profile';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gladino.net - The portfolio of Akash Pathak"
          meta={[
            { name: 'Gladino', content: 'Portfolio' },
            {
              name: 'google-site-verification',
              content: '1ksHcltVQ1QGj1Ur9fHvluN5erMQ9NadoGj--xFY9YQ'
            },
            { name: 'keywords', content: 'akash, react, UI/UX, open source,portfolio ' }
          ]}
        ></Helmet>

        <Banner />
        <Profile />
      </Layout>
    );
  }
}

export default HomeIndex;
