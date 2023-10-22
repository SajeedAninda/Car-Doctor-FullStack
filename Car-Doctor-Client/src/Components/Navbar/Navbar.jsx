import React from 'react';
import logo from "../../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
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
                            isPending ? "pending px-3 py-2" : isActive ? "border-2 border-[#FF3811] px-3 py-2 rounded-md" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/about"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2" : isActive ? "border-2 border-[#FF3811] px-3 py-2 rounded-md" : ""
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to={"/services"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2" : isActive ? "border-2 border-[#FF3811] px-3 py-2 rounded-md" : ""
                        }
                    >
                        Services
                    </NavLink>


                    <NavLink
                        to={"/blogs"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2" : isActive ? "border-2 border-[#FF3811] px-3 py-2 rounded-md" : ""
                        }
                    >
                        Blogs
                    </NavLink>

                    <NavLink
                        to={"/contact"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending px-3 py-2" : isActive ? "border-2 border-[#FF3811] px-3 py-2 rounded-md" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <div className='flex justify-center gap-4 items-center flex-1'>
                    <div>
                        <AiOutlineShopping className='text-2xl text-[#444]'></AiOutlineShopping>
                    </div>
                    <div>
                        <AiOutlineSearch className='text-xl text-[#444]'></AiOutlineSearch>
                    </div>
                    <div>
                       <button className='px-4 font-semibold py-2 border-2 rounded-md border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'> Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;