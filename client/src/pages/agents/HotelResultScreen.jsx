import React, { Fragment } from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

function HotelResultScreen({ people, hotelName, placeName, nights, hotelArray, hotelPrice }) {


  return (
    <Fragment>
      <div className="mt-10 p-5 bg-boxColor text-darkColor">
        <div className="">

          <div className='grid grid-cols-4 gap-5'>
            <div className="flex items-center mt-5 111">
              <span className="text-xl font-bold">
                <SlPeople />
              </span>
              <span className="text-lg font-bold ml-2">
                Number of Peoples :
              </span>
              <span className="text-lg font-bold ml-2">{people} </span>
            </div>
            <div className="flex items-center mt-5  222">
              <span className="text-xl font-bold">
                <SlPaperPlane />
              </span>
              <span className="text-lg font-bold ml-2">Hotel : </span>
              <span className="text-lg font-bold ml-2">{hotelName}</span>
            </div>
            <div className="flex items-center mt-5  333">
              <span className="text-xl font-bold">
                <SlLocationPin />
              </span>
              <span className="text-lg font-bold ml-2">place : </span>
              <span className="text-lg font-bold ml-2">{placeName}</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-bold">
                <RiCarWashingLine />
              </span>
              <span className="text-lg font-bold ml-2">Nights : </span>
              <span className="text-lg font-bold ml-2"> {nights}</span>
            </div>
          </div>

          {hotelArray?.map((array) => (
            <div className="grid grid-cols-4">
            <div className="flex items-center mt-5">
              <span className="text-xl font-bold">
                <TbTruckReturn />
              </span>
              <span className="text-lg font-bold ml-2">Room Type : </span>
              <span className="text-lg font-bold ml-2">{array.roomType} </span>
            </div>

            <div className="flex items-center mt-5">
              <span className="text-xl font-bold">
                <BsCashCoin />
              </span>
              <span className="text-lg font-bold ml-2">Count : </span>
              <span className="text-lg font-bold ml-2">{array.count} </span>
            </div>

            <div className="flex items-center mt-5">
              <span className="text-xl font-bold">
                <BsCashCoin />
              </span>
              <span className="text-lg font-bold ml-2">Price : </span>
              <span className="text-lg font-bold ml-2">{array.price} </span>
            </div>


            <div className="flex items-center mt-5">
              <span className="text-xl font-bold">
                <BsCashCoin />
              </span>
              <span className="text-lg font-bold ml-2">x </span>
            </div>
          </div>
          ))}


          {/* <div className="thrid">
        <div className="flex items-center mt-5">
            <span className="text-xl font-bold">
              <BsCashCoin />
            </span>
            <span className="text-lg font-bold ml-2">Price(Total) : </span>
            <span className="text-lg font-bold ml-2">{transferEnquiry?.transferData?.totalamount ? transferEnquiry?.transferData?.totalamount : ''}</span>
          </div>
        </div> */}


        </div>
      </div>
    </Fragment>
  )
}

export default HotelResultScreen