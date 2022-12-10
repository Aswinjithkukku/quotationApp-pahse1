import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function QuotationPage() {
  return (
    <div className='bg-gray-600 h-screen flex justify-center'>
      <div className='border-2 border-white w-6/12 h-[50em] mt-10 bg-slate-300'>
        <div className='m-7'>
          <div className='flex justify-between items-end pb-3 border-red-600 border-b-8'>
            <div className=''>
              <h1 className='text-3xl font-medium text-darkColor mb-2'>Quotation App</h1>
              <p className='text-xs font-light text-gray-500' >comapny Name</p>
              <p className='text-xs font-light text-gray-500' >comapny number</p>
              <p className='text-xs font-light text-gray-500' >comapny address</p>
              <p className='text-xs font-light text-gray-500' >comapny pin code</p>
            </div>
            <div className=''>
              <p className='text-darkColor'>quotation number</p>
              <p className='text-darkColor'>Today date</p>
            </div>
          </div>
          <div className='border-b-2 border-dashed'>
            <div className='my-4 mx-10'>
              <p className='text-darkColor font-semibold'> To:</p>
              <p className='text-darkColor'>Name</p>
              <p className='text-darkColor'>adress</p>
              <p className='text-darkColor'>phone number</p>
              <p className='text-darkColor'>email</p>
            </div>
          </div>
          <div className='border-b-2 border-dashed'>
              <div className=' text-darkColor'>
                <h1 className='text-lg font-semibold underline'>
                  Transfer Quotation
                </h1>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotationPage