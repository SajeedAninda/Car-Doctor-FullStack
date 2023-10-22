import React from 'react';
import product1 from "../../assets/images/products/1.png"
import product2 from "../../assets/images/products/2.png"
import product3 from "../../assets/images/products/3.png"
import product4 from "../../assets/images/products/4.png"
import product5 from "../../assets/images/products/5.png"
import product6 from "../../assets/images/products/6.png"

const Products = () => {
    return (
        <div className='w-[90%] mx-auto py-16'>
            <div className='flex flex-col gap-5 text-center justify-center items-center'>
                <p className='text-[#FF3811] font-bold'>Popular Products</p>
                <h3 className='font-bold text-[#151515] text-4xl'>Browse Our Products</h3>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product1} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>


                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product2} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>



                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product3} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>



                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product4} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>



                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product5} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>



                <div className='p-5 space-y-3 border flex justify-center items-center flex-col border-gray-200 rounded-lg'>
                    <div className='bg-gray-200 w-full flex justify-center py-6 rounded-lg'>
                        <img className='h-[150px] w-[156px] rounded-lg' src={product6} />
                    </div>
                    <h4 className='text-xl font-bold text-[#444]'>Car Engine Plug</h4>
                    <div className='flex justify-center'>
                        <p className='text-[#FF3811] text-center font-bold'>$ 20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;