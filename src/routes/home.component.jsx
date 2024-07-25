import React, { Fragment } from "react";
import Robo from "../models/robo/robo.component";
import Navbar from "../components/nav/nav.component";
import Title from "../components/title/title.component";
import AboutSBJIIT from "../components/about/about.component";
import './home.style.css'
import Footer from "../components/footer/footer.component";

const Home = () => {
    return (
        <Fragment>
            <div className="home-container">
                <Navbar />
                <Robo />
                <Title />
                <AboutSBJIIT />
                <Footer />
            </div>

        </Fragment>
    )
}

export default Home;