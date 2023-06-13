import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import amazon from "../images/amazon-prime.png";
import  epic  from "../images/epic-on.png";
import  altBalaji  from "../images/alt-balaji.jpg";
import  hotstar  from "../images/hotstar.png";
import hungama from "../images/hungama-play.png";
import  playbox  from "../images/playbox-tv.jpg";
import  shemaroo from "../images/shemaroo.png";
import  sonyliv  from "../images/sonyliv.png";
import  zee5  from "../images/zee5.png";

import "swiper/css";
import { Image } from "react-bootstrap";

const SwiperSlider = () => {
    return (
        <Swiper slidesPerView={5} spaceBetween={10}  autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}  modules={[Autoplay, Pagination,]} className="mySwiper">
            <SwiperSlide><Image src={epic} fluid/></SwiperSlide>
            <SwiperSlide><Image src={altBalaji} fluid/></SwiperSlide>
            <SwiperSlide><Image src={amazon} fluid/></SwiperSlide>
            <SwiperSlide><Image src={hotstar} fluid/></SwiperSlide>
            <SwiperSlide><Image src={hungama} fluid/></SwiperSlide>
            <SwiperSlide><Image src={playbox} fluid/></SwiperSlide>
            <SwiperSlide><Image src={shemaroo} fluid/></SwiperSlide>
            <SwiperSlide><Image src={sonyliv} fluid/></SwiperSlide>
            <SwiperSlide><Image src={zee5} fluid/></SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider;