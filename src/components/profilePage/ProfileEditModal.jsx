import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useContext, useRef, useState } from 'react'
import CustomInputField from '../input-field/CustomInput'
import { useGlobalFormik } from "../../utils/custom-hooks/formik-hook/useGlobalFormik";
import { profileEditSchema } from '../../utils/validation-schema/auth-schema/authSchema';
import { FaTimes } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Button from '../button/Button';
import { MdUpload } from "react-icons/md";
import request from '../../utils/request'
import toast from 'react-hot-toast';
import { myContext } from '../../utils/context_api/context';


const ProfileEditModal = ({ isProfileEditModalOpen, setIsProfileEditModalOpen, profileData }) => {

    const profileEditInitialValues = {
        email: profileData ? profileData?.email : "",
        mobile: profileData ? profileData?.mobileNumber : '',
        fullName: profileData ? profileData?.fullName : "",
        gstNumber: profileData ? profileData?.gstNumber : "",
        logoPath: profileData ? profileData?.logoPath : ""
    }

    const [imageSrc, setImageSrc] = useState(`${profileData?.logoPath ? profileData?.logoPath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-cXirXUc9r_ne68ckbJgst-voMaicaYKf48LHzFMc-8aL332kavkoZtOCgN9QkWF_c0&usqp=CAU'}`); // Default dummy image
    const [fileName, setFileName] = useState('Choose File');
    const fileInputRef = useRef(null);
    const { userType, userData, setUserData } = useContext(myContext)

    const formik = useGlobalFormik(profileEditInitialValues, profileEditSchema, (values) => {
        request({
            url: "V1/customer/me",
            method: "PUT",
            data: {
                "fullname": values?.fullName,
                "mobileNumber": values?.mobile,
                "email": values?.email,
                "gstNumber": values?.gstNumber,
                "logoPath": imageSrc ? imageSrc : ''
            }
        }).then((response) => {
            toast.dismiss();
            toast.success("successfully updated")
            localStorage.setItem('userData',JSON.stringify({
                ...userData,
                logoPath: imageSrc ? imageSrc : '',
                fullName: values?.fullName,
                mobileNumber: values?.mobile,
                email: values?.email,
                gstNumber: values?.gstNumber,
            }))
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        }).catch(function (err) {
            if (err.response?.status == 500) {
                toast.dismiss();
                toast.error(err.response.data.message)
            }
        });
    })

    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result.split(',')[1];
                    setImageSrc(reader.result);
                    setFileName(file.name);
                };
                reader.readAsDataURL(file);
            } else {
                toast.dismiss();
                toast.error("Please select an image")
            }
        } else {
            setImageSrc('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-cXirXUc9r_ne68ckbJgst-voMaicaYKf48LHzFMc-8aL332kavkoZtOCgN9QkWF_c0&usqp=CAU'); // Dummy image URL
            setFileName('Choose File');
        }
    };

    // Trigger file input click
    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Dialog open={isProfileEditModalOpen} onClose={() => setIsProfileEditModalOpen(false)} className="relative z-50">
            {/* Overlay */}
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40" />

            {/* Centered Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto">
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setIsProfileEditModalOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                        <IoMdClose className="text-2xl" />
                    </button>

                    {/* Modal Content */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className="px-4 py-5 grid grid-cols-1  gap-2 md:grid-cols-2 sm:p-6">
                            <CustomInputField
                                title="Name"
                                type="text"
                                placeholder="Enter your name"
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.fullName}
                                touched={formik.touched.fullName}
                            />
                            <CustomInputField
                                title="email"
                                type="email"
                                placeholder="Enter your email address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.email}
                                touched={formik.touched.email}
                            />
                            <CustomInputField
                                title="Mobile"
                                type="mobile"
                                placeholder="Enter your mobile number"
                                name="mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.mobile}
                                touched={formik.touched.mobile}
                                mobile={true}
                            />
                            <CustomInputField
                                title="GST Number"
                                type="text"
                                placeholder="Enter your gst number"
                                name="gstNumber"
                                value={formik.values.gstNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.gstNumber}
                                touched={formik.touched.gstNumber}
                            />
                            <div className="relative cursor-pointer pt-3 overflow-hidden">
                                <label htmlFor="" className='font-sansation font-regular'>Profile Pic</label>
                                <div className="flex items-center border border-gray-300 rounded-lg mt-2 h-[47px]">
                                    <div className=' relative overflow-hidden' style={{ minWidth: '60px', maxWidth: "60px", minHeight: "45px", maxHeight: "45px" }}>
                                        <div className='aspect-w-4 aspect-h-3 overflow-hidden' style={{ minWidth: '60px', maxWidth: "60px", minHeight: "45px", maxHeight: "45px" }}>
                                            <img src={imageSrc} className='object-cover' alt="Profile" style={{ minWidth: '60px', maxWidth: "60px", minHeight: "45px", maxHeight: "45px" }} />
                                        </div>
                                    </div>
                                    <div onClick={handleDivClick} className='flex h-full'>
                                        <div className='bg-black flex items-center px-1'>
                                            <MdUpload className='text-2xl text-white' />
                                        </div>
                                        <div className='flex items-center '>
                                            <p className="text-gray-700 ps-2 truncate whitespace-nowrap ">{fileName}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    // accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center pb-5'><Button buttonText="Save" type='submit' className="px-8" /></div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default ProfileEditModal