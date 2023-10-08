import img1 from '../assets/gallery_1.jpg'
import img2 from '../assets/gallery_2.jpg'
import img3 from '../assets/gallery_3.jpg'
import img4 from '../assets/gallery_4.jpg'
import img5 from '../assets/gallery_5.jpg'
import img6 from '../assets/gallery_6.jpg'
import img7 from '../assets/gallery_7.jpg'
import img8 from '../assets/gallery_8.jpg'
import img9 from '../assets/gallery_9.jpg'
import img10 from '../assets/gallery_10.jpg'
import img11 from '../assets/gallery_11.jpg'
import img12 from '../assets/gallery_12.jpg'

const Gallery = () => {
    return (
        <div className='my-10'>
            <h2 className='text-center lg:text-4xl font-bold text-[#241468]'>Our Successful Events Gallery</h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <img src={img1} className='w-full lg:h-[300px]' />
                <img src={img2} className='w-full lg:h-[300px]' />
                <img src={img3} className='w-full lg:h-[300px]' />
                <img src={img4} className='w-full lg:h-[300px]' />
                <img src={img5} className='w-full lg:h-[300px]' />
                <img src={img6} className='w-full lg:h-[300px]' />
                <img src={img7} className='w-full lg:h-[300px]' />
                <img src={img8} className='w-full lg:h-[300px]' />
                <img src={img9} className='w-full lg:h-[300px]' />
                <img src={img10} className='w-full lg:h-[300px]' />
                <img src={img11} className='w-full lg:h-[300px]' />
                <img src={img12} className='w-full lg:h-[300px]' />
            </div>
        </div>
    );
};

export default Gallery;