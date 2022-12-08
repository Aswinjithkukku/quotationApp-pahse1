import React from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { MdClose } from "react-icons/md";

function HotelQuotation() {
  return (
    <div className='text-black bg-darkColor w-8/12  shadow-md pb-10'>
    <div className='flex justify-end mt-5 mr-5'>
        <span className='text-3xl text-purple-700'>
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
            2
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
            55
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
            5
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
            5
          </span>
        </div>

        </div>

        <div className="grid grid-cols-3 gap-2 ">

        <div className='flex justify-center'>
        <span className="text-xl font-medium">
            <TbTruckReturn />
          </span>
          <span className="text-lg font-medium ml-2">
            Room Type -
          </span>
          <span className="text-lg font-medium ml-2">
            yes
          </span>
        </div>

        <div className='flex justify-center'>
        <span className="text-xl font-medium">
            <BsCashCoin />
          </span>
          <span className="text-lg font-medium ml-2">
            Count -
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
            Price -
          </span>
          <span className="text-lg font-medium ml-2">
            5
          </span>
        </div>

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
</div>
  )
}

export default HotelQuotation