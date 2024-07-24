import React from "react";
import './title.style.css';

const Title = () => {
    return (
        <div className="content-container">
            <div className="title-container">
                <div className="logo">
                    {/* <img src={ieeeImage} className="ieeeText" alt="IEEE Logo" /> */}
                    <div className="text-container">
                        <p className="ieee">IEEE</p>
                        <p className="sb-ieee">STUDENT BRANCH JIIT</p>
                    </div>
                </div>
                <p className="title">Advancing Technology for Humanity</p>
            </div>
        </div>
    )
}

export default Title;