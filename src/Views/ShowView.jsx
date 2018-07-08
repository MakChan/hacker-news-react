import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const ShowView = () =>
    <div>  
        <Navbar active="show"></Navbar>
        <Stories storyType="show"></Stories>
    </div>

export default ShowView;
