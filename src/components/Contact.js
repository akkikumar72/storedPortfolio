import React from 'react';
import { navigate } from 'gatsby-link'
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form  name="contact"
                 method="post"
                 action="/thanks/"
                 data-netlify="true"
                 data-netlify-honeypot="bot-field"
                 onSubmit={handleSubmit}>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" rows="6" />
              </label>
            </p>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
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
              <span>
                {' '}
                Dalagatan 46
                <br />
                113 24 Stockholm
                <br />
                Sweden
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Contact;
