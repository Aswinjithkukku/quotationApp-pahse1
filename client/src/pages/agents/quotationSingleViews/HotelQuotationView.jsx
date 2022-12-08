import React from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useSelector } from 'react-redux';

function HotelQuotation({ setHotelPopUp, hotelPopUp }) {

  const { singleHotel, loading } = useSelector(state => state.quotation)
  return (
    <div className='text-black bg-darkColor w-8/12  shadow-md pb-10'>
      {loading? "loading..." : (
      <>
        <div className='flex justify-end mt-5 mr-5'>
          <span className='text-3xl text-purple-700 cursor-pointer' onClick={() => setHotelPopUp(!hotelPopUp)}>
            <MdClose />
          </span>
        </div>
        <div className='text-center mb-5'>
          <span className='text-2xl special-text-title'>
            Hotel Quotation
            <div className='special-underline'></div>
          </span>
        </div>
        <div className='mx-20'>
          <div className='text-slate-300 space-y-6 '>

            <div className='grid grid-cols-4 gap-2 '>
              <div className='flex justify-center'>
                <span className="text-xl font-medium ">
                  <SlPeople />
                </span>
                <span className="text-lg font-medium ml-2">
                  Number of Peoples -
                </span>
                <span className="text-lg font-medium ml-2">
                  {singleHotel?.people}
                </span>
              </div>

              <div className='flex justify-center'>
                <span className="text-xl font-medium">
                  <SlPaperPlane />
                </span>
                <span className="text-lg font-medium ml-2">
                  Hotel -
                </span>
                <span className="text-lg font-medium ml-2">
                  {singleHotel?.name}
                </span>
              </div>

              <div className='flex justify-center'>
                <span className="text-xl font-medium">
                  <SlLocationPin />
                </span>
                <span className="text-lg font-medium ml-2">
                  Place -
                </span>
                <span className="text-lg font-medium ml-2">
                  {singleHotel?.place}
                </span>
              </div>

              <div className='flex justify-center'>
                <span className="text-xl font-medium">
                  <RiCarWashingLine />
                </span>
                <span className="text-lg font-medium ml-2">
                  Nights -
                </span>
                <span className="text-lg font-medium ml-2">
                  {singleHotel?.nights}
                </span>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-2 gap-y-4 ">
              {singleHotel?.roomType.map((room) => (
                <>
                  <div className='flex justify-center  border-dotted border-b-2'>
                    <span className="text-xl font-medium">
                      <TbTruckReturn />
                    </span>
                    <span className="text-lg font-medium ml-2">
                      Room Type -
                    </span>
                    <span className="text-lg font-medium ml-2">
                      {room.roomType}
                    </span>
                  </div>

                  <div className='flex justify-center border-dotted border-b-2'>
                    <span className="text-xl font-medium">
                      <BsCashCoin />
                    </span>
                    <span className="text-lg font-medium ml-2">
                      Count -
                    </span>
                    <span className="text-lg font-medium ml-2">
                      {room.count}
                    </span>
                  </div>

                  <div className='flex justify-center border-dotted border-b-2'>
                    <span className="text-xl font-medium">
                      <BsCashCoin />
                    </span>
                    <span className="text-lg font-medium ml-2">
                      Price -
                    </span>
                    <span className="text-lg font-medium ml-2">
                      {room.price}
                    </span>
                  </div>
                </>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">

              <div className='flex justify-center'>
                <span className="text-xl font-medium">
                  <BsCashCoin />
                </span>
                <span className="text-lg font-medium ml-2">
                  Total Price -
                </span>
                <span className="text-lg font-medium ml-2">
                  5
                </span>
              </div>
              <div className='flex justify-center'>
                <span className="text-xl font-medium">
                  <BsCashCoin />
                </span>
                <span className="text-lg font-medium ml-2">
                  Price per Person -
                </span>
                <span className="text-lg font-medium ml-2">
                  5
                </span>
              </div>

            </div>

          </div>
        </div>
      </>
        )}
    </div>
  )
}

export default HotelQuotation