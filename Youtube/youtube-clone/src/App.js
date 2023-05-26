import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecemmendedVideos from "./RecemmendedVideos";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <h1>Hello everyone Let's make a youtube clone</h1> */}
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecemmendedVideos />
      </div>
    </div>
  );
}

export default App;
