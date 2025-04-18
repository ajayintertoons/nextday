import React from 'react';
import CheckoutStepper from '../stepper/TrackingStepper';
import packageImage from "../../images/package_3d 1.png"
import CheckoutStepper3 from '../stepper/TrackingStepper3';


const TrackingCard2 = ({ data, status, onClick }) => {

  const convertDateFormat = (dateToConvert) => {
    // Create a Date object
    const date = new Date(dateToConvert);
    const options = { day: '2-digit', month: 'long' };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  }

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Confirmed':
        return {
          backgroundColor: '#D2FFEC',
          color: '#1BA169',
        };
      case 'InTransit':
        return {
          backgroundColor: '#fff8eb',
          color: '#f39d00',
        };
      case 'Scheduled':
        return {
          backgroundColor:"#eaf5ff",
          color:'#0089ff'
        }
      case 'PickupRequested':
        return {
          backgroundColor:"#e8fffa",
          color:'#00d5a4'
        }
      case 'DeliveryCompleted':
        return{
          backgroundColor:"#eaffef",
          color:'#10ff00'
        }
      case 'DeliveryFailed':
        return {
          backgroundColor:"#ffe8e8",
          color:"#d50000"
        }

      default:
        return {
          backgroundColor: '#FFF2E7',
          color: '#FF8A1E',
        };
    }
  };

  // Extract styles based on status
  const { backgroundColor, color } = getStatusStyles(status);

  return (
    <div className="relative grid grid-cols-1 border rounded-md my-3 pt-4 cursor-pointer hover:shadow-lg " onClick={onClick}>
      <div className=" absolute right-0 top-0 border min-w-1/6 h-8 rounded-tr-md flex justify-center items-center px-2" style={{ backgroundColor, color }}>
        <p className="relative text-center  bold-sansation" >
          {status}
          {data?.isReversePickup && <span className='absolute top-1 border rounded-lg px-1 -left-10 text-red-500'>RP</span>}
        </p>
      </div>

      <div className="grid grid-cols-12">
        <div className="hidden sm:block ml-2">
          <div className=" rounded-full xl:w-3/4 border-2 border-custom-gray flex items-center justify-center">
            <img
              src={packageImage}
              alt="package"
              className="rounded-full p-1 xl:p-2"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-11 pl-2 xl:pl-0">
          <h5 className="bold-sansation">#{data?.Source === "Booking" ? data?.awbNumber : data?.pickupReqNo}</h5>
          <div className="flex gap-5 text-xs font-sansation font-regular text-[#ABABAB]">
            <p>{data?.bookingDate ? convertDateFormat(data?.bookingDate) : data?.scheduledDate ? convertDateFormat(data?.scheduledDate):"-"}</p>
          </div>
          <div className=' mr-10 '>
            <CheckoutStepper3 stepsConfig={data?.statusHistory ? JSON?.parse(data?.statusHistory) : []} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingCard2