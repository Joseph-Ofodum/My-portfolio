import React from 'react'
import './About.css'
import Me from '../../assets/joseph2.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <p>
      </p>
      <h2>Education/Certification</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={Me} alt="About images" />
            </div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Nnamdi Azikiwe University, Awka Anambra State.</h5>
              <small>Sept. 2010 - July 2012</small>
              <hr />
              <small> Diploma in Law</small>

            </article>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Nnamdi Azikiwe University, Awka Anambra State.</h5>
              <small>Sept. 2011 - July 2015</small>
              <hr />
              <small>B.A French.</small>

            </article>

            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Decagon Digital Learning.</h5>
              <small className='sml'>October 2021 - June 2022</small>
              <hr />
              <small>Bootcamp - Java Stack.</small>


            </article>
          </div>
          <br />

          <p>
          Experienced Software Developer adept in bringing forth expertise in design, installation, 
          testing and maintenance of software systems. Proficient with the latest cutting-edge development tools and procedures. 
          Able to effectively self-manage during independent projects, 
          as well as collaborate in an agile team setting.
          </p>
          <br />

          {/* <a href='#contacts' className='btn btn-primary'>Contacts</a>
          <a href="#portfolio" className='btn btn-primary'>Portfolio</a> */}
          </div>
      </div>

    </section>
  )
}

export default About