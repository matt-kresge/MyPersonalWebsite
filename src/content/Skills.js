import React from 'react';
import HTML5_logo from './logo/HTML5.png';
import Javascript_logo from './logo/Javascript.png';
import Java_logo from './logo/Java.png';
import Cpp_logo from './logo/C++.png';
import Python_logo from './logo/Python.png';
import MySQL_logo from './logo/MySQL.png';
import Git_logo from './logo/Git.png';

const Skills = () => {
    const headFontSize={fontSize: "2.5vw"};
    return(
        <a id="Skills">
            <hr/>
            <h1 style={headFontSize} class="text-center">Skills</h1>
            <div class="row align-items-start text-center mt-5 ml-1 mr-1">
                <div class="col border border-dark rounded ml-1">
                    <img src={HTML5_logo} width="50%" height="auto"/>
                    <h1 style={headFontSize}>HTML5</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={Javascript_logo} width="44%" height="auto"/>
                    <h1 style={headFontSize}>Javascript</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={Java_logo} width="50%" height="auto"/>
                    <h1 style={headFontSize}>Java</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={Cpp_logo} width="44.5%" height="auto"/>
                    <h1 style={headFontSize}>C++</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={Python_logo} width="46%" height="auto"/>
                    <h1 style={headFontSize}>Python</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={MySQL_logo} width="72%" height="auto"/>
                    <h1 style={headFontSize}>MySQL</h1>
                </div>
                <div class="col border border-dark rounded ml-1">
                    <img src={Git_logo} width="49%" height="auto"/>
                    <h1 style={headFontSize}>Git</h1>
                </div>
            </div>
            <hr/>
        </a>
    );
};

export default Skills;