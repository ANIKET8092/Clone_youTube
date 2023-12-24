import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return null;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const thumbnailUrl = thumbnails?.high?.url;
  const viewCount = statistics?.viewCount || "N/A";
  return (
    <div className="p-2 m-2  w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnailUrl} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
      {/* <h1>hello</h1> */}
    </div>
  );
};

export default VideoCard;
