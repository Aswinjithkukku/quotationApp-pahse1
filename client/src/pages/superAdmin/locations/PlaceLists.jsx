import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { Link } from 'react-router-dom'


function PlaceLists() {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const { data } = await axios.get(
        "/location/places"
      );

      setPlaces(data.places);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-[15em]">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
        <div>
          <Link to='/admin/places/create'>
            <button className="px-4 bg-darkColor py-2 rounded-md mb-1"> Create</button>
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                country
              </th>
              <th scope="col" className="py-3 px-6">
                Descriptions
              </th>
              {/* <th scope="col" className="py-3 px-6">
                place
              </th> */}
            </tr>
          </thead>
          <tbody>
            {places &&
              places.map((place) => (
                <tr key={place.id} className="bg-white border-b ">
                  <td className="py-4 px-6">{place.name} </td>
                  <td className="py-4 px-6">{place.Country.name} </td>
                  <td className="py-4 px-6">{place.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default PlaceLists