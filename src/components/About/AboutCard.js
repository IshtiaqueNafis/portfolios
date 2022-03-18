import React from "react";
import Card from "react-bootstrap/Card";
import {IoLogoGameControllerB} from "react-icons/io";
import {SiNetflix} from "react-icons/si";
import {FaYoutubeSquare} from "react-icons/fa";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        I am <span className="purple">Nafis Ishtiaque. </span>

                        <br/>I am a currently completing <span
                        className="purple">Computer Programming Analyst </span> Advanced Diploma
                        at <span className="purple"> George Brown College. </span>
                        <br/>
                        <br/>
                        My other Hobbies are:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <IoLogoGameControllerB/>
                            VideoGames
                        </li>
                        <li className="about-activity">

                            <SiNetflix/>
                            Netflix
                        </li>
                        <li className="about-activity">
                            <FaYoutubeSquare/> YouTube
                        </li>

                    </ul>


                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
