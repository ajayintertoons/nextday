import React, { useContext } from 'react';
import { myContext } from '../../utils/context_api/context';

const Dropdown = ({ isOpen, onClose ,setIsLoginModalOpen}) => {
    if (!isOpen) return null;
    const {userType,setUserType} = useContext(myContext);
  
    return (
      <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-md">
        <ul className="list-none p-0 m-0">
          <li>
            <p 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={()=>{
                setUserType("franchise")
                setIsLoginModalOpen(true)
                onClose()
              }}
            >
              Franchise Login
            </p>
          </li>
          <li>
            <p
             
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={()=>{
                setUserType("customer")
                setIsLoginModalOpen(true)
                onClose()
                
              }}
            >
              Customer Login
            </p>
          </li>
        </ul>
      </div>
    );
  };

   export default  Dropdown;