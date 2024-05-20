import React, { useState, useEffect } from 'react';

function LeftPart() {

    var i = 0;

    const calculateAge = () => {
        const birthYear = 2003;
        let currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age;
    }
    const mysteriousBtn = () => {
        i++;
        if (i == 10) {
            console.log("Congrats! I like your perseverance. But I don't understand. Why are you still here?");
        }
        if (i > 10) {
            return;
        }
    }

    return (
        <div className="col-md-5 mt-3">

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content bg-dark text-light ">
                        <div className="modal-header ">
                            <h5 className="modal-title " id="exampleModalLabel">
                                Mysterious Modal
                            </h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                I'm not sure what you're looking for in this place. Maybe... Some magical or mysterious things ?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={mysteriousBtn} className="btn btn-secondary">
                                <i className="fa-regular fa-circle-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5 rounded-5 gradient-background" style={{ backgroundImage: "linear-gradient(to left, #74ebd5 0%, #9face6 100%)", minHeight: '80vh' }}>
                <div className="row align-items-center justify-content-center">
                    <div className="container">
                        <div className="p-3 text-center">
                            <h2 style={{ color: '#061A40' }}>Who Am I ?</h2>
                        </div>
                    </div>
                    <div className="container m-1" style={{ width: '200px' }}>

                        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="./assets/2.jpg" className="img-fluid img-hover rounded-circle" style={{ border: '#061A40 solid 3px' }} alt="" />
                        </a>

                    </div>
                    <div className="container text-center">
                        <h1>Ahmet Furkan Sayan</h1>
                    </div>
                    <div className="container p-4 fs-5" id="myLinksContainer">
                        <p className="text-start">
                            <img src="src/assets/img/graduate.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <span>Bartın University(Computer Engineering)</span>
                        </p>
                        <p className="text-start">
                            <img src="assets/img/calendar.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <span>{calculateAge()} Years Old</span>
                        </p>
                        <p className="text-start">
                            <img src="src/assets/mail.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <a href="mailto:ahmet_furkan_sayan@hotmail.com">Contact Me</a>
                        </p>
                        <p className="text-start">
                            <img src="./src/assets/img/github.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <a href="https://www.instagram.com/ahmetf_syn">@ImeraFera</a>
                        </p>
                        <p className="text-start">
                            <img src="/src/assets/img/instagram.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <a href="https://www.instagram.com/ahmetf_syn">@ahmetf_syn</a>
                        </p>
                        <p className="text-start">
                            <img src="/src/assets/img/linkedin.gif" style={{ maxWidth: '40px', minWidth: '30px' }} alt="" />
                            <a href="https://www.linkedin.com/in/ahmetfsayan/" >@ahmetfsayan</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftPart;
