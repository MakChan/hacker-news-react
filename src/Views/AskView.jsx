import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const TopView = () =>
    <div>  
        <Navbar></Navbar>
        <Stories storyType="ask"></Stories>
    </div>

export default TopView;
