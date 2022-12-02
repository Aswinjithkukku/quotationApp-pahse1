import React, { Fragment } from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

function HotelResultScreen({ hotelData, filteredData,price }) {

  
  return (
    <Fragment>
      <div className="mt-10 p-5 bg-white shadow-md text-darkColor">
        <div className="">

          <div className='grid grid-cols-4 gap-5'>
            <div className="flex items-center mt-5 111">
              <span className="text-xl font-medium">
                <SlPeople />
              </span>
              <span className="text-lg font-medium ml-2">
                Number of Peoples :
              </span>
              <span className="text-lg font-medium ml-2">{hotelData?.people} </span>
            </div>
            <div className="flex items-center mt-5  222">
              <span className="text-xl font-medium">
                <SlPaperPlane />
              </span>
              <span className="text-lg font-medium ml-2">Hotel : </span>
              <span className="text-lg font-medium ml-2">{hotelData?.hotelName}</span>
            </div>
            <div className="flex items-center mt-5  333">
              <span className="text-xl font-medium">
                <SlLocationPin />
              </span>
              <span className="text-lg font-medium ml-2">place : </span>
              <span className="text-lg font-medium ml-2">{hotelData?.placeName}</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <RiCarWashingLine />
              </span>
              <span className="text-lg font-medium ml-2">Nights : </span>
              <span className="text-lg font-medium ml-2"> {hotelData?.nights}</span>
            </div>
            </div>

            {filteredData?.map((data,index) => (
              <div className='grid grid-cols-3'>
                <div className="flex items-center mt-5" key={index}>
                  <span className="text-xl font-medium">
                    <TbTruckReturn />
                  </span>
                  <span className="text-lg font-medium ml-2">Room Type : </span>
                  <span className="text-lg font-medium ml-2">{data?.roomType }</span>
                </div>

                <div className="flex items-center mt-5">
                  <span className="text-xl font-medium">
                    <BsCashCoin />
                  </span>
                  <span className="text-lg font-medium ml-2">Count : </span>
                  <span className="text-lg font-medium ml-2">{data?.count} </span>
                </div>

                <div className="flex items-center mt-5">
                  <span className="text-xl font-medium">
                    <BsCashCoin />
                  </span>
                  <span className="text-lg font-medium ml-2">Price : </span>
                  <span className="text-lg font-medium ml-2">{data?.price} </span>
                </div>
              </div>
            ))}

            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-bold ml-2">Total Price :</span>
              <span className="text-lg font-bold ml-2">{price?.totalSum} </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-bold ml-2">Sum per person :</span>
              <span className="text-lg font-bold ml-2">{price?.sumPerPerson} </span>
            </div>

        </div>
      </div>
    </Fragment>
  )
}

export default HotelResultScreen