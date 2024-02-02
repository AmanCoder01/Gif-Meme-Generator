import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [data, setData] = useState("");
  const { gif, loader, fetchData } = useGif(data);

  
  function clickHandler() {
    fetchData();
  }

  function changeHandler(e) {
    setData(e.target.value);
  }

  return (
    <>
      <div className='text-black bg-blue-500 flex flex-col rounded-lg shadow-md  sm:w-full lg:w-1/2 md:w-1/2 mx-auto my-7 '>
        <h1 className='underline font-bold text-center my-3 text-xl'>Random Gifs</h1>
        <div className='w-full max-h-[680px] flex justify-center items-cente my-4 rounded-sm'>
          {loader ? <Spinner /> : <img className='p-2 rounded-sm' src={gif} alt="" width={450} />}
        </div>
        <input onChange={changeHandler} value={data} type="text" placeholder='Enter any Gif keyword ' className='my-3 w-full mx-auto py-2 px-4 rounded-sm outline-none max-w-[350px]' />
        <button className='bg-yellow-500 mb-5 border-yellow-500 flex  mx-auto text-xl font-semibold  py-2 w-full justify-center max-w-[350px] rounded-md' onClick={clickHandler}>Generate</button>

      </div>
    </>
  )
}

export default Tag
