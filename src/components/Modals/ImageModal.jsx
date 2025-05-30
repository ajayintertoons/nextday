import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { IMG_URL } from '../../../config'


const ImageModal = ({ isImageModalOpen, setIsImageModalOpen, path }) => {

    return (
        <Dialog open={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} className="z-50">
            {/* Overlay */}
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40" />

            {/* Centered Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto">
                    <div className='bg-custom-green flex justify-between px-2 py-3'>
                        <h3 className='font-sansation font-regular text-white text-xl'>POD IMAGE</h3>
                        <button
                            type="button"
                            onClick={() => setIsImageModalOpen(false)}
                            className=" top-4 right-4 text-white"
                        >
                            <IoMdClose className="text-2xl" />
                        </button>
                    </div>
                    
                    <div className='m-3 flex justify-center'>
                        <img src={`${IMG_URL}${path}`} alt="" />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default ImageModal;