import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "../utils/config.js";
import VideoCard from './VideoCard';
import { Link } from "react-router-dom";

const VideosListsContainer = () => {

  const [videos, setVideos] = useState([]);
//console.log(videos)
  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json.items)
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        //console.log(video)
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video}/>
        </Link>
      ))}
    </div>
  )
}

export default VideosListsContainer