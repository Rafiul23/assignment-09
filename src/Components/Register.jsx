import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {

    const { signInWithGoogle, setUser, createUser, setError } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photoURL.value;


        if(password.length < 6){
            setError('Your password is less than 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setError('Your password should have one uppercase');
            return;
        }
        else if(!/[!@#$%^&*()_+\-=\[\]{}|;:'",<.>?/]/.test(password)){
            setError('Your password should have at least one special character');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log(loggedInUser);
        })
        .catch(error =>{
            setError(error.message);
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log(loggedInUser);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className="w-3/4">
            <h2 className="text-3xl font-bold my-10 text-[#241468]">Please Register</h2>

            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="border p-4 block my-4 w-3/4" placeholder="Your Name" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="border p-4 block my-4 w-3/4" placeholder="Your Email" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="border p-4 block my-4 w-3/4" id="password" placeholder="Your Password" required />

                <label htmlFor="photo">Photo</label>
                <input type="text" name="photoURL" id="photo" className="border p-4 block my-4 w-3/4" placeholder="Your Photo URL" />

                <button className="btn bg-[#241468] text-white">Register</button>

                <p className="my-3 text-xl">Already have an account? Please <Link className="
                underline text-blue-700 font-bold" to='/login'>Login</Link> </p>

            </form>

            <p className="text-xl my-3 text-blue-700">Or</p>

            <button onClick={handleGoogleSignIn} className="btn mb-3 btn-primary mt-4">Login with Google</button>

        </div>
    );
};

export default Register;