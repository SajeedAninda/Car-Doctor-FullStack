import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';

const Inventory = () => {
    let [bookedData, setBookedData] = useState([]);
    let { signedInUser } = useContext(AuthContext);
    let emailAddress = signedInUser?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${emailAddress}`)
            .then(res => res.json())
            .then(data => setBookedData(data))
    }, [])

    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex h-[300px] flex-col justify-center items-start checkBg rounded-lg relative'>
                <div className=' z-10 px-12 '>
                    <h1 className='text-white font-bold text-6xl'>
                        Inventory
                    </h1>
                </div>
                <div className="overlay h-full"></div>
            </div>

            <div className="overflow-x-auto py-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='text-lg font-bold text-black'>Service</th>
                            <th className='text-lg font-bold text-black'>Name</th>
                            <th className='text-lg font-bold text-black'>Customer Name</th>
                            <th className='text-lg font-bold text-black'>Customer Email </th>
                            <th className='text-lg font-bold text-black'>Price </th>
                            <th className='text-lg font-bold text-black'>Order Date</th>
                        </tr>
                    </thead>
                    {
                        bookedData.map(booked => <tbody>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={booked.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{booked.title}</span>
                                </td>
                                <td className='text-lg'>{booked.name}</td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{booked.email}</span>
                                </td>
                                <td className='text-lg'>${booked.price}</td>
                                <td className='text-base'>{booked.date}</td>
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default Inventory;