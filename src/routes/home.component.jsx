import React, { Fragment } from "react";
import Robo from "../models/robo/robo.component";
import Navbar from "../components/nav/nav.component";
import Title from "../components/title/title.component";

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <Robo />
            <Title/>
        </Fragment>
    )
}

export default Home;