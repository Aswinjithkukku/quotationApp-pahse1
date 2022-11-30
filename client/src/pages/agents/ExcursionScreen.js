import React, { useEffect, useState } from "react";
import axios from '../../axios'
import { getExcursions } from "../../redux/slices/excursionSlice";
import { useDispatch, useSelector } from "react-redux";
import ExcursionResultScreen from "./ExcursionResultScreen";

function ExcursionScreen() {
  const dispatch = useDispatch();

  const [ people, setPeople ] = useState(0)
  const [ excursion, setExcursion ] = useState('')
  const [ array, setArray ] = useState([])

  const { excursions } = useSelector((state) => state.excursion);

  useEffect(() => {
    dispatch(getExcursions());
  }, [dispatch]);

  // const array = []

  
  const submitHandler = (e) => {
    e.preventDefault()
    let item = {
      id: (new Date).getTime(),
      people,
      excursion,
      // price
    }
    addItems(item)
  }

  const addItems = (item) => {
    setArray([...array,item])
    alert('added successfully')

    fetchData()
  }

  const fetchData = async() => {
    try {
      const { data } = await axios.post('/excursion/enquiry/update',{array})
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mt-20  border-2 bg-tertiaryColor py-10 px-5">
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-3 gap-10">
            <div className="mb-4">
              <label
                htmlFor="peopleField"
                className="text-lg font-bold text-white"
              >
                Peoples
              </label>
              <input
                id="peopleField"
                type="number"
                min='0'
                className="block p-2 w-full  text-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="excursionsField"
                className="text-lg font-bold text-white"
              >
                Excursions
              </label>
              <select
                id="excursionsField"
                className="block p-2 w-full  text-white shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                value={excursion}
                onChange={(e) => setExcursion(e.target.value)}
              >
                <option value="">Choose excursion</option>
                {excursions?.map((excursion) => (
                  <option key={excursion.id} value={excursion.id}>
                    {excursion.name}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <button className=" bg-darkColor text-white font-medium px-20 py-2 rounded-lg"
              type="submit">
                add
              </button>
            </div>
          </div>
        </form>
      </div>
      <div><ExcursionResultScreen array={array}/> </div>
    </div>
  );
}

export default ExcursionScreen;
