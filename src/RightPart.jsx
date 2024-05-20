import React, { useState, useEffect } from 'react';

function RightPart() {


    useEffect(() => {
        setGithubProjectNameOto();
    }, []);

    function setGithubProjectNameOto() {
        const projectP = document.querySelectorAll(".project");
        projectP.forEach(element => {
            console.log();
            const projectA = element.children[1];
            const projectNameArr = projectA.getAttribute("href").split("/");
            const projectName = projectNameArr[projectNameArr.length - 1].replaceAll("-", " ");
            projectA.textContent = projectName;
        }

        )
    }

    return (
        <div className="col-md-5 mt-3">
            <div className="container mb-5 rounded-5 gradient-background" style={{ backgroundImage: "linear-gradient(to left, #74ebd5 0%, #9face6 100%)", minHeight: '80vh' }}>
                <div className="row align-items-center justify-content-center">
                    <div className="container">
                        <div className="p-3 text-center">
                            <h2 style={{ color: '#061A40' }}>My Stack</h2>
                        </div>
                    </div>

                    {/* Icons Container */}
                    <div className="container">
                        <div className="row justify-content-center ms-auto">
                            <img src="/src/assets/img/js.png" className="pt-3 img-hover" style={{ maxWidth: '75px', minWidth: '50px' }} alt="" />
                            <img src="/src/assets/img/java.png" className="pt-3 img-hover" style={{ maxWidth: '75px', minWidth: '50px' }} alt="" />
                            <img src="/src/assets/img/html.png" className="pt-3 img-hover" style={{ maxWidth: '75px', minWidth: '50px' }} alt="" />
                            <img src="/src/assets/img/css.png" className="pt-3 img-hover" style={{ maxWidth: '75px', minWidth: '50px' }} alt="" />
                            <img src="/src/assets/img/nodejs.png" className="pt-3 img-hover" style={{ maxWidth: '75px', minWidth: '50px' }} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="p-3 mt-3 text-center">
                            <h2 style={{ color: '#061A40' }}>My Projects</h2>
                        </div>
                    </div>
                    <div className="container" id="projectContainer">
                        <p className="fs-5 text-start project" >
                            <img src="/src/assets/img/project.gif" style={{ maxWidth: '50px' }} alt="" />
                            <a href="https://github.com/ImeraFera/Java-Graph-Project"></a>
                        </p>
                        <p className="fs-5 text-start project">
                            <img src="/src/assets/img/project.gif" style={{ maxWidth: '50px' }} alt="" />
                            <a href="https://github.com/ImeraFera/Simple-Hotel-Admin-Panel"></a>
                        </p>
                        <p className="fs-5 text-start">
                            <img src="/src/assets/img/github.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            For More <a href="https://github.com/ImeraFera?tab=repositories">My Github Repos</a>
                        </p>
                    </div>
                    <div className="container">
                        <div className="text-center">
                            <h2 style={{ color: '#061A40' }}>My References</h2>
                        </div>
                    </div>
                    <div className="container" id="projectContainer">
                        <p className="fs-5 text-start">:(</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightPart;
