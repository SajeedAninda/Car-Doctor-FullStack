import React, { useContext } from 'react';
import logo from "../../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AuthContext } from '../Authentication/AuthProvider';
import axios from 'axios';


const Navbar = () => {
    let { signedInUser, logOut } = useContext(AuthContext);

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Log Out Successfull");
                axios.post("http://localhost:5000/logout", signedInUser.email, { withCredentials: true })
                    .res(console.log(res.data));
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='w-[90%] mx-auto'>
            <div className='h-[15vh]  flex justify-between items-center'>
                <div className='flex-1'>
                    <Link to={"/"}><img className='w-[85px]' src={logo} alt="" /></Link>
                </div>
                <div className='font-semibold flex-1 text-[#444] flex justify-center items-center gap-5'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2 hover:text-[#FF3811]" : isActive ? "border-2 hover:text-[#FF3811] border-[#FF3811] px-3 py-2 rounded-md" : "hover:text-[#FF3811]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/about"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2 hover:text-[#FF3811]" : isActive ? "border-2 hover:text-[#FF3811] border-[#FF3811] px-3 py-2 rounded-md" : "hover:text-[#FF3811]"
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to={"/services"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2 hover:text-[#FF3811]" : isActive ? "border-2 hover:text-[#FF3811] border-[#FF3811] px-3 py-2 rounded-md" : "hover:text-[#FF3811]"
                        }
                    >
                        Services
                    </NavLink>


                    <NavLink
                        to={"/inventory"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2 hover:text-[#FF3811]" : isActive ? "border-2 hover:text-[#FF3811] border-[#FF3811] px-3 py-2 rounded-md" : "hover:text-[#FF3811]"
                        }
                    >
                        Inventory
                    </NavLink>

                    <NavLink
                        to={"/contact"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2 hover:text-[#FF3811]" : isActive ? "border-2 hover:text-[#FF3811] border-[#FF3811] px-3 py-2 rounded-md" : "hover:text-[#FF3811]"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <div className='flex justify-end gap-4 items-center flex-1'>
                    <div>
                        <AiOutlineShopping className='text-2xl text-[#444]'></AiOutlineShopping>
                    </div>
                    <div>
                        <AiOutlineSearch className='text-xl text-[#444]'></AiOutlineSearch>
                    </div>
                    <div>
                        {
                            signedInUser ?
                                <button onClick={handleLogout} className='px-4 font-semibold py-2 border-2 rounded-md border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Logout</button>
                                :
                                <Link to={`/login`}> <button className='px-4 font-semibold py-2 border-2 rounded-md border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;