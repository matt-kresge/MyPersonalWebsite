import React from 'react';

const Navbar = () =>{
    const midFontSize={fontSize: "1.4vw"};
    const smallFontSize={fontSize: "1vw"};
    return (
        <nav id="navbar" class="navbar navbar-expand navbar-light bg-dark text-light justify-content-between">
            <p>
                <h4 class="text-light ml-4 mt-1" style={midFontSize}>Matthew Kresge</h4>
                <p class="text-light ml-4 mt-1" style={smallFontSize}>
                mattkresge13@gmail.com
                <br></br>
                (610) 427-0380
                </p>
            </p>
            <div class="float-right mr-4" id="navbarSupportedContent">
                <ul class="navbar-nav mr-3" style={midFontSize}>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#AboutMe">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#Education">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#Skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#WorkExp">Work Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#ExtraExp">Extracurriculars</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;