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
                <Insta color='white' size='3rem'/>
                <Linked color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer