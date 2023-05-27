import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import CategoriesButtonContainer from "./CategoriesButtonContainer";
import VideosListsContainer from "./VideosListsContainer";
import VideoContainer from "./VideoContainer";


const VideoPageContainer = () => {
    const [searchParams] = useSearchParams();
   // console.log(searchParams.get("v"));

  

    return (
        <div className="flex">
            <VideoContainer />
            <div className="flex flex-col">
                <CategoriesButtonContainer />
                <VideosListsContainer />
            </div>
        </div>
    )
}


export default VideoPageContainer;