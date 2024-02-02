import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {
  const { gif, loader, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <>
      <div className='text-black bg-green-500 flex flex-col rounded-lg  shadow-md sm:w-full lg:w-1/2 md:w-1/2 mx-auto my-7 '>
        <h1 className='underline font-semibold text-center my-3 text-xl'>A Random Gifs</h1>
        <div className='w-full max-h-[680px] flex justify-center items-cente my-4 rounded-sm'>
          {loader ? <Spinner /> : <img className='p-2 rounded-sm' src={gif} alt="" width={450} />}
        </div>
        <button className='bg-yellow-500 mb-5 border-yellow-500 flex  mx-auto text-xl font-semibold  py-2 w-full justify-center max-w-[350px] rounded-md' onClick={clickHandler}>Generate</button>
      </div>
    </>

  )
}

export default Random
