import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
import { MdOutlinePausePresentation } from "react-icons/md";

function ProjectCards(props) {

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>

                <Card.Title>{props.title}</Card.Title>
                {props.isCompleted && props.isPersonal ?
                    <span className="badge bg-success ms-auto">Complete</span> :
                    ''
                }

                {!props.isCompleted && props.isPersonal ?
                    <span className="badge bg-warning ms-auto">In Progress</span> :
                    ''
                }

                <Card.Text style={{textAlign: 'justify'}}>
                    {props.description}

                </Card.Text>
                <div>
                    <Button
                        variant="primary"
                        href={props.link}
                        target="_blank"
                        className={"m-3"}
                        // Add the mb-2 class for margin-bottom
                    >
                        <BiLinkExternal/> &nbsp;
                        {props.isCertificate ? 'View Certificate Link' : 'View Source'}
                    </Button>

                    {(props.isCompleted && props.isPersonal) &&<Button
                        variant="primary"
                        href={props.demo}
                        target="_blank"
                        className={"ml-3"}
                        // Add the mb-2 class for margin-bottom
                    >
                        <MdOutlinePausePresentation /> &nbsp;
                      DEMO
                    </Button> }
                </div>

            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
