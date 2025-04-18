import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../utils/context_api/context';

function Breadcrub({ pageTitle, parentLink = '', child = false, setIsVisible, isVisible }) {
    const {userType} = useContext(myContext)
    return (
        <div className="pagetitle mb-2">
            <div className="flex justify-between items-center ">
                <h1 className="bold-sansation font-regular text-lg">{pageTitle}</h1>
                {child && (
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className="text-blue-500 hover:underline"
                    >
                     Toggle Visibility
                    </button>
                )}
            </div>
            <nav aria-label="breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-400 font-sansation font-regular text-lg">
                    <li>
                        <Link to={`/home/${userType.toLowerCase()}/dashboard`} className="text-gray-400 text-md font-sansation ">
                            Dashboard
                        </Link>
                    </li>
                    {parentLink && (
                        <>
                            <li className="flex items-center text-lg text-gray-400 ">
                                <span className="font-medium text-gray-400 text-md ms-1">/</span>
                                <span>{parentLink}</span>
                            </li>
                        </>
                    )}
                    <li className="flex items-center">
                        <span className="font-medium text-gray-400 text-md ms-1">/</span>
                        <span className="font-medium text-gray-400 text-md ms-1">{pageTitle}</span>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrub;
