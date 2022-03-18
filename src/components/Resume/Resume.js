import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf"
import coverletter from "../../Assets/coverletter.pdf";
import {Document, Page, pdfjs} from 'react-pdf'
import Button from "react-bootstrap/Button";
import {RiFilePaper2Line} from "react-icons/ri";
import {GiLetterBomb} from "react-icons/gi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [resume, showResume] = useState(true);
    const [coverLetter, showCoverLetter] = useState(false);

    const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
/*
<Button Style={"margin:5px"} variant="primary" onClick={() => {
                setAcademicProjects(true)
                setPersonalProject(false)
            }}>
                <HiAcademicCap/> &nbsp;
                Academic Projects
            </Button>
 */

    return (
        <Container fluid className="resume-section">




            <Button Style={"margin:5px"} variant="primary" onClick={() => {
                showResume(true)
                showCoverLetter(false)
            }}>
                <RiFilePaper2Line/> &nbsp;
                Resume
            </Button>

            <Button Style={"margin:5px"} variant="primary" onClick={() => {
                showResume(false)
                showCoverLetter(true);
            }}>
                <GiLetterBomb/> &nbsp;
               Cover Letter
            </Button>
            <Particle/>
            <br/>
            <br/>
            <Row>
                <Col md={{span: 6, offset: 3}}>

                    { resume && <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}/>
                    </Document>
                    }

                    { coverLetter && <Document file={coverletter} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber}/>
                    </Document>
                    }


                </Col>

            </Row>
        </Container>
    );
}

export default Resume;
