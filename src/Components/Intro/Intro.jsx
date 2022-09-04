import React,{ useContext } from 'react';
import './Intro.css';
import Github from '../../image/github.png';
import LinkedIn from '../../image/linkedin.png';
import Instagram from '../../image/instagram.png';
import Vector1 from '../../image/vector1.png';
import Vector2 from '../../image/vector2.png';
import dante from '../../image/dante.png';
import thumbup from '../../image/thumbup.png';
import crown from '../../image/crown.png';
import glassesemoji from '../../image/glassesemoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'


const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white' : ''}}>Hi! I am</span>
                <span>Dante Clericuzio</span>
                <span>Frontend Developer with high level of experience 
                in web designing and development, providing the Best 
                Quality work</span>
            </div>

            <button className='button i-button'>Hire me</button>

            <div className="i-icons">
                <a href="#">
                    <img src={Github} alt='Github logo'/>
                </a>
                <a href="#">
                    <img src={LinkedIn} alt='LinkedIn logo'/>
                </a>
                <a href="#">
                    <img src={Instagram} alt='Instagram logo'/>
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt='vector 1'/>
            <img src={Vector2} alt='vector 2'/>
            <img src={dante} alt='dante image'/>

            <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glassesemoji} alt='glasses emoji'/>

            <motion.div 
                initial={{top:'-4%', left:'78%'}}
                whileInView={{ left: "68%" }}
                transition={transition}
                className="floating-div"
            >
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div 
                initial={{ left: "144px", top: "288px" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className="floating-div"
            >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>

            {/* blur div */}
            <div className='blur' style={{background: "rgb(238, 210,255"}}></div>
            <div className='blur' style={{background: "#C1F5FF",top:"172px", width:"335px", height:"175",left:"-145px"}}></div>
        </div>
    </div>
  )
}

export default Intro