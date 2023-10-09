

const Contact = () => {

    const handleMessage = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;

        e.target.name.value = '';
        e.target.message.value = '';

        console.log(name, message);
    }

    return (
        <div className="w-3/4">
            <h2 className="text-3xl font-bold text-[#241468] my-10">Contact with us</h2>

            <form onSubmit={handleMessage}>
                <input type="text" placeholder="Your Name" name="name" className="border p-4 block mb-4 w-3/4" required />
                <br />
                <textarea name="message" id="message" placeholder="Your message" className="border p-4 block mb-4 w-3/4" cols="30" rows="10"></textarea>

                <button className="btn bg-[#241468] text-white">Submit</button>
            </form>
        </div>
    );
};

export default Contact;