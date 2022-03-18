import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack({data}) {
  console.log({data})
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        {data.map(({icon})=><Col xs={4} md={2} className="tech-icons"> {icon}</Col>)}

    </Row>
  );
}

export default Toolstack;
