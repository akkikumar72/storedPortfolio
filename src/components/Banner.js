import React from 'react'
import hackerSvg from '../assets/images/illustration/cv.svg'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-8">
          <header className="major">
            <h1>Hi, my name is Akash</h1>
          </header>
          <div className="content">
            <p>
              Stockholm based FrontEnd Developer & UI/UX Developer.
            </p>
            <h5>
              I'm a developer building things that have an effect beyond what you see on a screen. I specialize in Interface design, creating user interactions, front-end development & responsive design for the web and mobile apps.
            </h5>
            <ul className="actions">
              <li>
                <a href="https://docs.google.com/document/d/1JEfkwUWnMBsGEfQTilUHO4vwtijbQrOilLtBiEN-6_Q/edit?usp=sharing" className="button special icon fa-download" target='_blank'>
                  Resume
                </a>
              </li>
              <li>
                <a href="#profile" className="button special scrolly">
                  Discover
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="inner-illust">
            <img src={hackerSvg} alt="profileImage" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Banner
