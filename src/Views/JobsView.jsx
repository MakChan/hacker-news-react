import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const TopView = () =>
    <div>  
        <Navbar></Navbar>
        <Stories storyType="job"></Stories>
    </div>

export default TopView;
