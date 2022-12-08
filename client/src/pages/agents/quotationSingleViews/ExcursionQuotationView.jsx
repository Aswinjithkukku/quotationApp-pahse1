import React from 'react'
import { SlPeople } from "react-icons/sl";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useSelector } from 'react-redux';

function ExcursionQuotationView({ setExcursionPopUp, excursionPopUp }) {

  const { singleExcursion, loading } = useSelector(state => state.quotation)
  return (
    <div className='text-black bg-darkColor w-8/12  shadow-md pb-10'>
      {loading? "loading..." : (
        <>
      <div className='flex justify-end mt-5 mr-5'>
        <span className='text-3xl text-purple-700 cursor-pointer' onClick={() => setExcursionPopUp(!excursionPopUp)}>
          <MdClose />
        </span>
      </div>
      <div className='text-center mb-5'>
        <span className='text-2xl special-text-title'>
          Excursion Quotation
          <div className='special-underline'></div>
        </span>
      </div>

      <div className='mx-20'>
        <div className='text-slate-300 space-y-6 '>

          <div className='grid grid-cols-3 gap-2 '>
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
                <BsCashCoin />
              </span>
              <span className="text-lg font-medium ml-2">
                Total Price -
              </span>
              <span className="text-lg font-medium ml-2">
                {singleExcursion?.totalamount}
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
                {singleExcursion?.amountPerPerson}
              </span>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-2 ">
            {singleExcursion?.excursions.map((excursion) => (

              <>
                <div className='flex justify-center'>
                  <span className="text-xl font-medium">
                    <TbTruckReturn />
                  </span>
                  <span className="text-lg font-medium ml-2">
                    Excursions -
                  </span>
                  <span className="text-lg font-medium ml-2">
                    {excursion.name}
                  </span>
                </div>

                <div className='flex justify-center'>
                  <span className="text-xl font-medium">
                    <BsCashCoin />
                  </span>
                  <span className="text-lg font-medium ml-2">
                    price -
                  </span>
                  <span className="text-lg font-medium ml-2">
                    {excursion.price}
                  </span>
                </div>

                <div className='flex justify-center'>
                  <span className="text-xl font-medium">
                    <BsCashCoin />
                  </span>
                  <span className="text-lg font-medium ml-2">
                    place -
                  </span>
                  <span className="text-lg font-medium ml-2">
                    {excursion.place}
                  </span>
                </div>
              </>
            ))}

          </div>

        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default ExcursionQuotationView