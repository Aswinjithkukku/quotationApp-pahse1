import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getExcursions } from '../../../redux/slices/excursionSlice'


function TransferList() {
    const dispatch = useDispatch()

    const { excursions } =  useSelector(state => state.excursion) 

    useEffect(() => {
        dispatch(getExcursions());
    }, [dispatch]);


    return (
        <div className="ml-[15em]">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
                <div>
                    <Link to='/admin/transfer/create'>
                        <button className="px-4 bg-darkColor py-2 rounded-md mb-2"> Create</button>
                    </Link>
                </div>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Place
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            excursions?.map((excursion) => (
                                <tr className="bg-white border-b " key={excursion.id}>
                                    {/* <td className="py-4 px-6">{trans.id} </td> */}
                                    <td className="py-4 px-6">{excursion.name} </td>
                                    <td className="py-4 px-6">{excursion.descriptions} </td>
                                    <td className="py-4 px-6">{excursion.place} </td>
                                    <td className="py-4 px-6">{excursion.price} </td>

                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransferList;
