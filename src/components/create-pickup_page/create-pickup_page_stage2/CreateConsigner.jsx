// import React, { useContext } from "react";
// import { useState } from "react";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import { myContext } from "../../../utils/context_api/context";
// import CustomInputField from "../../input-field/CustomInput";
// import Button2 from "../../button/Button2";
// import Button from "../../button/Button";
// import { AiFillHome } from "react-icons/ai";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import mapImage from "../../../images/mapimage2.png";

// const CreateConsigner = () => {
//   const { consignerModalOpen, setConsignerModalOpen } = useContext(myContext);
//   const [activeIndex, setActiveIndex] = useState(-1); // for the address selection

//   // Function to handle which address is selected
//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <Dialog
//         open={consignerModalOpen}
//         onClose={setConsignerModalOpen}
//         className="relative z-10"
//       >
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//         />

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
//           <div className="flex min-h-full  items-end justify-center  text-center sm:items-center sm:p-0 ">
//             <DialogPanel
//               transition
//               className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full   sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:max-w-2xl lg:sm:max-w-[50rem]"
//             >
//               <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pt-8  sm:pb-8 ">
//                 <h5 className="text-xl font-sansation font-regular">
//                   Consigner Details
//                 </h5>
//                 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
//                   <div>
//                     <CustomInputField
//                       title="Name"
//                       type="text"
//                       placeholder="Name"
//                       //   value={}
//                       //   onChange={}
//                     />
//                     <CustomInputField
//                       title="Phone Number"
//                       type="text"
//                       placeholder="Phone number"
//                       //   value={}
//                       //   onChange={}
//                     />

//                     <div className="mt-3">
//                       <h5 className="bold-sansation">Select Address Type</h5>
//                       <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 py-2 gap-2 font-sansation font-regular">
//                         <div
//                           className={`flex items-center justify-center border rounded-md gap-1 p-1 cursor-pointer ${
//                             activeIndex === 0
//                               ? "text-custom-light-green"
//                               : "text-[#7C7C7C]"
//                           }`}
//                           onClick={() => handleClick(0)}
//                         >
//                           <AiFillHome className="text-xl" />
//                           <p>Home</p>
//                         </div>

//                         <div
//                           className={`flex items-center justify-center border rounded-md gap-1 p-1 cursor-pointer ${
//                             activeIndex === 1
//                               ? "text-custom-light-green"
//                               : "text-[#7C7C7C]"
//                           }`}
//                           onClick={() => handleClick(1)}
//                         >
//                           <HiOutlineBuildingOffice2 className="text-xl" />
//                           <p>Office</p>
//                         </div>

//                         <div
//                           className={`lg:col-span-2 flex items-center justify-center border rounded-md gap-1 p-1 cursor-pointer ${
//                             activeIndex === 2
//                               ? "text-custom-light-green"
//                               : "text-[#7C7C7C]"
//                           }`}
//                           onClick={() => handleClick(2)}
//                         >
//                           <AiFillHome className="text-xl" />
//                           <p>Friend's House</p>
//                         </div>
//                       </div>

//                       <CustomInputField
//                         title="Location"
//                         type="text"
//                         placeholder="Location"
//                         //   value={}
//                         //   onChange={}
//                       />

//                       <div className="relative">
//                         <img
//                           src={mapImage}
//                           alt="map image"
//                           className="w-full h-auto"
//                         />
//                         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
//                           <div className="bg-[#E2E2E2] flex items-center justify-center border rounded-md w-full max-w-lg h-[3rem] sm:h-[4rem]">
//                             <input
//                               type="text"
//                               placeholder="Location"
//                               className="outline-none p-2 border-none rounded-md bg-custom-white  w-[17rem] max-w-lg h-[2rem]  sm:h-[2rem]"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* xxxxxxxxxxxxxxxxxx */}
//                   <div>
//                     <CustomInputField
//                       title="Pincode"
//                       type="text"
//                       placeholder="Pincode"
//                       //   value={}
//                       //   onChange={}
//                     />

//                     <CustomInputField
//                       title="Email ID"
//                       type="email"
//                       placeholder="Email Id"
//                       //   value={}
//                       //   onChange={}
//                     />
//                     <CustomInputField
//                       title="Address"
//                       type="text"
//                       placeholder="Address"
//                       //   value={}
//                       //   onChange={}
//                       rows={3}
//                     />

//                     <h5 className="font-sansation font-regular text-lg mt-5">
//                       Possible Receivers
//                     </h5>
//                     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-2">
//                       <CustomInputField
//                         title="Name & Phone Number"
//                         type="text"
//                         placeholder="Enter Name"
//                         //   value={}
//                         //   onChange={}
//                       />

//                       <div className="mt-6">
//                         <CustomInputField
//                           type="text"
//                           placeholder="Enter Phone number"
//                           //   value={}
//                           //   onChange={}
//                         />
//                       </div>
//                     </div>
//                     <div className=" flex justify-end mt-4">
//                       <Button2
//                         buttonText="Add More"
//                         className="w-[7rem] h-[2rem] text-custom-green border-custom-green hover:border-custom-gray hover:bg-[#CAFFE5]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* xxxxxxxxxxxxxxxxxx */}
//                 <div className=" flex justify-center mt-5">
//                   <Button buttonText="Save" className="w-1/4 mt-5 " />
//                 </div>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default CreateConsigner;


// this modal is for creating and updating consigner details.

import React,{useContext} from 'react';
import { myContext } from '../../../utils/context_api/context';
import CreateModal from './CreateModal';

const CreateConsigner = ({fetchAddressList}) => {
    const { consignerModalOpen, setConsignerModalOpen } = useContext(myContext);
  return (
    <CreateModal
    heading="Consigner Details"
    isOpen={consignerModalOpen}
    onClose={setConsignerModalOpen}
    fetchAddressList={fetchAddressList}
  />
  )
}

export default CreateConsigner