import React, { Fragment } from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";

import { useSelector } from 'react-redux';

function ExcursionResultScreen({people}) {

  const { selectedExcursions } = useSelector((state) => state.excursion);

  const totalamountPerPerson = selectedExcursions.reduce((accumulator, object) => {
    return accumulator + Number(object.price);
  }, 0);

  const totalAmount = totalamountPerPerson * people
  return (
    <Fragment>
      <div className="mt-10 p-5 bg-white shadow-md text-darkColor">
        <div className="">

    {selectedExcursions?.map((data) => (

          <div className='grid grid-cols-3 gap-10'>
            <div className="flex items-center mt-5 111">
              <span className="text-xl font-bold">
                <SlPeople />
              </span>
              <span className="text-lg font-bold ml-2">
                Number of Peoples :
              </span>
              <span className="text-lg font-bold ml-2">{people}</span>
            </div>
            <div className="flex items-center mt-5  222">
              <span className="text-xl font-bold">
                <SlPaperPlane />
              </span>
              <span className="text-lg font-bold ml-2">Excursion : </span>
              <span className="text-lg font-bold ml-2"> {data.name}</span>
            </div>
            <div className="flex items-center mt-5  333">
              <span className="text-xl font-bold">
                <SlLocationPin />
              </span>
              <span className="text-lg font-bold ml-2">Price : </span>
              <span className="text-lg font-bold ml-2"> {data.price}</span>
            </div>
          </div>
              ))}
                          <div className="flex items-center mt-5  333">
              <span className="text-xl font-bold">
                <SlLocationPin />
              </span>
              <span className="text-lg font-bold ml-2"> Total Price per person : </span>
              <span className="text-lg font-bold ml-2"> {totalamountPerPerson}</span>
            </div>

                          <div className="flex items-center mt-5  333">
              <span className="text-xl font-bold">
                <SlLocationPin />
              </span>
              <span className="text-lg font-bold ml-2"> Total Price : </span>
              <span className="text-lg font-bold ml-2"> {totalAmount}</span>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ExcursionResultScreen