import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const TopView = () =>
    <div>  
        <Navbar active="top"></Navbar>
        <Stories storyType="top"></Stories>
    </div>

export default TopView;
