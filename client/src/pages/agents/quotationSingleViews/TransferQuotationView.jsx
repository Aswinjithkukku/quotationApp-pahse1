import React from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useSelector } from 'react-redux';

function TransferQuotationView({ setTransferPopUp, transferPopUp }) {

  const { singleTransfer, loading } = useSelector(state => state.quotation)

  return (
    <div className='text-black bg-darkColor w-4/12  shadow-md pb-10'>
      {loading ? 'loading....' : (
        <>
        <div className='flex justify-end mt-5 mr-5'>
            <span className='text-3xl text-purple-700 cursor-pointer' onClick={() => setTransferPopUp(!transferPopUp)}>
                <MdClose />
            </span>
        </div>
        <div className='text-center mb-5'>
            <span className='text-2xl special-text-title'>
                Transfer Quotation
                <div className='special-underline'></div>
            </span>
        </div>
        <div className='flex justify-center'>
        <div className='text-slate-300 space-y-6'>

            <div className='flex'>
            <span className="text-xl font-medium ">
                <SlPeople />
              </span>
              <span className="text-lg font-medium ml-2">
                Number of Peoples -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.people}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <SlPaperPlane />
              </span>
              <span className="text-lg font-medium ml-2">
                Airport -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.transferfrom}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <SlLocationPin />
              </span>
              <span className="text-lg font-medium ml-2">
                Destination -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.transferTo}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <RiCarWashingLine />
              </span>
              <span className="text-lg font-medium ml-2">
                Type of Travel -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.transferStatus}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <TbTruckReturn />
              </span>
              <span className="text-lg font-medium ml-2">
                Return Status -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.returnStatus === true ? "yes" : "no"}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-medium ml-2">
                Total Price -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.totalamount}
              </span>
            </div>

            <div className='flex'>
            <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-medium ml-2">
                Price per person -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleTransfer?.amountPerPerson}
              </span>
            </div>

        </div>
        </div>
        </>
        )}
    </div>
  )
}

export default TransferQuotationView