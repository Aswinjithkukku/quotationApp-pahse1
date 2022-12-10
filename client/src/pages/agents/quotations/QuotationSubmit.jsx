import React from 'react'
import axios from '../../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { clearExcursionData } from '../../../redux/slices/excursionSlice' 
import { clearHotelData } from '../../../redux/slices/hotelSlice' 
import { clearTransferData } from '../../../redux/slices/transferSlice' 
import { Link, useNavigate } from 'react-router-dom'



function QuotationSubmit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { transferEnquiry } = useSelector( state => state.transfer )
  const { hotelData, filteredData, price } = useSelector( state => state.hotel )
  const { selectedExcursions, people } = useSelector( state => state.excursion )

  const transferData = {
    transferfrom: transferEnquiry.transferData?.airportName,
    transferTo: transferEnquiry.transferData?.placeName,
    transferStatus: transferEnquiry.transferEnquiry?.transferStatus,
    returnStatus: transferEnquiry.transferEnquiry?.returnStatus,
    people:transferEnquiry.transferEnquiry?.people,
    totalamount: transferEnquiry.transferData?.totalamount,
    amountPerPerson: transferEnquiry.transferData?.amountPerPerson
  }
  const hoteldata = {
    hotelName: hotelData?.hotelName,
    place: hotelData?.placeName,
    hotelpeople: hotelData?.people,
    roomType: filteredData,
    nights: hotelData?.nights,
    hoteltotalamount:price?.totalSum,
    hotelamountPerPerson: price?.sumPerPerson
  }

  const excursionData = {
    excursionPeople: people,
    excursions: selectedExcursions,
  }

const prepareQuotation = async() => {
  try {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const quotation = await axios.post('/quotation/create', {
      transferData,
      hoteldata,
      excursionData
    }, config ) 
    navigate('/quotation')
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <div className="mt-7  border-2  shadow-md py-7 px-5 flex justify-center items-center">
        <Link to='/quotation'>
        <button className='bg-darkColor text-white px-10 py-2 shadow-md' 
        onClick={async () => {
          // await prepareQuotation()
          dispatch(clearExcursionData())
          dispatch(clearHotelData())
          dispatch(clearTransferData())
        }}
        >Prepare Quotation</button>
        </Link>
      </div>
    </div>
  )
}

export default QuotationSubmit