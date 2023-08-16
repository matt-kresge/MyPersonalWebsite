import React from 'react';
import Climbing from './logo/Climbing.jpg';
import Outdoors from './logo/Outdoors.jpg';

const ExtraExperience = () =>{
    const smallFontSize={fontSize: "1vw"};
    const parFontSize={fontSize: "1.4vw"};
    const headFontSize={fontSize: "2.5vw"};
    return (
        <a class="container-fluid" id="ExtraExp">
            <div class="media">
                <img class="align-self-center ml-3 "src={Outdoors} width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5" >
                    <h1 class="mt-5" style={headFontSize}>Rowan University Outdoors Club</h1>
                    <p style={smallFontSize}>President, Secretary, Webmaster, Treasurer</p>
                    <ul style={parFontSize}>
                        <li>Member of the elected board of Outdoors Club for all 4 years of college</li>
                        <li>Duties included budget planning, facilitating meetings, trip planning, scheduling and logistics, and communicating with faculty advisors</li>
                    </ul>
                </div>
            </div> 
            <div class="media">
                <img class="align-self-center ml-3"src={Climbing} width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5 mb-3" >
                    <h1 class="mt-5" style={headFontSize}>Rowan University Climbing Club</h1>
                    <p style={smallFontSize}>Secretary</p>
                    <ul style={parFontSize}>
                        <li>Assisted in revitalizing the club after it's nearly 2 years of inactivity</li>
                        <li>Planned and attended events to increase the club's size and activity</li>
                    </ul>
                </div>
            </div>  
        </a>
    );
};

export default ExtraExperience;