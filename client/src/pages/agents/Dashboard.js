import React from "react";
import ExcursionScreen from "./ExcursionScreen";
import HotelEnquiryScreen from "./HotelEnquiryScreen";
import TransferEnquiryScreen from "./TransferEnquiryScreen";

function Dashboard() {
  return (
    <div>
      <TransferEnquiryScreen />
      <HotelEnquiryScreen />{" "}
      <ExcursionScreen />
    </div>
  );
}

export default Dashboard;
