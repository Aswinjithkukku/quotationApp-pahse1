import React, { useState } from "react";
import HotelResultScreen from "./HotelResultScreen";
import axios from '../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelData, addNewRow, handleRowItemChange, removeRow, filteredRowsData, prices } from '../../redux/slices/hotelSlice'
import { CgClose } from "react-icons/cg";

function HotelEnquiryScreen() {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    people: '',
    hotelName: '',
    placeName: '',
    nights: '',
    count: '',
    price: ''
  })
  const { people, hotelName, placeName, nights } = data

  const { hotelData, rows, filteredData, price } = useSelector(state => state.hotel)


  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const { data } = await axios.post('/hotel/getPrice', { filteredData, hotelData }, config)
      console.log(data);
      dispatch(prices(data))
    } catch (error) {
      console.log(error);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await dispatch(getHotelData({ people, hotelName, placeName, nights }))
    await dispatch(filteredRowsData())
    await fetchData()
  }


  const onRowChange = (e, index) => {
    dispatch(handleRowItemChange({
      value: e.target.value,
      name: e.target.name,
      index
    }))
  }

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="mt-20  border-2 bg-white shadow-md py-10 px-5">

          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-4 gap-10">
              <div className="mb-4">
                <label
                  htmlFor="retuenField"
                  className="text-lg font-semibold text-darkColor"
                >
                  Number of person
                </label>
                <input
                  id="retuenField"
                  type="number"
                  name="people"
                  value={data.people}
                  onChange={onChange}
                  min='0'
                  onfocus="this.blur()"
                  className="block p-2 w-full  text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hotelsField"
                  className="text-lg font-semibold text-darkColor"
                >
                  Hotels
                </label>
                <input
                  id="bedroomsField"
                  type="text"
                  name="hotelName"
                  value={data.hotelName}
                  onChange={onChange}
                  className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hotelsField"
                  className="text-lg font-semibold text-darkColor"
                >
                  Place
                </label>
                <input
                  id="bedroomsField"
                  type="text"
                  name='placeName'
                  value={data.placeName}
                  onChange={onChange}
                  className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hotelsField"
                  className="text-lg font-semibold text-darkColor"
                >
                  Nights
                </label>
                <input
                  id="bedroomsField"
                  type="number"
                  name="nights"
                  min='0'
                  value={data.nights}
                  onChange={onChange}
                  className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-white"
                />
              </div>
            </div>
            {rows.map((row, index) => (
              <>
                <div className="grid grid-cols-12 gap-5" key={index}>
                  <div className="mb-4 col-span-4">
                    <label
                      htmlFor="bedroomsField"
                      className="text-lg font-semibold text-darkColor"
                    >
                      RoomType
                    </label>
                    <select
                      id="bedroomsField"
                      type="text"
                      name="roomType"
                      value={row.roomType}
                      onChange={(e) => onRowChange(e, index)}
                      className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-white"
                    >
                      <option value='' >choose Room Type</option>
                      <option name='oneBr' value='oneBr'>One BedRoom</option>
                      <option name='twoBr' value='twoBr'>Two BedRoom</option>
                      <option name='threeBr' value='threeBr'>Three BedRoom</option>
                      <option name='sixBr' value='sixBr'>Six BedRoom</option>
                      <option name='eightBr' value='eightBr'>Eight BedRoom</option>
                    </select>
                  </div>

                  <div className="mb-4 col-span-4">
                    <label
                      htmlFor="bedroomsField"
                      className="text-lg font-semibold text-darkColor"
                    >
                      Count
                    </label>
                    <input
                      id="bedroomsField"
                      type="number"
                      name="count"
                      min='0'
                      value={row.count}
                      onChange={(e) => onRowChange(e, index)}
                      className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-600 placeholder-white"
                    />
                  </div>

                  <div className="mb-4 col-span-3">
                    <label
                      htmlFor="bedroomsField"
                      className="text-lg font-semibold text-darkColor"
                    >
                      Price
                    </label>
                    <input
                      id="bedroomsField"
                      type="number"
                      name="price"
                      min='0'
                      value={row.price}
                      onChange={(e) => onRowChange(e, index)}
                      className="block p-2 w-full text-darkColor bg-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-white"
                    />
                  </div>
                  <div className=" col-span-1 flex items-center justify-center text-2xl text-red-600"
                    onClick={() => dispatch(removeRow(index))}><CgClose /> </div>
                </div>
              </>
            ))}
            <div className="flex items-center justify-between">
              <button className=" text-blue-600 underline font-medium  rounded-lg text-center"
                onClick={() => dispatch(addNewRow())}>
                add more fileds
              </button>
              <button className=" bg-darkColor hover:bg-zinc-600 py-2 px-4 font-medium  rounded-md text-center"
                type="submit">
                Submit
              </button>
            </div>


          </form>
        </div>
        <div>
          <HotelResultScreen
            hotelData={hotelData}
            filteredData={filteredData}
            price={price}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelEnquiryScreen;
