import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import brain from "../images/brain.png";

const QuizHeader = () => {
    return (
        <header className="l_header py-3 ms-0">
            <Container fluid className="text-center">
                <Row>
                    <Col>
                        <a href="">
                            <img src={brain} style={{ width: 80, height: 80 }} alt="images/brain.png" />
                        </a>
                    </Col>
                    <Col xs={6}>
                        <p className="fs-1 fw-bold text-light">Quiz大会</p>{" "}
                    </Col>
                    <Col>Insert nab tab</Col>
                </Row>
            </Container>
        </header>
    );
};

export default QuizHeader;
