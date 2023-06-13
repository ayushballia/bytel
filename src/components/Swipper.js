
// import amazon from "../images/amazon-prime.png";
import  epic  from "../images/epic-on.png";
import  altBalaji  from "../images/alt-balaji.jpg";
// import  hotstar  from "../images/hotstar.png";
// import hungama from "../images/hungama-play.png";
import  playbox  from "../images/playbox-tv.jpg";
import  shemaroo from "../images/shemaroo.png";
import  sonyliv  from "../images/sonyliv.png";
import  zee5  from "../images/zee5.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Image } from "react-bootstrap";


new Splide( '.splide' ).mount( { AutoScroll } );

const Swipper = () => {
    return (
        <div id="swipper">
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <Image src={shemaroo} fluid/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={epic} fluid/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={playbox} fluid/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={altBalaji} fluid/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={sonyliv} fluid/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={zee5} fluid/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Swipper;