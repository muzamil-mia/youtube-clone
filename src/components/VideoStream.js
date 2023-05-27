import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from './CommentsContainer';


const VideoStream = () => {

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
    <div className='px-5'>
      <iframe width="800" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title='Youtube Video Player'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
    <CommentsContainer/>
    </>
  )
}

export default VideoStream