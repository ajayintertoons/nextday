import React from 'react';
import pageNotFound from "../../src/images/404.jpg"
import Button from '../components/button/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px] pt-[116px] lg:pt-[0px]' >
      <div className='flex justify-center items-center' >
        <img src={pageNotFound} className='w-full' />
      </div>
      <div className='flex justify-center items-center lg:items-start flex-col mb-[30px] lg:mb-[0]'>
        <h1 className='md:text-9xl text-6xl  font-sansation' style={{ color: "#1ba169" }}>404</h1>
        <h1 className='md:text-4xl text-3xl text-center lg:text-justify font-sansation'>Page Not Found</h1>
        <p className='text-xl mt-1 text-[gray]  text-center lg:text-justify font-sansation'>Sorry, the page you are looking for does not exist.</p>
        <Button buttonText="Back to Home" className="mt-5" onClick={() => navigate('/')} ></Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
