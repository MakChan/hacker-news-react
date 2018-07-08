import React from "react";
import Stories from "../Components/Stories.jsx"
import Navbar from "../Components/Navbar.jsx"

const NewView = () =>
    <div>  
        <Navbar active="new"></Navbar>
        <Stories storyType="new"></Stories>
    </div>

export default NewView;
