import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { useGlobalFormik } from '../../utils/custom-hooks/formik-hook/useGlobalFormik'
import Button from '../button/Button'
import { Rating } from '@mui/material'
import { ratingInitialValues, ratingSchema } from '../../utils/validation-schema/auth-schema/authSchema'
import request from '../../utils/request'
import toast from 'react-hot-toast'

const RatingModal = ({ rating, setRating, isRatingModalOpen, setIsRatingModalOpen, id }) => {

    const [errorMap, setErrorMap] = useState({});


    const formik = useGlobalFormik(ratingInitialValues, ratingSchema, (values) => {
        setErrorMap({})
        if (rating > 0) {
            request({
                url: "/V1/customer/feedback",
                method: "POST",
                data: {
                    "bookingId": id,
                    "feedback": values?.feedback,
                    "rating": rating
                }
            }).then((response) => {
                toast.dismiss();
                toast.success(response?.message)
                setIsRatingModalOpen(false)
                setTimeout(()=>{
                    window.location.reload()
                },1000)
                
            }).catch((error) => {
                if (error.response.status === 400) {
                    const errormap = error.response.data.errors.reduce((acc, error) => {
                        acc[error.path] = error.msg;
                        return acc;
                    }, {});
                    setErrorMap(errormap);
                }
                if (error.response.status == 500) {
                    toast.dismiss();
                    toast.error(error.response.data.message);
                }
            })
        } else {
            toast.dismiss();
            toast.error("Please provide rating")
        }
    })

    return (
        <Dialog open={isRatingModalOpen} onClose={() => setIsRatingModalOpen(false)} className="z-50">
            {/* Overlay */}
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40" />

            {/* Centered Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto">
                    {/* Close Button */}
                    <div className='bg-custom-green flex justify-between px-2 py-3'>
                        <h3 className='font-sansation font-regular text-white text-xl'>Rating</h3>
                        <button
                            type="button"
                            onClick={() => setIsRatingModalOpen(false)}
                            className=" top-4 right-4 text-white"
                        >
                            <IoMdClose className="text-2xl" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className='sm:px-5 py-3 px-4 flex flex-col'>
                            <label className='font-sansation font-regular'>You have rated</label>
                            <Rating name="size-large" defaultValue={rating || 0} onChange={(e,value) => {
                                setRating(value)
                            }} size="large" className="mt-2" />
                        </div>
                        <div className="px-4  grid grid-cols-1 sm:px-6">
                            <label htmlFor="" className='font-sansation font-regular'>Comment</label>
                            <textarea
                                rows='7'
                                type="text"
                                placeholder="Enter your feedback"
                                name="feedback"
                                onChange={formik.handleChange}
                                className="border border-slate-300 outline-none w-full font-sansation font-regular text-sm ps-2 mt-2 pt-2"
                            ></textarea>
                            {formik.errors?.feedback && <div className="font-sansation text-red-500 mt-1">{formik.values?.feedback ? "" : formik.errors?.feedback}</div>}
                            <span id="feedback" className="text-red-500">
                                {errorMap['feedback']}
                            </span>
                        </div>
                        <div className='flex justify-center pb-5 mt-3'><Button buttonText="Submit" type='submit' className="px-8" /></div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default RatingModal