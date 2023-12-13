import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_zkn79qd', 'template_oqv8tdh', form.current, 'ZgETNhSwshb0uW9yr')
            .then((result) => {
                console.log(result.text);
                toast.success('message is delivered');
               
            }, (error) => {
                console.log(error.text);
            });


    };


    return (
        <div className="w-3/4 p-4">
            <h2 className="text-3xl font-bold text-[#241468] my-10">Contact with us</h2>

            <form className='bg-base-200 p-4 rounded-lg' ref={form} onSubmit={sendEmail}>
                <label>Name</label> <br />
                <input type="text" className='border p-4 w-1/2' name="user_name" /> <br />
                <label>Email</label> <br />
                <input type="email" className='border p-4 w-1/2' name="user_email" /> <br />
                <label>Message</label> <br />
                <textarea name="message" cols='10' rows='15' className='border p-4 w-1/2' /> <br />
                <input type="submit" className='btn btn-primary' value="Send" />
            </form>
        </div>
    );
};

export default Contact;