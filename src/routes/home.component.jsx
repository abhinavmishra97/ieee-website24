import React, { Fragment } from "react";
import Robo from "../models/robo/robo.component";
import Navbar from "../components/nav/nav.component";
import Title from "../components/title/title.component";
import AboutSBJIIT from "../components/about/about.component";
import './home.style.css'
import Footer from "../components/footer/footer.component";
import Team from "../components/team/team.component";

import abhinavSir from "./../assets/core-team-members/Abhinav.jpg";


const members = [
    {
        image: abhinavSir,
        name: 'John Doe',
        post: 'Team Leader',
    },
    {
        image: abhinavSir,
        name: 'Jane Smith',
        post: 'Project Manager',
    },
    {
        image: abhinavSir,
        name: 'Jane Smith',
        post: 'Project Manager',
    },
    {
        image: abhinavSir,
        name: 'Jane Smith',
        post: 'Project Manager',
    },
];

const Home = () => {
    return (
        <Fragment>
            <div className="home-container">
                <Navbar />
                <Robo />
                <Title />
                <AboutSBJIIT />
                <Team members={members}/>
                <Footer />
            </div>

        </Fragment>
    )
}

export default Home;