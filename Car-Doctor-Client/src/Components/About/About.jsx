import React from 'react';
import about1 from "../../assets/images/about_us/person.jpg";
import about2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className='h-fit py-16'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className="left relative w-[60%]">
                    <img className='rounded-lg w-[70%]' src={about1} alt="" />
                    <img className='w-[40%] border-8 rounded-lg border-white absolute top-[50%] left-[40%]' src={about2} alt="" />
                </div>

                <div className="right items-center space-y-8 w-[40%] mr-10">
                    <p className='text-[#FF3811] font-bold'>About Us</p>
                    <h1 className='text-4xl font-bold text-[#151515]'>
                        We are qualified <br /> & of experience <br /> in this field
                    </h1>
                    <p className='text-sm text-[#737373]'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by injected humour,  or randomised words which <br /> don't look even slightly believable. </p>
                    <p className='text-sm text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='px-4 font-semibold bg-[#FF3811] py-2 border-2 rounded-md border-[#FF3811] hover:bg-transparent text-white hover:text-white hover:border-2 hover:border-white'>Get more Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;