import React from 'react';

const Education = () => {
    const largeFontSize={fontSize: "2vw"};
    const midFontSize={fontSize: "1.8vw"};
    const smallFontSize={fontSize: "1.2vw"};
    return (
        <a id="Education">
            <div class="container-fluid bg-dark text-light border-top border-bottom">
                <h1 style={largeFontSize} class="text-center mt-3">Education</h1>
                <h1 class="mt-3 ml-3" style={largeFontSize}>Rowan University, Glassboro, NJ</h1>
                <h2 class="ml-3" style={midFontSize}>Bachelor of Science, May 2023, GPA: 3.25</h2>
                <p class="ml-3" style={smallFontSize}>Major: Computer Science <br/>
                Minor: Mathematics <br/>
                Concentration: Graphics, Visualization and Gaming Technology</p>
                <h1 class="mt-3 ml-3" style={largeFontSize}><br/>IBM Full Stack Software Developer Professional Certificate</h1>
                <p class="ml-3" style={smallFontSize}>Expected Completion Date: November 2023</p>
            </div>
        </a>
    );
};
export default Education;