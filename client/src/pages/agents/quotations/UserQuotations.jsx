import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";
import {
  userQuotations,
  transferQuotationData,
  hotelQuotationData,
  excursionQuotationData
} from '../../../redux/slices/quotationSlice';
import { Link } from 'react-router-dom'
import TransferQuotationView from '../quotationSingleViews/TransferQuotationView';
import HotelQuotationView from '../quotationSingleViews/HotelQuotationView';

function UserQuotations() {
  const dispatch = useDispatch()

  const [transferPopUp, setTransferPopUp] = useState(false)
  const [hotelPopUp, setHotelPopUp] = useState(false)
  const [excursionPopUp, setExcursionPopUp] = useState(false)

  const { userQuotation } = useSelector(state => state.quotation)

  useEffect(() => {

    dispatch(userQuotations())
  }, [dispatch])

  return (
    <>
      <div className='absolute inset-0 z-10 w-full flex justify-center items-center h-[100%]'>
        {/* <TransferQuotationView /> */}
        <HotelQuotationView />
      </div>



      <div className='max-w-screen-2xl mx-auto'>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
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
                <th scope="col" className="py-3 px-6">
                  Click
                </th>
              </tr>
            </thead>
            {userQuotation &&
              userQuotation?.map((quotation) => (
                <>
                  <div className='font-semibold ml-6 ' key={quotation.id}>{quotation.quotationNumber}</div>
                  <tbody>
                    {quotation.QuotationAmendments?.map((item) => (
                      <tr className="bg-white border-b " key={item.id}>
                        <td className="py-4 px-6">{quotation.quotationNumber} </td>
                        <td className="py-4 px-6">{quotation.amendmentNumber}</td>
                        <td className="py-4 px-6">
                          <span onClick={() => dispatch(transferQuotationData(item.transferQuotationId))}
                            className='flex'><BsArrowLeft />view</span>
                        </td>
                        <td className="py-4 px-6">
                          <span onClick={() => dispatch(hotelQuotationData(item.hotelQuotationId))}
                            className='flex'><BsArrowLeft />view</span>
                        </td>
                        <td className="py-4 px-6">
                          <span onClick={() => dispatch(excursionQuotationData(item.excursionQuotationId))}
                            className='flex'><BsArrowLeft />view</span>
                        </td>

                        <td className="py-4 px-6">
                          <Link to='/quotation/update'>
                            <span className='bg-darkColor text-white px-3 py-2 rounded-md shadow-md'>Update</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ))}
          </table>
        </div>
      </div>
    </>
  )
}

export default UserQuotations