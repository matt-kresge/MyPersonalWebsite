import React from 'react';
import profilePic from './ProfilePic.jpg';

const AboutMe = () =>{
    const parFontSize={fontSize: "1.4vw"};
    const headFontSize={fontSize: "2.5vw"};
    return (
        <a class="container-fluid mt-3" id="AboutMe">
            <div class="media">
                <img class="align-self-center ml-3"src={profilePic} alt="Photograph of myself" width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5" >
                    <h1 class="mt-5" style={headFontSize}>About me!</h1>
                    <p style={parFontSize}>Hello! My name is Matthew Kresge and I am currently seeking an opportunity to work in a full stack development position, preferrably in web development.
                    I graduated from Rowan University in May of 2023 with a B.S. in computer science.
                    My time as an undergraduate at Rowan taught me much about front-end and back-end coding in the context of web development.
                    Since graduating, I have continued to further my knowledge by pursueing the IBM Full Stack Software Developer Professional Certificate.
                    </p>
                    <a href="https://www.linkedin.com/in/matthew-kresge-04441a280/" style={parFontSize}>My LinkedIn<br/></a>
                    <a href="https://github.com/matt-kresge" style={parFontSize}>My Github</a>
                </div>
            </div>   
        </a>
    );
};

export default AboutMe;