

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-black p-5 rounded-lg shadow-lg text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          <FiX size={30} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Welcome</h2>
        <p className="mb-4 text-white">Choose any one to continue <b>Loverse</b></p>
        {/* List your auth buttons here */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-2 w-full">Continue with Facebook</button>
        <button className="bg-red-600 text-white py-2 px-4 rounded-lg mb-2 w-full">Continue with Google</button>
        <button className="bg-black text-white py-2 px-4 rounded-lg mb-2 w-full">Continue with Apple</button>
      </div>
    </div>
  );
};

export default Modal;
