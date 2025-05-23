import React, { useContext, useEffect, useState } from 'react'
import Button from "../components/button/Button";
import { FaRegEdit } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import SearchInput from '../components/input-field/SearchInput';
import { FiSearch } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import request from '../utils/request'
import ProfileEditModal from '../components/profilePage/ProfileEditModal';
import EditModal from '../components/create-pickup_page/create-pickup_page_stage2/EditModal';
import { MdDelete } from 'react-icons/md';
import CreateModal from '../components/create-pickup_page/create-pickup_page_stage2/CreateModal';
import toast from 'react-hot-toast';
import { fetchAddressList } from '../utils/helpers';
import { myContext } from '../utils/context_api/context';
import PopupModal from '../components/Modals/PopupModal';
import Breadcrub from '../components/button/Breadcrub';
import PROFILE_PIC from '../images/dummyUser.png'
import ProfileEditModal2 from '../components/profilePage/ProfileEditModal2';
import { CUSTOMER_PROFILE } from '../../config';
import { IoMdClose } from "react-icons/io";


const Profile = () => {

  const [profileData, setProfileData] = useState({});
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);
  const [isProfileEditMoalOpen, setIsProfileEditModalOpen] = useState(false);
  const [isAddressEditModalOpen, setIsAddressEditModalOpen] = useState(false);
  const [addressData, setAddressData] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const { addressList, setAddressList, setUserData } = useContext(myContext);

  useEffect(() => {
    request({
      url: `V1/customer/me`,
      method: 'get',
    })
      .then((response) => {
        if (response.data.length > 0) {
          setProfileData(response.data[0])
          setUserData({ ...userData, logoPath: response.data[0]?.logoPath.replace(CUSTOMER_PROFILE, "").trim() })
          localStorage.setItem('userData', JSON.stringify({ ...userData, logoPath: response.data[0]?.logoPath.replace(CUSTOMER_PROFILE, "").trim() }))
        }
      })
      .catch(function (err) {
        if (err.response?.status == 500) {
          toast.dismiss();
          toast.error(err.response.data.message)
        }
      });
  }, [])

  useEffect(() => {
    fetchAddressList(setAddressList);
  }, [])

  const handleDeleteClick = (address) => {
    setSelectedAddressId(address);
    setIsConfirmModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedAddressId) {
      request({
        url: `V1/customer/address/${selectedAddressId}`,
        method: "delete"
      }).then((response) => {
        toast.dismiss();
        toast.success(response?.message)
        fetchAddressList(setAddressList);
      }).catch(err => {
        if (err.response?.status === 500) {
          toast.dismiss();
          toast.error(err.response.data.message)
        }
      })
      setIsConfirmModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsConfirmModalOpen(false);
    setSelectedAddressId(null); // Reset the selected address when modal closes
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <div className="relative">
        <Breadcrub pageTitle="My Profile" />
      </div>
      <PopupModal isOpen={isConfirmModalOpen}
        onClose={handleModalClose}
        onConfirm={handleDeleteConfirm}
        title="Delete Address"
        message={`Are you sure you want to delete ?`} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-custom-light-blue p-2 md:p-5 rounded-md mb-5'>
        <div className='bg-white p-2 md:p-5 rounded-lg'>
          <div className='flex justify-between items-center m-3 mb-5'>
            <h2 className='text-2xl bold-sansation'>Personal details</h2>
            <Button icon={<FaRegEdit />} onClick={() => setIsProfileEditModalOpen(true)} />
          </div>
          <div className='m-3 p-5 bg-custom-light-blue rounded-lg'>
            <div className='flex items-center'>
              <img src={profileData.logoPath ? profileData?.logoPath : PROFILE_PIC} className='shadow-slate-300 shadow-lg rounded-full border h-[55px] object-cover' alt="" width="55px" height="55px" />
              <div className='ms-2'>
                <h3 className='font-sansation font-regular'>{profileData?.fullName}</h3>
                <h6 className='text-[0.8rem] text-[#959494]'>{profileData?.customerCode}</h6>
              </div>
            </div>
          </div>
          <div className='grid xl:grid-cols-2 grid-cols-1 gap-3 p-3 my-3'>
            <div className='flex items-center'>
              <div className='p-3 rounded-full bg-custom-light-blue'>
                <FaPhone className='text-custom-green' />
              </div>
              <div className='ms-3 py-3'>
                <h3 className=' text-gray-500 bold-sansation text-[0.8rem]'>Phone Number :</h3>
                <h6 className='text-sm'>{profileData?.mobileNumber}</h6>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='p-3 rounded-full bg-custom-light-blue'>
                <IoIosDocument className='text-custom-green' />
              </div>
              <div className='ms-3 py-3'>
                <h3 className=' text-gray-500 bold-sansation text-[0.8rem]'>GST Number</h3>
                <h6 className='text-sm'>{profileData?.gstNumber}</h6>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='p-3 rounded-full bg-custom-light-blue'>
                <IoMdMail className='text-custom-green' />
              </div>
              <div className='ms-3 py-3'>
                <h3 className=' text-gray-500 bold-sansation text-[0.8rem]'>Email :</h3>
                <h6 className='text-sm'>{ profileData?.email}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white p-2 md:p-5 rounded-lg'>
          <div className='flex justify-between items-center m-3'>
            <h2 className='text-2xl bold-sansation'>Add Address</h2>
            <Button buttonText="Add New" icon={<GoPlus />} onClick={() => setIsAddAddressModalOpen(true)} />
          </div>
          {/* <div className='m-3'>
            <SearchInput className='w-full py-1' iconSize={25} placeholder='Search Address' onChange={handleSearch} Icon={CiSearch} />
          </div> */}
          <div className='m-3 relative w-fit'>
            <SearchInput
              className='w-full py-1 sm:w-full' // Ensure space for icon
              iconSize={25}
              placeholder='Search Address'
              onChange={handleSearch}
              value={searchQuery}
              Icon={FiSearch}
            />
            {searchQuery && (
              <IoMdClose
                className='absolute top-1/2 right-8 transform -translate-y-1/2 text-lg cursor-pointer'
                onClick={() => handleSearch({ target: { value: '' } })}
                title="Clear"
              />
            )}
          </div>
          <div className=' px-1 md:px-3' style={{ height: '320px', minWidth: "250px", overflowY: 'auto' ,zIndex:1 }}>
            {addressList.filter(address => address?.addressLabel?.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
              <div key={index} className='flex items-center border-b-2 bg-custom-light-blue border-gray-300 py-3 pe-3 relative' style={{ minWidth: "280px"}}>
                <div className='p-4 ms-3 rounded-full bg-white shadow-lg'>
                  <FaLocationDot className='text-2xl text-custom-green' />
                </div>
                <div className='ms-3 py-3 px-2' style={{ minWidth: "180px" }}>
                  <h3 className=' bold-sansation'>{item.addressLabel}</h3>
                  <p className='font-sansation font-regular text-sm' style={{ minWidth: "180px" }}>{item?.addressLine1 + ',' + item?.addressLine2 + ',' + item?.cityName + ',' + item?.stateName + ',' + item?.countryName}</p>
                  <span className='absolute top-1 right-1' onClick={() => { setIsAddressEditModalOpen(true); setAddressData(item) }}><TbEdit className='text-xl text-custom-green cursor-pointer' title="edit" /></span>
                  <span className='absolute bottom-1 right-1' onClick={() => handleDeleteClick(item?.addressId)}><MdDelete className='text-xl text-red-500 cursor-pointer' title='delete' /></span>
                </div>
              </div>
            ))
            }
            {addressList.filter(address => address?.addressLabel?.toLowerCase().includes(searchQuery.toLowerCase())).length <= 0 && <div className='flex items-center justify-center' style={{ minHeight: "280px" }}> <p>No Address Found</p> </div>}
          </div>
        </div>
        {(isProfileEditMoalOpen) && <ProfileEditModal setIsProfileEditModalOpen={setIsProfileEditModalOpen} isProfileEditModalOpen={isProfileEditMoalOpen} profileData={profileData} />}
        {isAddressEditModalOpen && <EditModal isOpen={isAddressEditModalOpen} fetchAddressList={fetchAddressList} setEditModalOpen={setIsAddressEditModalOpen} addressData={addressData} />}
        {isAddAddressModalOpen && <CreateModal isOpen={isAddAddressModalOpen} onClose={setIsAddAddressModalOpen} fetchAddressList={fetchAddressList} />}
      </div>
    </div>
  )
}

export default Profile
