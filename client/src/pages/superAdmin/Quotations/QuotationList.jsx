import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { excursionQuotationData, getQuotations, hotelQuotationData, transferQuotationData } from '../../../redux/slices/quotationSlice'
import { BsArrowLeft } from "react-icons/bs";
import TransferQuotationView from '../../agents/quotationSingleViews/TransferQuotationView';
import ExcursionQuotationView from '../../agents/quotationSingleViews/ExcursionQuotationView';
import HotelQuotationView from '../../agents/quotationSingleViews/HotelQuotationView'

function QuotationList() {
  const dispatch = useDispatch()

  const [ transferPopUp, setTransferPopUp ] = useState(false)
  const [ hotelPopUp, setHotelPopUp ] = useState(false)
  const [ excursionPopUp, setExcursionPopUp ] = useState(false)

  const { quotations } = useSelector(state => state.quotation)

  useEffect(() => {
    dispatch(getQuotations())
  }, [dispatch])

  return (
    <>
    {transferPopUp && (
        <div className='absolute inset-0 z-10 w-full flex justify-center items-center h-[100%]'>
          <TransferQuotationView setTransferPopUp={setTransferPopUp} transferPopUp={transferPopUp} />
        </div>
      )}
      {hotelPopUp && (
        <div className='absolute inset-0 z-10 w-full flex justify-center items-center h-[100%]'>
          <HotelQuotationView setHotelPopUp={setHotelPopUp} hotelPopUp={hotelPopUp} />
        </div>
      )}
      {excursionPopUp && (
        <div className='absolute inset-0 z-10 w-full flex justify-center items-center h-[100%]'>
          <ExcursionQuotationView setExcursionPopUp={setExcursionPopUp} excursionPopUp={excursionPopUp} />
        </div>
      )}
      
    <div className='relative ml-[15em]'>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
        <div>
          <Link to='/admin/quotations'>
            <button className="px-4 bg-darkColor py-2 rounded-md mb-2"> Create</button>
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Quotation Number
              </th>
              <th scope="col" className="py-3 px-6">
                AmendmentNumber
              </th>
              <th scope="col" className="py-3 px-6">
                Transfer Quotation
              </th>
              <th scope="col" className="py-3 px-6">
                Hotel quotation
              </th>
              <th scope="col" className="py-3 px-6">
                Excursion Quotation
              </th>
            </tr>
          </thead>
          {quotations &&
            quotations.map((quotation) => (
              <tbody>
                {quotation?.QuotationAmendments.map((item) => (
                  <tr className="bg-white border-b " key={item.id}>
                    <td className="py-4 px-6">{item.quotationNumber} </td>
                    <td className="py-4 px-6">{item.amendmentNumber}</td>
                    <td className="py-4 px-6">
                      <span onClick={() => {
                        dispatch(transferQuotationData(item.transferQuotationId))
                        setTransferPopUp(!transferPopUp)
                      }}
                        className='flex hover:text-darkColor cursor-pointer'>
                        <span className=' flex items-center'>
                          <BsArrowLeft />
                        </span>
                        <span className='ml-3 '>
                          view
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span onClick={() => {
                        dispatch(hotelQuotationData(item.hotelQuotationId))
                        setHotelPopUp(!hotelPopUp)
                      }}
                        className='flex hover:text-darkColor cursor-pointer'>
                        <span className=' flex items-center'>
                          <BsArrowLeft />
                        </span>
                        <span className='ml-3 '>
                          view
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span onClick={() => {
                        dispatch(excursionQuotationData(item.excursionQuotationId))
                        setExcursionPopUp(!excursionPopUp)
                      }}
                        className='flex hover:text-darkColor cursor-pointer'>
                        <span className=' flex items-center'>
                          <BsArrowLeft />
                        </span>
                        <span className='ml-3 '>
                          view
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
        </table>
      </div>
    </div>
    </>
  )
}

export default QuotationList