import React from 'react'
import ExcursionScreen from '../ExcursionScreen'
import HotelEnquiryScreen from '../HotelEnquiryScreen'
import TransferEnquiryScreen from '../TransferEnquiryScreen'
import QuotationUpdateSubmit from './QuotationUpdateSubmit'

function QuotationUpdate() {
    return (
        <div>
            <div className='mx-auto max-w-screen-xl text-3xl font-semibold mt-8  flex items-center justify-center'>
                <span className='special-text-title'>
                Update Quotation 
                <div className='special-underline'></div>
                </span>
            </div>
            <TransferEnquiryScreen />
            <HotelEnquiryScreen />{" "}
            <ExcursionScreen />
            <QuotationUpdateSubmit />
        </div>
    )
}

export default QuotationUpdate