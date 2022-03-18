import React from 'react';
import Particle from "../Particle";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";

const CertificateList = ({certificates,title}) => {
    return (
        <>


            <Particle/>
            <Container>
                <h1 className="project-heading">
                    <strong className="purple"> {`${title.toUpperCase()}  CERTIFICATES`} </strong>
                </h1>

                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    {certificates.map(certificate => (
                        <Col md={4} className="project-card"  key={certificate.name}>
                            <ProjectCard

                                isCertificate
                                imgPath={`/Assets/certificates/${certificate.image}`}
                                title={certificate.name}
                                description={certificate.description}
                                link={certificate.link}
                            />
                        </Col>
                    ))}


                </Row>
            </Container>
        </>
    );
};

export default CertificateList;
