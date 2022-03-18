import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {BiLinkExternal} from "react-icons/bi";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import {useSelector} from "react-redux";

const SchoolProject = () => {
    const {schoolProjects} = useSelector(state => state.projects);
    return (
        <>



            <Particle/>
            <Container>
                <h1 className="project-heading">
                    <strong className="purple"> Academic Projects </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on my Computer Programming Analyst Program
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    {schoolProjects.map(project => (
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={`/Assets/Projects/${project.pic}`}
                                title={project.name}
                                description={project.description}
                                link={project.link}
                            />
                        </Col>
                    ))}


                </Row>
                <test/>
            </Container>
        </>
    );
};

export default SchoolProject;
