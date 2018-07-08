import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const AskView = () =>
    <div>  
        <Navbar active="ask"></Navbar>
        <Stories storyType="ask"></Stories>
    </div>

export default AskView;
