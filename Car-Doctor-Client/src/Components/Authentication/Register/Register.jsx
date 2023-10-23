import React from 'react';
import loginImg from "../../../assets/images/login/login.svg";
import fb from "../../../assets/images/login/fb.svg";
import google from "../../../assets/images/login/ggl.svg";
import linkedin from "../../../assets/images/login/lnkdn.svg";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-[90%] h-fit mx-auto flex justify-between items-center my-10'>
            <div className='w-[50%] flex justify-center'>
                <img className='w-[75%]' src={loginImg} alt="" />
            </div>

            <div className='w-[50%] flex flex-col justify-center items-center px-6 py-20 border border-gray-300 rounded-lg'>
                <div>
                    <h1 className='text-[#444] font-semibold text-4xl'>Login</h1>
                </div>

                <div className='w-[70%] mx-auto'>
                    <form className='w-full'>
                        <div className='flex flex-col w-full'>
                            <label className='text-[#444] font-semibold' htmlFor="email">Email</label>
                            <input className='bg-white mt-2 rounded-lg border border-[#E8E8E8] py-2 w-full' type="email" id='email' name='email' />
                        </div>

                        <div className='flex flex-col mt-3'>
                            <label className='text-[#444] font-semibold' htmlFor="password">Password</label>
                            <input className='bg-white mt-2 rounded-lg border border-[#E8E8E8] py-2 w-full' type="password" id='password' name='password' />
                        </div>

                        <div>
                            <button className='bg-[#FF3811] w-full border-2 border-[#FF3811] text-white py-3 font-semibold rounded-lg mt-3 hover:text-[#FF3811] hover:bg-white hover:border-2 hover:border-[#FF3811]' type="submit">Sign In</button>
                        </div>
                    </form>

                    <div className='mt-5'>
                        <p className='text-center text-[#444] font-medium'>Or Sign In With</p>
                        <div className='mt-10 flex justify-center gap-4'>
                            <div className='p-4 w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex justify-center items-center'>
                                <img src={fb} alt="" />
                            </div>

                            <div className='p-4 rounded-full w-[55px] h-[55px] bg-[#F5F5F8] flex justify-center items-center'>
                                <img src={google} alt="" />
                            </div>

                            <div className='p-4 rounded-full w-[55px] h-[55px] bg-[#F5F5F8] flex justify-center items-center'>
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                        <p className='text-center mt-4 text-[#444] font-medium'>Already Have an Account? <Link to={"/login"}><span className='text-[#FF3811] font-bold '>Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;