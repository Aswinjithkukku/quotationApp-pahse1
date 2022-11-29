import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import { useDispatch, useSelector } from 'react-redux'

function CreateExcursions() {
  // const dispatch = useDispatch()

  const { airports, places } = useSelector(state => state.transfer)

  const [data, setData] = useState({
    name: '',
    descriptions: '',
    place: '',
    price: '',
  });

  // useEffect(() => {
  //   dispatch(getTransferEnquiryData());
  // }, [dispatch]);


  const onDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/excursion/create", data );
        window.alert('item Added successfully')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-sm">
      <form onSubmit={submitHandler}>
        
        <div className="name mb-5">
          <label
            htmlFor="input-name"
            className="text-lg font-bold text-gray-400"
          >
            Excursion Name
          </label>
          <input
            type="text"
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter name"
            id="input-name"
            name="name"
            value={data.name}
            onChange={onDataChange}
          />
        </div>
        
        <div className="descriptions mb-5">
          <label
            htmlFor="input-descriptions"
            className="text-lg font-bold text-gray-400"
          >
            Descriptions
          </label>
          <textarea
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter descriptions"
            id="input-descriptions"
            name="descriptions"
            value={data.descriptions}
            onChange={onDataChange}
          />
        </div>
        
        <div className="place mb-5">
          <label
            htmlFor="input-place"
            className="text-lg font-bold text-gray-400"
          >
            place
          </label>
          <input
            type="text"
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter descriptions"
            id="input-place"
            name="place"
            value={data.place}
            onChange={onDataChange}
          />
        </div>

        <div className="price mb-5">
          <label
            htmlFor="input-price"
            className="text-lg font-bold text-gray-400"
          >
            price
          </label>
          <input
            type="number"
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter price"
            id="input-price"
            name="price"
            value={data.price}
            onChange={onDataChange}
          />
        </div>

        <button
          type="submit"
          value="Submit"
          className="text-2xl font-bold bg-gray-600 hover:bg-blue-600 duration-300 text-gray-300 py-2 rounded-lg w-full mb-4"
          // disabled={loading ? true : false}
        >
          add
        </button>
      </form>
    </div>
  );
}

export default CreateExcursions;
