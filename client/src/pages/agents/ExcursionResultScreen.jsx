import React, { Fragment } from 'react'
import { SlPeople, SlPaperPlane, SlLocationPin } from "react-icons/sl";
import { RiCarWashingLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

function ExcursionResultScreen({ array }) {
  return (
    <Fragment>
      <div className="mt-10 p-5 bg-boxColor text-darkColor">
        <div className="">
          {array.map((item) => (


            <div className='grid grid-cols-3 gap-10'>
              <div className="flex items-center mt-5 111">
                <span className="text-xl font-bold">
                  <SlPeople />
                </span>
                <span className="text-lg font-bold ml-2">
                  Number of Peoples :
                </span>
                <span className="text-lg font-bold ml-2">{item.people} </span>
              </div>
              <div className="flex items-center mt-5  222">
                <span className="text-xl font-bold">
                  <SlPaperPlane />
                </span>
                <span className="text-lg font-bold ml-2">Excursion : </span>
                <span className="text-lg font-bold ml-2">{item.excursion}</span>
              </div>
              <div className="flex items-center mt-5  333">
                <span className="text-xl font-bold">
                  <SlLocationPin />
                </span>
                <span className="text-lg font-bold ml-2">Price : </span>
                <span className="text-lg font-bold ml-2"> 555</span>
              </div>
            </div>
          ))}

          {/* <div className="second">
          <div className="flex items-center mt-5">
            <span className="text-xl font-bold">
              <RiCarWashingLine />
            </span>
            <span className="text-lg font-bold ml-2">Type of travel : </span>
            <span className="text-lg font-bold ml-2"> {transferStatus}</span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-xl font-bold">
              <TbTruckReturn />
            </span>
            <span className="text-lg font-bold ml-2">Return Needed : </span>
            <span className="text-lg font-bold ml-2">{returnStatus=== true ? 'return needed' : 'no return needed'} </span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-xl font-bold">
              <BsCashCoin />
            </span>
            <span className="text-lg font-bold ml-2">Price(single) : </span>
            <span className="text-lg font-bold ml-2">{transferEnquiry?.transferData?.amountPerPerson ? transferEnquiry?.transferData?.amountPerPerson : ''}</span>
          </div>
        </div> */}


          {/* <div className="thrid">
        <div className="flex items-center mt-5">
            <span className="text-xl font-bold">
              <BsCashCoin />
            </span>
            <span className="text-lg font-bold ml-2">Price(Total) : </span>
            <span className="text-lg font-bold ml-2">{transferEnquiry?.transferData?.totalamount ? transferEnquiry?.transferData?.totalamount : ''}</span>
          </div>
        </div> */}


        </div>
      </div>
    </Fragment>
  )
}

export default ExcursionResultScreen