import client1 from '../assets/client_1.jpg'
import client2 from '../assets/client_2.jpg'
import client3 from '../assets/client_3.jpg'

const Testimonials = () => {
    return (
       <div className='my-10 lg:my-20'>
        <h2 className='text-center my-4 font-bold text-3xl text-[#241468]'>Testimonials</h2>
             <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>
            <div className='text-center p-3 font-bold text-[#241468] space-y-4'>
                <p className='text-2xl'> You are in the right place to plan your celebration.</p>
                <img src={client1} className='w-[50px] h-[50px] rounded-full mx-auto' />
                <h3 className='text-xl'>Alex Kohen</h3>
            </div>
            <div className='text-center p-3 font-bold text-[#241468] space-y-4'>
                <p className='text-2xl'>My family and I are happy to have them plan my birthday</p>
                <img src={client2} className='w-[50px] h-[50px] rounded-full mx-auto' />
                <h3 className='text-xl'>Robin Eyer</h3>
            </div>
            <div className='text-center p-3 font-bold text-[#241468] space-y-4'> 
                <p className='text-2xl'>Perfect decoration and perfect buffet for my birthday party</p>
                <img src={client3} className='w-[50px] h-[50px] rounded-full mx-auto' />
                <h3 className='text-xl'>Walter Watt</h3>
            </div>
            
        </div>
       </div>
    );
};

export default Testimonials;