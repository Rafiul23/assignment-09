import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const Navbar = () => {

    const { user, logOut, name, photo } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const links = <>

        <li className="bg-white p-2 hover:bg-rose-100 rounded-lg mr-4"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#241468] font-bold italic" : ""
            }
        >Home</NavLink></li>

        <li className="bg-white hover:bg-rose-100 p-2 rounded-lg mr-4"><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#241468] font-bold italic" : ""
            }
        >About us</NavLink></li>

        <li className="bg-white hover:bg-rose-100 p-2 rounded-lg mr-4"><NavLink to='/gallery'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#241468] font-bold italic" : ""
            }
        >Gallery</NavLink></li>

        

        <li className="bg-white hover:bg-rose-100 p-2 rounded-lg mr-4"><NavLink to='/register'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#241468] font-bold italic" : ""
            }
        >Register</NavLink></li>

    </>

    return (
        <div className="navbar p-5 bg-[#241468]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-white font-bold normal-case text-3xl">Twilight</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            {
                user && <img className="rounded-full w-10 mr-3 h-10" src={user?.photoURL} alt="" />
            }

            {
                user && <p className="text-white mr-3 font-bold">{user?.displayName}</p>
            }

           {
             user ?  <Link onClick={handleLogOut}
             className="bg-white hover:bg-rose-100 p-2 rounded-lg mr-4"
             >LogOut</Link> : 
             <Link to='/login'
             className="bg-white hover:bg-rose-100 p-2 rounded-lg mr-4"
             >Login</Link>
           }

            </div>

        </div>
    );
};

export default Navbar;