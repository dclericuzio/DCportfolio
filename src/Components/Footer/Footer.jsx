import React from 'react'
import './Footer.css'
import Wave from '../../image/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linked from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>Danteclericuzio1999@gmail.com</span>
            <div className="f-icons">

              <a href="https://www.instagram.com/danteclericuzioo/">
                <Insta color='white' size='3rem'/>
              </a>

              <a href="https://www.linkedin.com/in/dante-clericuzio-1b9345241/">
                <Linked color='white' size='3rem'/>
              </a>

              <a href="https://github.com/dclericuzio?tab=repositories">
                <Github color='white' size='3rem'/>
              </a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer