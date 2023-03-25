import React from 'react'
import './Portfolio.css'


const data = [
  {
    id: 1,
    title: 'Oakland Furniture Solution',
    about: 'Oakland is an e-commerce website application for furniture. Here furniture is displayed by the client and sold to consumers. The client can carry out CRUD operations of products and payment can be processed using Paystack payment.',
    technology:"Intellij, Swagger, Postgresql, Spring Boot, github, Docker and Paystack",
    github: 'https://github.com/Joseph-Ofodum/Oakland',
  },
  {
    id: 2,
    title: 'MoneyWay',
    about:'A financial application where users closely monitor and manage their financial spending. can save, transfer, buy airtime, make utility payments from their wallets and also fund your wallet through flutterwave.',
    technology:"Intellij, Postman, Postgres, Spring boot, github, docker and flutterwave.",
    github: '',
  },
  {
    id: 3,
    title: 'Naijagigs4u',
    about: 'This product is a multi-service rendering market-place webApp, where Users will be able to browse through and find desirable and needed skills/workers available to book for their services, make payment and have the services rendered to them.',
    technology:"Intellij, Swagger, Postgresql, Spring Boot, github, Docker and Paystack.",
    github: 'https://github.com/imaosazee4github/ecommerceApp_React',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Projects Work</h5>
      <h2>Portfolio</h2> */}

      <div className='container portfolio__container'>
       {
          data.map(({id,title,about,technology,github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                {/* <h2>{title}</h2>  */}
              </div>
              <h3>{title}</h3>
                <p>{about}</p>
                <p className='tech'>Technology: {technology}</p>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target="_blank">Github</a>
              </div>
              </article>
            )
       })
        }
      </div>
    </section>
  )
}

export default Portfolio