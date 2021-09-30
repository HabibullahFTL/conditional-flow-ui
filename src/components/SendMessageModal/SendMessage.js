import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import CustomModal from '../CustomModal/CustomModal';

const SendMessage = ({ isOpen }) => {
    return (
        <CustomModal isOpen={isOpen}>
            <div className="bg-green-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <h1 className="text-xl font-bold">Send Message</h1>
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-bold">1 Multimedia Message</h3>
                    <h3 className="text-lg font-bold">~$0.02</h3>
                </div>
                <div className="mb-4">
                    <label className="cursor-pointer" htmlFor="upload">
                        <div className="flex justify-center items-center flex-col  h-40 w-full border-2 border-dashed rounded-lg">
                            <FaCloudUploadAlt className="text-7xl" />
                            <p className="px-6 text-sm">Choose an image</p>
                            <p className="px-6 text-sm">JPG, PNG, GIF, Max</p>
                            <p className="px-6 text-sm">10 MB</p>
                        </div>
                        <input
                            className="hidden"
                            id="upload"
                            type="file"
                            placeholder="Please enter your upload here..."
                            name="upload"
                            accept="image/*"
                        // onChange={handleFileUpload}
                        />
                    </label>

                </div>
                <div className="mb-4">
                    <textarea className="w-full block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" rows="4"></textarea>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                    onClick={() => window.location.reload()}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Send Message
                </button>
            </div>
        </CustomModal>
    );
};

export default SendMessage;