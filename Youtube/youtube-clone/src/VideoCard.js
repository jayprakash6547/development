import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard__info">
        <AccountCircleIcon
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <h4>{image}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
