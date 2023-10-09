import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            console.log(error.message);
        })

        
    }

    return (
        <div className="w-3/4">
            <h2 className="text-3xl font-bold my-10 text-[#241468]">Please Login</h2>

            <form onSubmit={handleLogIn}>
                <input type="email" name="email" placeholder="Your Email" className="border p-4 block mb-4 w-3/4" required />

                <input type="password" name="password" className="border p-4 block mb-4 w-3/4" placeholder="Password" required />

                <button className="btn bg-[#241468] text-white">Submit</button>

                <p className="mt-3 text-xl">New to our website? Please <Link className="
                underline text-blue-700 font-bold" to='/register'>Register</Link> </p>
            </form>

            {/* <p className="text-xl my-3 text-blue-700">Or</p>
            <button className="btn btn-primary mt-4">Login with Google</button> */}
        </div>
    );
};

export default Login;