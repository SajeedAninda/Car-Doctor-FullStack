import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/services")
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, []);

    useEffect(() => {
        axios.get("http://localhost:5000/services", { withCredentials: true })
            .then(res => setServices(res.data));
    }, [])

    return (
        <div className='w-[90%] mx-auto py-16'>
            <div className='flex flex-col gap-5 text-center justify-center items-center'>
                <p className='text-[#FF3811] font-bold'>Service</p>
                <h3 className='font-bold text-[#151515] text-4xl'>Our Service Area</h3>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((service) => (
                    <div key={service._id} className='p-5 space-y-3 border border-gray-200 rounded-lg'>
                        <img className='h-[200px] w-full rounded-lg' src={service.img} alt={service.title} />
                        <h4 className='text-xl font-bold text-[#444]'>{service.title}</h4>
                        <div className='flex justify-between'>
                            <p className='text-[#FF3811] font-bold'>Price: ${service.price}</p>
                            <Link to={`/checkout/${service._id}`} className='text-[#FF3811] font-bold hover:text-[#ff3911b0]'>Book Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
