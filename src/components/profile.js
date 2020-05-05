import React from 'react'
import iteration from '../assets/images/illustration/iteration.svg'

const Profile = props => (
  <section id="profile" className="major">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-8">
          <div className="service-wrapper grid-wrapper">
            <div className="col-6">
              <div className="service-holder">
                <section>
                  <div className="design-profile">
                    <span className="icon fa-magic" />
                    <h2>Design</h2>
                    <h5>
                      I design super cool websites & apps. Have 6+ years of experience in design solutions on mobile and web.
                    </h5>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-6">
              <div className="service-holder">
                <section>
                  <div className="design-profile">
                    <span className="icon fa-laptop" />
                    <h2>Development</h2>
                    <h5>
                      I can develop high scale mobile & web products. Can provide services in Front-end & Back-end development.
                    </h5>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-6">
              <div className="service-holder">
                <section>
                  <div className="design-profile">
                    <span className="icon fa-lightbulb-o" />
                    <h2>Consulting</h2>
                    <h5>
                      I make complex information systems easy to understand and pleasant to use. I do this by learning about my client's business.
                    </h5>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-6">
              <div className="service-holder">
                <section>
                  <div className="design-profile">
                    <span className="icon fa-calculator" />
                    <h2>Problem Solver</h2>
                    <h5>
                      I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content.
                    </h5>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 design-iteration">
          <img src={iteration} alt="iteration"/>
        </div>

      </div>
    </div>
  </section>
)

export default Profile
