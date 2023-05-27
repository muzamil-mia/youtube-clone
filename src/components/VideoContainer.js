import React from "react";
import VideoStream from "./VideoStream";
//import VideoDescription from './VideoDescription'

const VideoContainer = () => {
    return(
        <div className="flex flex-col w-[70%]">
            <VideoStream/>
            {/* <VideoDescription/> */}
        </div>
    )
}

export default VideoContainer;