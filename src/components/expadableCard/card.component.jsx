import React, { useState } from 'react';
import './card.style.css';
import bgImg from '../../assets/wie-imgs/wie-mission.jpg';
import Typewriter from "typewriter-effect";

const AnimatedFlexCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [transitionState, setTransitionState] = useState('');

    const handleMouseEnter = (cardId) => {
        setHoveredCard(cardId);
        setTransitionState('expanding');
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
        setTransitionState('contracting');
    };

    return (
        <>
            <div className='eventTitle'>
                <h1 >
                    EVENTS
                </h1>
                <hr />
            </div>
            <div className="cardContainer">
                <div className="cardSubContainer">
                    <div
                        className={`card ${hoveredCard === 'c1' ? 'expanded' : ''} ${transitionState}`}
                        id="c1"
                        onMouseEnter={() => handleMouseEnter('c1')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">IEEE DAY</div>
                            <div className="description">
                                <h2>IEEE DAY</h2>
                                <p>Providing a network and the opportunity to harness technology for a more sustainable tomorrow. IEEE Day not only celebrates technological accomplishments, but it also honours IEEE members who work tirelessly to make a long-term impact on the lives of people all across the world.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === null || hoveredCard === 'c2' ? 'expanded' : ''} ${transitionState}`}
                        id="c2"
                        onMouseEnter={() => handleMouseEnter('c2')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">TECH BLOCKS</div>
                            <div className="description">
                                <h2>TECH BLOCKS</h2>
                                <p>A five-day workshop in which seniors lead the way and teach their juniors in the most comprehensive and engaging manner. Covers a wide spectrum of technical domains. Has something in store for everyone, whether you are looking for a kickstart into the world of technology or simply looking for ways to advance in it.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c3' ? 'expanded' : ''} ${transitionState}`}
                        id="c3"
                        onMouseEnter={() => handleMouseEnter('c3')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">XENITH</div>
                            <div className="description">
                                <h2>XENITH</h2>
                                <p>A melange of technology, innovation, and inspiration across space and time of humankind. An enthralling series of coding competitions, hackathons, and the most captivating guest lectures from the leaders of the industry. A curation of the finest events, leveraging skills and uprising the horizon of over 3000 thousand participants.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c4' ? 'expanded' : ''} ${transitionState}`}
                        id="c4"
                        onMouseEnter={() => handleMouseEnter('c4')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">QUIZZES</div>
                            <div className="description">
                                <h2>QUIZZES</h2>
                                <p>Experience the excitement of testing your knowledge with our captivating and riveting quizzes like the ones at IEEE day! Challenge your friends, tune up your skills, and stand a chance to win amazing goodies! Great opportunity with a mishmash of fun and learning.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c5' ? 'expanded' : ''} ${transitionState}`}
                        id="c5"
                        onMouseEnter={() => handleMouseEnter('c5')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">WEBINAR</div>
                            <div className="description">
                                <h2>WEBINAR</h2>
                                <p>IEEE webinars aren't just about learning—they're about growing! Covering everything including women in engineering, these interactive sessions let you dive into Q&As, vote in polls, and snag cool materials. Whether you're an IEEE member or not, there's something for everyone to enjoy!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card ${hoveredCard === 'c6' ? 'expanded' : ''} ${transitionState}`}
                        id="c6"
                        onMouseEnter={() => handleMouseEnter('c6')}
                        onMouseLeave={handleMouseLeave}
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <div className="row">
                            <div className="vertical-text">WORKSHOP</div>
                            <div className="description">
                                <h2>WORKSHOP</h2>
                                <p>Ignite your inner tech expert with the interactive and immersive upskilling sessions at the engaging IEEE workshops, covering a wide spectrum of domains. Set your inner geniuses loose as you proceed on this path of spontaneous learning and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimatedFlexCards;
