import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response?.json();
    setVideos(data?.items || []);
    // console.log("14", data);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap cursor-pointer">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video?.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
