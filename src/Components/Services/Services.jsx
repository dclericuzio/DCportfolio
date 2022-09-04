import React,{ useContext } from 'react';
import './Services.css'
import HeartEmoji from '../../image/heartemoji.png'
import Glasses from '../../image/glasses.png'
import Humble from '../../image/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";



const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 

    const transition = {
        duration: 1,
        type: "spring",
      };

  return (
    <div className="services" id='services'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">

            {/* first card */}
            <motion.div
                initial={{ left: "35rem" }}
                whileInView={{ left: "25rem" }}
                transition={transition}
            >
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Photoshop, Illustrator"}
                />
            </motion.div>

            {/* second card */}
            <motion.div
                initial={{ left: "-4rem", top: "17rem" }}
                 whileInView={{ left: "6rem" }}
                transition={transition}
            >
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Reactjs, Css, JavaScript, Html"}
                />
            </motion.div>

            {/* third card */}
            <motion.div
                initial={{top:"25rem",left:"36rem"}}
                whileInView={{ left: "26rem" }}
                transition={transition}
            >
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"dantedante dante dante dante dante dante dante"}
                />
            </motion.div>
            
            <div className='blur s-blur2' style={{background: "#EDD0FF"}}></div>

        </div>

    </div>
  )
}

export default Services