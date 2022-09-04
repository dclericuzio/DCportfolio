import React,{ useContext } from 'react';
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../image/profile1.jpg";
import profilePic2 from "../../image/profile2.jpg";
import profilePic3 from "../../image/profile3.jpg";
import profilePic4 from "../../image/profile4.jpg";
import { themeContext } from "../../Context";
const Testimonials = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 


    const clients = [
        {
          img: profilePic1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];
    

  return (
    <div className="t-wrapper" id='testimonial'>
        {/* heading */}
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span> 
            <span>from me...</span> 
            <div className='blur t-blur1' style={{background: "#EDD0FF"}}></div>
            <div className='blur t-blur2' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* slider */}
        <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{"--swiper-pagination-bullet-inactive-color": darkMode ? 'white' : ''}}
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt=""/>
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials