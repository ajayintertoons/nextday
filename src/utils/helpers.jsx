import toast from 'react-hot-toast';
import request from '../utils/request';

 export const fetchAddressList = (setAddressList)=>{
    request({
      url:"V1/customer/address",
      method:"get",
    }).then((response)=>{
      setAddressList(response?.data)
    }).catch((err)=>{
      if (err.response.status == 500) {
        toast.dismiss();
        toast.error(err.response.data.message)
      }
    })
  }

export const convertToTimeInputFormat = (timestamp)=> {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get hours and minutes in 24-hour format
  const hours = date.getUTCHours().toString().padStart(2, '0'); // Ensures two digits
  const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Ensures two digits

  // Return the time in HH:MM format
  return `${hours}:${minutes}`;
}

// export const convertToTimeInputFormat = (timestamp) => {
//   const date = new Date(timestamp);

//   // Use local time instead of UTC
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');

//   return `${hours}:${minutes}`;
// }

export const convertToDateInputFormat = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');  // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, '0');  // Ensure day has leading zero if needed
  return `${year}-${month}-${day}`;  // Format as yyyy-mm-dd
}

export const convertDateFormat = (inputDate, targetDate = null, targetTime = null) =>{
  // If a specific date is provided (e.g., '2025-03-31') and time (e.g., '11:24'), adjust the date.
  const date = targetDate ? new Date(targetDate) : new Date(inputDate);

  // If specific time is provided, adjust the time as well
  if (targetTime) {
    const [hours, minutes] = targetTime.split(':').map(num => parseInt(num, 10));
    date.setHours(hours, minutes);
  }

  // Format the date in "YYYY-MM-DD HH:mm"
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  
  return formattedDate;
}

export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().slice(0, 16); // Format to 'YYYY-MM-DDTHH:mm'
};
