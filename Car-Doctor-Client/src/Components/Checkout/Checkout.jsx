import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./checkout.css"
import { AuthContext } from '../Authentication/AuthProvider';

const Checkout = () => {
    let serviceData = useLoaderData();
    let { signedInUser } = useContext(AuthContext);
    let { price } = serviceData;
    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex h-[300px] flex-col justify-center items-start checkBg rounded-lg relative'>
                <div className=' z-10 px-12 '>
                    <h1 className='text-white font-bold text-6xl'>
                        Checkout
                    </h1>
                </div>
                <div className="overlay h-full"></div>
            </div>

            <div className='bg-[#F3F3F3] px-16 py-16 h-fit w-full my-16 rounded-lg'>
                <form className='w-full'>
                    <div className='flex gap-6 w-full'>
                        <div className='w-full'>
                            <label className='text-lg font-semibold' htmlFor="name">Name</label><br />
                            <input defaultValue={signedInUser?.displayName} className='w-full py-2 rounded-lg border border-gray-400 mt-2' type="text" name='name' id='name'   required/>
                        </div>
                        <div className='w-full'>
                            <label className='text-lg font-semibold' htmlFor="email">Email</label><br />
                            <input className='w-full py-2 rounded-lg border border-gray-400 mt-2' type="email" name='email' id='email' defaultValue={signedInUser?.email}  required/>
                        </div>
                    </div>

                    <div className='flex gap-6 w-full mt-6'>
                        <div className='w-full'>
                            <label className='text-lg font-semibold' htmlFor="date">Date</label><br />
                            <input className='w-full py-2 rounded-lg border border-gray-400 mt-2' type="date" name='date' id='date'  required/>
                        </div>
                        <div className='w-full'>
                            <label className='text-lg font-semibold' htmlFor="amount">Due Amount</label><br />
                            <input className='w-full py-2 rounded-lg border border-gray-400 mt-2' type="number" name='amount' id='amount' defaultValue={price} required/>
                        </div>
                    </div>

                    <div className='flex gap-6 w-full mt-6'>
                        <input className='w-full py-3 rounded-lg bg-[#FF3811] text-white font-bold cursor-pointer' type="submit" value="Order Confirm" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Checkout;