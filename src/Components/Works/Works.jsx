import React,{ useContext } from 'react';
import './Works.css'
import Upwork from "../../image/Upwork.png"
import Fiverr from "../../image/fiverr.png"
import Amazon from "../../image/amazon.png"
import Shopify from "../../image/Shopify.png"
import Facebook from "../../image/Facebook.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
    const transition = {
        duration: 3,
        type: "spring",
      };

  return (
    <div className="works">
         {/* left side */}
         <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
                <br/>
                ispum is simpley dummy text of printing
                <br/>
                Lorem ispum is simpley dummy text of printing of printing Lorem
            </span>

            <a href="https://wa.me/62818589669">
                <button className="button s-button">Hire me</button>
            </a>
            
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={transition}
            className="w-mainCircle"
            >
                
                    <div className="w-secCircle">
                        <img src={Upwork} alt="logo"/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="logo"/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="logo"/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="logo"/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="logo"/>
                    </div>
            </motion.div>

            {/* background circle */}
            <div className="w-backCircle bluecircle"></div>
            <div className="w-backCircle yellowcircle"></div>
        </div>
    </div>
  )
}

export default Works