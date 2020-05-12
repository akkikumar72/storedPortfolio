import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                {/*<form  */}
                {/*       className="validate-form"*/}
                {/*       method="POST"*/}
                {/*       name="contact-form"*/}
                {/*       data-netlify-recaptcha="true"*/}
                {/*       data-netlify="true">*/}
                {/*    <div className="field half first">*/}
                {/*        <label htmlFor="name">Name</label>*/}
                {/*        <input type="text" name="name" id="name" required/>*/}
                {/*    </div>*/}
                {/*    <div className="field half">*/}
                {/*        <label htmlFor="email">Email</label>*/}
                {/*        <input type="text" name="email" id="email" required/>*/}
                {/*    </div>*/}
                {/*    <div className="field">*/}
                {/*        <label htmlFor="message">Message</label>*/}
                {/*        <textarea name="message" id="message" rows="6"/>*/}
                {/*    </div>*/}
                {/*    <div data-netlify-recaptcha="true"/>*/}
                {/*    <ul className="actions">*/}
                {/*        <li><input type="submit" value="Send Message" className="special" /></li>*/}
                {/*        <li><input type="reset" value="Clear" /></li>*/}
                {/*    </ul>*/}
                {/*</form>*/}

                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message" rows="6"/></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">akkikumar72@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+46 70 8879303</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span> Dalagatan 46<br />
                         113 24 Stockholm<br />
                        Sweden</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
