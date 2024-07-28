import React, { useState } from 'react';
import './card.style.css';
import bgImg from '../../assets/wie-imgs/wie-mission.jpg';
import Typewriter from "typewriter-effect";


const AnimatedFlexCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <>
            <div className='eventTitle'>

                <h1 >
                    <Typewriter
                        options={{
                            strings: ["EVENTS"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <hr />
            </div>
            <div className="cardContainer">

                <div className="cardSubContainer">
                    <div
                        className={`card ${hoveredCard === 'c1' ? 'expanded' : ''}`}
                        id="c1"
                        onMouseEnter={() => handleMouseEnter('c1')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            {/* <div className="icon">1</div> */}
                            <div className="description">
                                <h2>IEEE DAY</h2>
                                <p>Providing a network and the opportunity to harness technology for a more sustainable tomorrow. IEEE Day not only celebrates technological accomplishments, but it also honours IEEE members who work tirelessly to make a long-term impact on the lives of people all across the world.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === null || hoveredCard === 'c2' ? 'expanded' : ''}`}
                        id="c2"
                        onMouseEnter={() => handleMouseEnter('c2')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            {/* <div className="icon">2</div> */}
                            <div className="description">
                                <h2>TECH BLOCKS</h2>
                                <p>A five-day workshop in which
                                    seniors lead the way and teach their juniors in the most comprehensive and engaging manner. Covers a wide spectrum of technical domains. Has something in store for everyone, whether you are looking for a kickstart into the world of technology or simply looking for ways to advance in it.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c3' ? 'expanded' : ''}`}
                        id="c3"
                        onMouseEnter={() => handleMouseEnter('c3')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            {/* <div className="icon">3</div> */}
                            <div className="description">
                                <h2>XENITH</h2>
                                <p>A melange of technology, innovation, and inspiration across space and time of humankind An enthralling series of coding competitions, hackathons, and the most captivating guest lectures from the leaders of the industry A curation of the finest events, leveraging skills and uprising the horizon of over 3000 thousand participants.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c4' ? 'expanded' : ''}`}
                        id="c4"
                        onMouseEnter={() => handleMouseEnter('c4')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            {/* <div className="icon">4</div> */}
                            <div className="description">
                                <h2>QUIZES</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimatedFlexCards;
