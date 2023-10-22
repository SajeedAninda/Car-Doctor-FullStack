import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./banner.css";

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner1 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>
                

                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner2 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner3 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner4 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner5 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex h-[85vh] flex-col justify-center items-start space-y-8 py-16 px-16 banner6 rounded-lg relative'>
                        <h1 className='text-white font-bold text-6xl z-10'>
                            Affordable <br /> Price for <br /> Car Servicing
                        </h1>
                        <p className='text-white font-medium z-10'>
                            There are many variations of passages of available, but <br /> the majority have suffered alteration in some form
                        </p>
                        <div className='flex gap-6 z-10'>
                            <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Discover More</button>
                            <button className='px-4 font-semibold py-2 border-2 rounded-md border-white text-white hover:bg-[#FF3811] hover:text-white hover:border-2 hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                    <div className="overlay h-full"></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;