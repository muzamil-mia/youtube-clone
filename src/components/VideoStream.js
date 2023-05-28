import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const VideoStream = () => {

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (

    <div className="flex flex-col w-full">
      <div className='px-5  w-full '>
        <div className="">
          <iframe width="800" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title='Youtube Video Player'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default VideoStream