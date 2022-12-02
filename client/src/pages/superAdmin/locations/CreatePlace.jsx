import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { getCountries } from '../../../redux/slices/locationSlice'
import { useDispatch, useSelector } from 'react-redux'

function CreatePlace() {
  
  const dispatch = useDispatch()

  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [countryId, setCountryId] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const { data } = await axios.post(
        "/location/place/create",{name:place, description, countryId }, config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const { countries } = useSelector( state => state.location)
  useEffect(() => {
    dispatch(getCountries())
  
  }, [dispatch])
  
  return (
    <div className="mx-auto max-w-screen-sm">
      <form onSubmit={submitHandler}>
      <div className="mb-4">
          <label
            htmlFor="countryField"
            className="text-lg font-bold text-gray-400"
          >
            Country Name
          </label>
          <select
            id="countryField"
            className="block p-2 w-full  text-white bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter country"
            value={countryId}
            onChange={(e) => setCountryId(e.target.value)}
          >
            <option value="">Choose place</option>
            {countries?.map((country) => (
            <option value={country.id} key={country.id}>{country.name} </option>
            ))}
          </select>
        </div>
        <div className="place mb-5">
          <label
            htmlFor="input-place"
            className="text-lg font-bold text-gray-400"
          >
            Place Name
          </label>
          <input
            type="text"
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter place"
            id="input-place"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>

        <div className="description mb-5">
          <label
            htmlFor="input-description"
            className="text-lg font-bold text-gray-400"
          >
            Description
          </label>
          <textarea
            type="text"
            className="block p-2  w-full text-gray-900 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter description"
            id="input-description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          value="Submit"
          className="text-2xl font-bold bg-gray-600 hover:bg-blue-600 duration-300 text-gray-300 py-2 rounded-lg w-full mb-4"
        >
          add
        </button>
      </form>
    </div>
  );
}

export default CreatePlace;
