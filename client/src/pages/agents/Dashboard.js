import React from "react";
import ExcursionScreen from "./ExcursionScreen";
import HotelEnquiryScreen from "./HotelEnquiryScreen";
import QuotationSubmit from "./QuotationSubmit";
import TransferEnquiryScreen from "./TransferEnquiryScreen";

function Dashboard() {
  return (
    <div>
      <TransferEnquiryScreen />
      <HotelEnquiryScreen />{" "}
      <ExcursionScreen />
      <QuotationSubmit />
    </div>
  );
}

export default Dashboard;
