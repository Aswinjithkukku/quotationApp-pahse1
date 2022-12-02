import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getQuotations } from '../../../redux/slices/quotationSlice'
import { BsArrowLeft } from "react-icons/bs";

function QuotationList() {
  const dispatch = useDispatch()

  const { quotations } = useSelector(state => state.quotation)
  console.log(quotations);

  useEffect(() => {

    dispatch(getQuotations())
  }, [dispatch])

  return (
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
          <tbody>
            {quotations &&
              quotations.map((quotation) => (
                <tr className="bg-white border-b " key={quotation.id}>
                  <td className="py-4 px-6">{quotation.quotationNumber} </td>
                  <td className="py-4 px-6">{ quotation.amendmentNumber}</td>
                  <td className="py-4 px-6"> <BsArrowLeft /></td>
                  <td className="py-4 px-6"><BsArrowLeft /></td>
                  <td className="py-4 px-6"> <BsArrowLeft /></td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default QuotationList