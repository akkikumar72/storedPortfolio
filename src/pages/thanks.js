import React from 'react';
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default () => (
  <Layout showContactFom={false}>
         <div className="thanksPage">
           <div className="inner">
             <div className="contact-method">
               <Link to="/"><span className="icon alt fa-arrow-left"></span></Link> <h4>Back to home</h4>
             </div>
             <header className="major"><h1>Thanks for contacting me <span role="img" aria-label='thanks'>🙏</span></h1></header>
             <div className="content">
              <p>I will contact you soon!!!</p>
               </div>
           </div>
         </div>
  </Layout>
);
