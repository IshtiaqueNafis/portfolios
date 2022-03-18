import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/971.jpg";
import Toolstack from "./Toolstack";
import {database, languages, toolsPlatform, webTools} from "../../data/skillData";

function About() {

    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Aboutcard/>
                    </Col>
                    <Col
                        md={5}
                        style={{paddingTop: "120px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    <strong className="purple">Languages </strong>
                </h1>

                {<Toolstack data={languages}/>}


                <h1 className="project-heading">
                    <strong className="purple">FrameWorks</strong>
                </h1>

                {<Toolstack data={webTools}/>}

                <h1 className="project-heading">
                    <strong className="purple">Database</strong>
                </h1>

                {<Toolstack data={database}/>}

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong>
                </h1>

                {<Toolstack data={toolsPlatform}/>}


            </Container>
        </Container>
    );
}

export default About;
