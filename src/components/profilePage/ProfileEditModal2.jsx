import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React, { useContext, useRef, useState } from 'react'
import CustomInputField from '../input-field/CustomInput'
import { useGlobalFormik } from "../../utils/custom-hooks/formik-hook/useGlobalFormik";
import { profileEditSchema, profileEditSchema2 } from '../../utils/validation-schema/auth-schema/authSchema';
import { FaTimes } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Button from '../button/Button';
import { MdUpload } from "react-icons/md";
import request from '../../utils/request'
import toast from 'react-hot-toast';
import { myContext } from '../../utils/context_api/context';
// import PROFILE_PIC from '../../images/'


const ProfileEditModal2 = ({ isProfileEditModalOpen, setIsProfileEditModalOpen, profileData }) => {

    const profileEditInitialValues = {
        email: profileData ? profileData?.emailId : "",
        mobile: profileData ? profileData?.mobileNumber : '',
        fullName: profileData ? profileData?.fullName : "",
        address: profileData ? profileData?.contactAddress : "",
    }

    const {userType,userData,setUserData} = useContext(myContext)

    const formik = useGlobalFormik(profileEditInitialValues, profileEditSchema2, (values) => {
        request({
            url: "V1/franchise/me",
            method: "PUT",
            data: {
                "fullname": values?.fullName,
                "mobileNumber": values?.mobile,
                "email": values?.email,
                "address": values?.address,
            }
        }).then((response) => {
            toast.dismiss();
            toast.success("successfully updated")
            localStorage.setItem('userData',JSON.stringify({
                ...userData,
                fullName: values?.fullName,
                mobileNumber: values?.mobile,
                emailId: values?.email,
                contactAddress: values?.address,
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
                                title="Email"
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
                                title="Address"
                                type="text"
                                placeholder="Enter your address"
                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.address}
                                touched={formik.touched.address}
                            />
                        </div>
                        <div className='flex justify-center pb-5'><Button buttonText="Save" type='submit' className="px-8" /></div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default ProfileEditModal2