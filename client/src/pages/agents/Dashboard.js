import React from "react";
import ExcursionScreen from "./ExcursionScreen";
import HotelEnquiryScreen from "./HotelEnquiryScreen";
import QuotationSubmit from "./quotations/QuotationSubmit";
import TransferEnquiryScreen from "./TransferEnquiryScreen";

function Dashboard() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl text-3xl font-semibold mt-8  flex items-center justify-center">
        <span className="special-text-title">
          Quotation
          <div className="special-underline"></div>
        </span>
      </div>
      <TransferEnquiryScreen />
      <HotelEnquiryScreen />
      <ExcursionScreen />
      <QuotationSubmit />
    </div>
  );
}

export default Dashboard;
