import React, { Fragment } from "react";
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

function TransferResultScreen({
  transferEnquiry,
}) {
  // const { transferEnquiry } = useSelector((state) => state.transfer);
  console.log(transferEnquiry);
  return (
    <Fragment>
      <div className="mt-10 p-5 bg-white text-darkColor shadow-md">
        <div className="grid grid-cols-3 gap-10">
          <div className="first">
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <SlPeople />
              </span>
              <span className="text-lg font-medium ml-2">
                Number of Peoples :
              </span>
              <span className="text-lg font-medium ml-2">
                {transferEnquiry?.transferEnquiry?.people
                  ? transferEnquiry?.transferEnquiry?.people
                  : ""}
              </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <SlPaperPlane />
              </span>
              <span className="text-lg font-medium ml-2">Airport : </span>
              <span className="text-lg font-medium ml-2">
                {transferEnquiry?.transferData?.placeName
                  ? transferEnquiry?.transferData?.airportName
                  : ""}{" "}
              </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <SlLocationPin />
              </span>
              <span className="text-lg font-medium ml-2">Destination : </span>
              <span className="text-lg font-medium ml-2">
                {" "}
                {transferEnquiry?.transferData?.placeName
                  ? transferEnquiry?.transferData?.placeName
                  : ""}
              </span>
            </div>
          </div>
          <div className="second">
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <RiCarWashingLine />
              </span>
              <span className="text-lg font-medium ml-2">
                Type of travel :{" "}
              </span>
              <span className="text-lg font-medium ml-2">
                {" "}
                {transferEnquiry?.transferEnquiry?.transferStatus
                  ? transferEnquiry?.transferEnquiry?.transferStatus
                  : ""}
              </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <TbTruckReturn />
              </span>
              <span className="text-lg font-medium ml-2">Return Needed : </span>
              <span className="text-lg font-medium ml-2">
                {transferEnquiry?.transferEnquiry?.returnStatus
                  ? transferEnquiry?.transferEnquiry?.returnStatus === true
                    ? "return needed"
                    : "no return needed"
                  : "no return needed"}{" "}
              </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-medium ml-2">Price(single) : </span>
              <span className="text-lg font-medium ml-2">
                {transferEnquiry?.transferData?.amountPerPerson
                  ? transferEnquiry?.transferData?.amountPerPerson
                  : ""}
              </span>
            </div>
          </div>
          <div className="thrid">
            <div className="flex items-center mt-5">
              <span className="text-xl font-medium">
                <BsCashCoin />
              </span>
              <span className="text-lg font-medium ml-2">Price(Total) : </span>
              <span className="text-lg font-medium ml-2">
                {transferEnquiry?.transferData?.totalamount
                  ? transferEnquiry?.transferData?.totalamount
                  : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TransferResultScreen;
