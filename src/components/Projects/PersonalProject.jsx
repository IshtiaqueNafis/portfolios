import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import {useSelector} from "react-redux";

const PersonalProject = () => {
    const {personalProjects} = useSelector(state => state.projects);

    return (
        <>
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    <strong className="purple"> Personal Projects </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on my Free time
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    {personalProjects.map(project => (
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={ `/Assets/Projects/${project.pic}`}
                                title={project.name}
                                description={project.description}
                                link={project.link}
                                isCompleted={project.completed}
                                isPersonal={true}
                                demo={project.demo}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default PersonalProject;
