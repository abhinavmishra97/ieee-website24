import React, { Fragment } from "react";
import Robo from "../models/robo/robo.component";
import Navbar from "../components/nav/nav.component";
import Title from "../components/title/title.component";
import AboutSBJIIT from "../components/about/about.component";
import Footer from "../components/footer/footer.component";
import Team from "../components/team/team.component";
import WieAbout from "../components/wie-about/wieAbout.component";
import WIEComponent from "../components/wie/wie.component";
import members from "../data/members";
import './home.style.css'

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Robo />
            <Title />
            <section id="aboutus">
                <AboutSBJIIT id="aboutus" />
            </section>
            <section id="wie">
                <WieAbout />
                <WIEComponent />
            </section>
            <section id="team">
                <Team members={members} />
            </section>
            <footer id="contactus">
                <Footer />
            </footer>
        </Fragment>
    )
}

export default Home;
