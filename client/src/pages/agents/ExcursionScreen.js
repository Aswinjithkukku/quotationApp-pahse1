import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { getExcursions } from "../../redux/slices/excursionSlice";
import { useDispatch, useSelector } from "react-redux";
import ExcursionResultScreen from "./ExcursionResultScreen";
import { setPeopleCount,assignValue, removeValue } from "../../redux/slices/excursionSlice";

function ExcursionScreen() {
  const dispatch = useDispatch();

  const { excursions,people } = useSelector((state) => state.excursion);


  const submitHandler = (e) => {
    e.preventDefault();
  };


  useEffect(() => {
    dispatch(getExcursions());
  }, [dispatch]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mt-20  border-2 bg-white shadow-md py-7 px-5">
        <form onSubmit={submitHandler}>
          <div className="">
            <div className="mb-4">
              <label
                htmlFor="peopleField"
                className="text-lg font-bold text-darkColor"
              >
                Peoples
              </label>
              <input
                id="peopleField"
                type="number"
                min="0"
                className="block p-2 w-72 text-darkColor shadow-sm rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                value={people}
                onChange={(e) => dispatch(setPeopleCount(e.target.value))}
              />
            </div>

            <div className="grid grid-cols-6 gap-3">
              {excursions.map((excursion, index) => (
                <div className="flex items-center" key={index}>
                  <div className="text-lg font-medium text-darkColor">
                    {excursion.name}
                  </div>
                  <input
                    id="excursionsField"
                    type="checkbox"
                    className="block p-2 w-full scale-125 text-darkColor rounded-sm  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => {
                      if(e.target.checked) {
                        dispatch(assignValue(excursion))
                      }else {
                        dispatch(removeValue(excursion.id))
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div>
        <ExcursionResultScreen 
        people={people}
        />{" "}
      </div>
    </div>
  );
}

export default ExcursionScreen;
