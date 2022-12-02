import React, { useEffect, useState } from "react";
import TransferResultScreen from "./TransferResultScreen";
import {
  getTransferEnquiryData,
  transferEquiryData,
} from "../../redux/slices/transferSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";

function TransferEnquiryScreen() {
  const dispatch = useDispatch();

  const { places, airports, transferEnquiry } = useSelector(
    (state) => state.transfer
  );

  const [locations, setLocations] = useState({
    people: "",
    airportCode: "",
    placeId: "",
    transferStatus: "",
  });
  const { people, airportCode, placeId, transferStatus } = locations;
  const [returnStatus, setReturnStatus] = useState(false);

  useEffect(() => {
    dispatch(getTransferEnquiryData());
  }, [dispatch]);

  const onChange = (e) => {
    e.preventDefault();
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };

  const transferDatas = {
    people: Number(people),
    airportCode,
    placeId,
    transferStatus,
    returnStatus,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const response = await axios.post(
        "http://127.0.0.1:4000/api/transfer/enquiry",
        transferDatas, config
      );
      const payload = {
        transferEnquiry: {
          people,
          airportCode,
          placeId,
          transferStatus,
          returnStatus
        },
        transferData: response.data,
      };
      dispatch(transferEquiryData(payload));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <form onSubmit={submitHandler}>
        <div className="mt-20 grid grid-cols-5 gap-10 border-2 bg-white py-10 px-5 shadow-md">
          <div className="mb-4">
            <label
              htmlFor="airportField"
              className="text-lg font-bold text-darkColor"
            >
              Peoples
            </label>
            <input
              id="airportField"
              type="number"
              min="0"
              className="block p-2 w-full shadow-sm rounded-sm text-darkColor bg-primaryColor  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-darkColor"
              placeholder="Enter Number of People"
              name="people"
              value={locations.people}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="airportField"
              className="text-lg font-bold text-darkColor"
            >
              Airport
            </label>
            <select
              id="airportField"
              className="block p-2 w-full shadow-sm rounded-sm text-darkColor bg-primaryColor  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter airport"
              name="airportCode"
              value={locations.airportCode}
              onChange={onChange}
            >
              <option value="">Choose airport</option>
              {airports?.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.code}
                  {airport.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="placeField"
              className="text-lg font-bold text-darkColor"
            >
              Place
            </label>
            <select
              id="placeField"
              className="block p-2 w-full shadow-sm rounded-sm text-darkColor bg-primaryColor  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter place"
              name="placeId"
              value={locations.placeId}
              onChange={onChange}
            >
              <option value="">Choose Place</option>
              {places?.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="typeField"
              className="text-lg font-bold text-darkColor"
            >
              Type of Travel
            </label>
            <select
              id="typeField"
              className="block p-2 w-full shadow-sm rounded-sm text-darkColor bg-primaryColor  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter type"
              name="transferStatus"
              value={locations.transferStatus}
              onChange={onChange}
            >
              <option value="">Choose Type of Travel</option>
              <option value="private">private</option>
              <option value="shared">shared</option>
            </select>
          </div>
          <div className="last flex items-center">
            <div className="mb-4">
              <label
                htmlFor="retuenField"
                className="text-lg font-bold text-darkColor"
              >
                Return
              </label>
              <input
                id="retuenField"
                type="checkbox"
                className="block mt-3 bg-darkColor  border border-gray-300 scale-150 "
                name="returnStatus"
                value={returnStatus}
                onChange={(e) => setReturnStatus(!returnStatus)}
              />
            </div>
            <button
              value="submit"
              className="ml-14 bg-darkColor hover:bg-zinc-600 duration-150 text-white font-medium px-3 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>
        <TransferResultScreen transferEnquiry={transferEnquiry} />
      </div>
    </div>
  );
}

export default TransferEnquiryScreen;
