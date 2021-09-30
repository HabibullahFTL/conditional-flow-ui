import React from 'react';
import CustomModal from '../CustomModal/CustomModal';

const AbandomModal = ({ isOpen }) => {
    return (
        <CustomModal isOpen={isOpen}>
            <div className="bg-red-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <h1 className="text-xl font-bold">Run Abandon Checkol</h1>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                    onClick={() => window.location.reload()}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Ok
                </button>
            </div>
        </CustomModal>
    );
};

export default AbandomModal;