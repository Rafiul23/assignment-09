import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="w-3/4">
             <h2 className="text-3xl font-bold my-10 text-[#241468]">Please Register</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="border p-4 block my-4 w-3/4" placeholder="Your Name" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="border p-4 block my-4 w-3/4" placeholder="Your Email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="border p-4 block my-4 w-3/4" id="password" placeholder="Your Password" required/>

                <label htmlFor="photo">Photo</label>
                <input type="text" name="photoURL" id="photo" className="border p-4 block my-4 w-3/4" placeholder="Your Photo URL" />

                <button className="btn bg-[#241468] text-white">Register</button>

                <p className="my-3 text-xl">Already have an account? Please <Link className="
                underline text-blue-700 font-bold" to='/login'>Login</Link> </p>

            </form>
            
        </div>
    );
};

export default Register;