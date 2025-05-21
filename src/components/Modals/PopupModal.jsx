import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React from 'react'
import { IoMdClose } from 'react-icons/io';

const PopupModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="z-[1000]">
            {/* Overlay */}
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[1000] " />

            {/* Top Centered Modal */}
            <div className="fixed top-0 left-0 right-0 flex justify-center p-5 z-[1000]">
                <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-auto ">
                    {/* Header */}
                    <div className='bg-custom-green flex justify-between px-4 py-3 rounded-tl-md rounded-tr-md'>
                        <h3 className='font-sansation font-regular text-white text-xl'>{title}</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white"
                        >
                            <IoMdClose className="text-2xl" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className='p-4 text-start'>
                        <p className='font-sansation font-regular text-lg'>{message}</p>
                    </div>

                    {/* Footer */}
                    <div className='flex justify-end space-x-4 pb-5 mt-3 px-3'>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="px-4 py-2 bg-custom-green text-white rounded-lg"
                        >
                            Continue
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default PopupModal;
