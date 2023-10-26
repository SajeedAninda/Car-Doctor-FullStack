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
    let handleDelete = (id) => {
        let confirmed = window.confirm("Do You Want to Delete?");

        if (confirmed) {
            fetch(`http://localhost:5000/checkout/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        let remainingData = bookedData.filter(booked => booked._id !== id);
                        setBookedData(remainingData);
                    }
                });
        }
    }

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
                                    <span className='text-lg'>Delete</span>
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
                                        <button onClick={() => handleDelete(booked._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
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