import React, { useEffect, useState } from 'react';
import '../assets/scss/main.scss';
import Contact from './Contact';
import Footer from './Footer';

const Layout = ({ showContactFom = true, children }) => {
  const [loading, setLoading] = useState('is-loading');
  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(''), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className={`body ${loading}`}>
      <div id="wrapper">
        {children}
        {showContactFom && <Contact />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
