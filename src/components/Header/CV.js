import React from 'react'
 import cv from '../../assets/JOSEPH OFODUM CV (3).pdf'


const CV = () => {
  return (
    <div className='cta'>
    <a href={cv} download className='btn'>Download CV</a>
    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </div>
  )
}

export default CV