import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class ListOfOpportunities extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      companies: [
        {
          name: 'pasta',
          imgSrc: 'https://via.placeholder.com/150',
          description: 'hola', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
        {
          name: 'pasta', imgSrc: 'https://via.placeholder.com/150', description: 'Many desktop publishing packages and web page editors now useas their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', numberOfOffers: 4, publishedOn: '12 april 2019',
          applyBy: '12 may 2019'
        },
      ]
    })
  }

  // componentDidMount() {
  //   fetch('')
  //     .then(data => data.json()
  //       .then(this.setState({
  //      companies: data
  //    })))
  // }

  render() {
    const { name, description, numberOfOffers, publishedOn, applyBy } = this.state.companies;
    return (
      <section className="companiesSection">
        <h2>List of Opportunities</h2>
        {this.state.companies.map((company, index) => {
          return (
            <Link to="/Opportunity" className="company_link">
              <article className="company_details opportunity_details">
                <div className="company_logo">
                  <img src={company.imgSrc} />
                </div>
                <div className="company_content">
                  <div className="name_descrip">
                    <p><span>Company's Name: </span> <span className="bold">{company.name}</span></p>

                  </div>
                  <div className="comapny_descript"><span className="bold">Job Description : </span><span>{company.description}</span></div>
                  <div className="application_Date">
                    <div><span>Published on : </span><span className="bold">{company.publishedOn}</span></div>
                    <div><span>Apply By : </span><span className="bold">{company.applyBy}</span></div>
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </section>
    )
  }
}

export default ListOfOpportunities