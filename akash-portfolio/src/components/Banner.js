import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-8">
          <header className="major">
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>
              A responsive site template designed by HTML5 UP
              <br />
              and released under the Creative Commons.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="inner-illust" />
        </div>
      </div>
    </div>
  </section>
)

export default Banner
