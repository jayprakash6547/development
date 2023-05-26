import React from "react";

import SidebarRow from "./SidebarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={TrendingFlatIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr/>

      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
      <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
      <SidebarRow Icon={ExpandMoreIcon} title="Show More"/>
      <hr/>
      </div>
  );
}

export default Sidebar;
