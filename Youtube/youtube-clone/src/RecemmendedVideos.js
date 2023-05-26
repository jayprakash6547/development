import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard.js";
function RecommendedVideos() {
  return (
    <div className="RecommendedVideos">
      <h2>Recommended</h2>
      <div className="RecommendedVideos__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
