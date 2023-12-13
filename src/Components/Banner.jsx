import  slider1  from '../assets/caaakeee.jpg'
import  slider2  from '../assets/party.jpg'
import  slider3  from '../assets/child.jpg'
import  slider4  from '../assets/flowers (1).jpg'
import { motion } from 'framer-motion';


const Banner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };
    return (
       <motion.div
       variants={containerVariants}
        initial="hidden"
        animate="visible"
       >
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
       </motion.div>
    );
};

export default Banner;