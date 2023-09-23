import React from 'react';
import Lowes from './logo/Lowes.png';
import Redners from './logo/Redners.png';
import Target from './logo/Target.png';

const WorkExperience = () =>{
    const smallFontSize={fontSize: "1vw"};
    const parFontSize={fontSize: "1.4vw"};
    const headFontSize={fontSize: "2.5vw"};
    return (
        <a class="container-fluid" id="WorkExp">
            <div class="media bg-dark text-light">
                <img class="align-self-center ml-3 "src={Lowes} width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5" >
                    <h1 class="mt-5" style={headFontSize}>Lowe's Home Improvement: Sales Associate</h1>
                    <p style={smallFontSize}>May 2021 - August 2021<br/>Pottstown, PA</p>
                    <ul style={parFontSize}>
                        <li>Assisted customers in locating products and provided information regarding product specifications</li>
                        <li>Worked with colleagues to solve problems and create a welcoming environment</li>
                        <li>Restocked shelving and maintained organized appearance of designated area</li>
                    </ul>
                </div>
            </div> 
            <div class="media bg-dark text-light">
                <img class="align-self-center ml-3"src={Redners} width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5 mb-3" >
                    <h1 class="mt-5" style={headFontSize}>Redners Warehouse Market: Cashier</h1>
                    <p style={smallFontSize}>December 2020 - January 2021<br/>Reading, PA</p>
                    <ul style={parFontSize}>
                        <li>Assisted customers with sales transactions. Handled cash, check and credit card payments</li>
                        <li>Helped with restocking when the store was slow or the cashiers were overstaffed</li>
                    </ul>
                </div>
            </div>
            <div class="media bg-dark text-light">
                <img class="align-self-center ml-3"src={Target} width="20%" height="auto"/>
                <div class="media-body ml-5 mr-5 mb-3" >
                    <h1 class="mt-5" style={headFontSize}>Target: Truck Unloader, Stocker</h1>
                    <p style={smallFontSize}>August 2023 - Present<br/>Reading, PA</p>
                    <ul style={parFontSize}>
                        <li>Unload/organize product from inbound truck and stock shelves while assisting customers in a fast paced environment</li>
                        <li>Work independently and as a team to solve unique and evolving challenges</li>
                    </ul>
                </div>
            </div>  
        </a>
    );
};

export default WorkExperience;