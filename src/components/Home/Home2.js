import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I believe in continuous learning so even after school ends I like to learn advance programming concepts from youtube & udemy.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> C#, Javascript and React </b>
              </i>
              <br />
              <br />
             I am currently Learning
              <i>
                <b className="purple"> TypeScript</b> and
                also planning to learn {" "}
                <b className="purple">
                  MicroServices & CI/CD
                </b>
              </i>
              <br />
              <br />

              <i>
                <b className="purple font-italic">
                  {" "}
                  " Sic Parvis Magna "
                </b>
              </i>
              &nbsp; -
              <i>
                <b className="purple font-italic"> Greatness from small beginnings</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons ">
                <a
                  href="https://github.com/IshtiaqueNafis"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons "
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nafis-ishtiaque-6566b156/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
