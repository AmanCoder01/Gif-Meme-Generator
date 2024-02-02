import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (data) => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchData() {
    setLoader(true);
    const url = data ? `${randomUrl}&tag=${data}`: randomUrl;
    const res = await axios.get(url);
    const imageSource = res.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoader(false);
  } 

  useEffect(() => {
    fetchData();
  }, [])


  return {gif, loader, fetchData};
};

export default useGif;
