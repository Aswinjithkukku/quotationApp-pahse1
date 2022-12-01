import React from 'react'
import axios from '../../axios'
import { useSelector } from 'react-redux'



function QuotationSubmit() {

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
    const quotation = await axios.post('/quotation/create', {
      transferData,
      hoteldata,
      excursionData
    } )
    console.log(quotation.data);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <div className="mt-7  border-2  shadow-md py-7 px-5 flex justify-center items-center">
        <button className='bg-darkColor text-white px-10 py-2 shadow-md' onClick={() => prepareQuotation()}>Prepare Quotation</button>
      </div>
    </div>
  )
}

export default QuotationSubmit