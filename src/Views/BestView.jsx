import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const BestView = () =>
    <div>  
        <Navbar active="best"></Navbar>
        <Stories storyType="best"></Stories>
    </div>

export default BestView;
