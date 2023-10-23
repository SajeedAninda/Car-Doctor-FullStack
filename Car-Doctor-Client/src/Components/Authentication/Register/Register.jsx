import React, { useContext } from 'react';
import loginImg from "../../../assets/images/login/login.svg";
import fb from "../../../assets/images/login/fb.svg";
import google from "../../../assets/images/login/ggl.svg";
import linkedin from "../../../assets/images/login/lnkdn.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    let { register } = useContext(AuthContext);
    let handleRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Length should be at least 6 Characters!'
            })
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one capital letter!'
            })
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one special character!'
            })
        }
        register(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Registration Successful!',
                    'success'
                )
            })
            .catch((error) => {
                console.log(error);
            });
    }




    return (
        <div className='w-[90%] h-fit mx-auto flex justify-between items-center my-10'>
            <div className='w-[50%] flex justify-center'>
                <img className='w-[75%]' src={loginImg} alt="" />
            </div>

            <div className='w-[50%] flex flex-col justify-center items-center px-6 py-20 border border-gray-300 rounded-lg'>
                <div>
                    <h1 className='text-[#444] font-semibold text-4xl'>Register</h1>
                </div>

                <div className='w-[70%] mx-auto'>
                    <form onSubmit={handleRegister} className='w-full'>
                        <div className='flex flex-col w-full'>
                            <label className='text-[#444] font-semibold' htmlFor="email">Email</label>
                            <input className='bg-white mt-2 rounded-lg border border-[#E8E8E8] py-2 w-full' type="email" id='email' name='email' />
                        </div>

                        <div className='flex flex-col mt-3'>
                            <label className='text-[#444] font-semibold' htmlFor="password">Password</label>
                            <input className='bg-white mt-2 rounded-lg border border-[#E8E8E8] py-2 w-full' type="password" id='password' name='password' />
                        </div>

                        <div>
                            <button className='bg-[#FF3811] w-full border-2 border-[#FF3811] text-white py-3 font-semibold rounded-lg mt-3 hover:text-[#FF3811] hover:bg-white hover:border-2 hover:border-[#FF3811]' type="submit">Register </button>
                        </div>
                    </form>

                    <div className='mt-5'>
                        <p className='text-center mt-4 text-[#444] font-medium'>Already Have an Account? <Link to={"/login"}><span className='text-[#FF3811] font-bold '>Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;