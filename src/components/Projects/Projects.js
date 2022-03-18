import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SchoolProject from "./SchoolProject";
import {HiAcademicCap} from "react-icons/hi";
import PersonalProject from "./PersonalProject";
import {AiOutlineCode} from "react-icons/ai";


const Projects = () => {
    const [academicProjects, setAcademicProjects] = useState(true);
    const [personalproject, setPersonalProject] = useState(false);


    return (
        <Container fluid className="project-section">

            <Button Style={"margin:5px"} variant="primary" onClick={() => {
                setAcademicProjects(true)
                setPersonalProject(false)
            }}>
                <HiAcademicCap/> &nbsp;
                Academic Projects
            </Button>

            <Button variant="primary" tyle={"margin:5px"} onClick={() => {
                setPersonalProject(true)
                setAcademicProjects(false);

            }}>
                <AiOutlineCode/>&nbsp;
                Personal Projects
            </Button>


            {academicProjects && (<SchoolProject/>)}
            {personalproject && (<PersonalProject/>)}

        </Container>
    )
};

export default Projects;
