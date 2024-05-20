import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'
import './assets/index.css'

function Container() {

    // const mysteriousLink = () => {
    //     location.href = "../mysterious.html";
    // }


    return (
        <div className="container mt-1">
            <div className="row align-items-center justify-content-center">
                <LeftPart />
                <RightPart />
                {/* <a style={{ color: "#061A40" }} onClick={mysteriousLink} >Mysterious Link</a> */}
            </div>
        </div >
    )
}

export default Container;