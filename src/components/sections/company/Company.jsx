import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css'
import Opportunities from '../Opportunities';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      companyInfos: {
        name: 'Capgemini',
        Industry: 'Tech',
        Leadership: 'Tell me',
        Size: 'Tell me',
        about: 'a long text here.....',
        video: 'https://www.youtube.com/watch?v=MGuehquIp8g',
        opportunities: [
          {
            Title: 'Junior Dev', skills: ['nodejs', 'java', 'bla bla'],
            role: 'bla bla bla'
          },
          {
            Title: 'senior Dev', skills: ['nodejs', 'java', 'bla bla'],
            role: 'bla bla bla'
          },
          {
            Title: 'Analyst', skills: ['nodejs', 'java', 'bla bla'],
            role: 'bla bla bla'
          },
          {
            Title: 'Analyst', skills: ['nodejs', 'java', 'bla bla'],
            role: 'bla bla bla'
          },
          {
            Title: 'Analyst', skills: ['nodejs', 'java', 'bla bla'],
            role: 'bla bla bla'
          }
        ]
      }
    })
  }


  render() {
    const { name,
      Industry,
      Leadership,
      Size,
      about,
      video,
      opportunities } = this.state.companyInfos
    return (
      <section className="company">
        <section className="optional">
          <h2>Optional personalised Banner</h2>
        </section>
        <section className="mainContent">
          <section className="comp_profile">
            <div className="imag"></div>
            <div className="fieldInfo"><span>Company Name : </span><span className="bold">{name}</span></div>
            <div className="fieldInfo"><span>Industry : </span><span className="bold">{Industry}</span></div>
            <div className="fieldInfo"><span>Leadership : </span><span className="bold">{Leadership}</span></div>
            <div className="fieldInfo"><span>Company Size : </span><span className="bold">{Size}</span></div>
          </section>
          <section className="comp_general">
            <section className="aboutUs">
              <h2>About Us</h2>
              <p>{about}</p>
            </section>
            <section className="corp_vid">
              <h2>Corporate Video</h2>
              <div className="theVideo">
                <video id="samp" max-width="640" max-height="480" controls>
                  <source src={video} type="video/mp4" />

                </video>
              </div>
            </section>
            <section className="opp_section">
              <h2>Opportunities</h2>
              <section className="opportunities">
                {opportunities.map((Opportunity, index) =>
                  <Link to={"/Opportunity"} className="link_Opportunity">
                    <div key={index} className="SingleOpp">
                      <h3>{Opportunity.Title}</h3>
                      <p>{Opportunity.skills}</p>
                      <p>{Opportunity.role}</p>
                    </div>
                  </Link>
                )}
              </section>
            </section>
          </section>
        </section>
      </section>
    )
  }

}

export default Company
