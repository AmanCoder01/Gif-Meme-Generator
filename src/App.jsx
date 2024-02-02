import Random from "./components/Random.jsx";
import Tag from "./components/Tag.jsx";
import Telegram from "./components/Telegram.jsx";

import React from 'react'

const App = () => {
  return (
    <div className="w-full h-full flex flex-col background">
      <h1 className="bg-white w-[90%] rounded-md text-center mt-[40px] py-2 mx-auto font-bold text-2xl">RANDOM GIFS</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
        <Telegram/>
      </div>
    </div>
  )
}

export default App
