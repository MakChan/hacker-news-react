import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const JobsView = () =>
    <div>  
        <Navbar active="job"></Navbar>
        <Stories storyType="job"></Stories>
    </div>

export default JobsView;
