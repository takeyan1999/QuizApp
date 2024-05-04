import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import QuizAnswer from "./AnswerModal"; //Modalコンポーネントをimportする
import { Quizcounter } from "./AnswerModal";
import QuizList from "./QuizList";
import "../css/style.css";

const API_URL = "http://localhost:3000/quiz";
// const API_URL2 = "http://localhost:3000/users";

export interface AnswerListinterface {
    id: number;
    title: string;
    select1: string;
    select2: string;
    select3: string;
    select4: string;
    AnswerNumber: number;
}

const QuizBody = () => {
    const [AnswerList, setAnswerList] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(API_URL)
            .then((res) => {
                return res.json();
            })
            .then((users) => {
                setAnswerList(users);
            });
    };

    console.log(AnswerList);
    let QuestionSum = AnswerList.length;

    const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する

    const [selectAnswer, setSelectAnswer] = useState(0);

    const ShowModal = (select: number) => {
        setShowModal(true);
        setSelectAnswer(select);
    };
    if (QuestionSum === 0 || AnswerList === undefined) {
        return <></>;
    } else {
        return (
            <body>
                <Card className="text-center my-5 w-75 m-auto">
                    <Card.Header className="fs-1">
                        <p>
                            第<span>{Quizcounter + 1}</span>問
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">
                            <QuizList choice={"quiztitle"} AnswerList={AnswerList} />
                        </Card.Title>
                        <Container>
                            <Row xs={1} md={2} className="mt-5">
                                <Col>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={() => ShowModal(1)}>
                                            <QuizList choice={"select1"} AnswerList={AnswerList} />
                                        </Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={() => ShowModal(2)}>
                                            <QuizList choice={"select2"} AnswerList={AnswerList} />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row xs={1} md={2} className="my-2">
                                <Col>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={() => ShowModal(3)}>
                                            <QuizList choice={"select3"} AnswerList={AnswerList} />
                                        </Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={() => ShowModal(4)}>
                                            <QuizList choice={"select4"} AnswerList={AnswerList} />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <QuizAnswer
                                showFlag={showModal}
                                setShowModal={setShowModal}
                                selectAnswer={selectAnswer}
                                AnswerNumber={(AnswerList[Quizcounter] as AnswerListinterface).AnswerNumber}
                                QuestionSum={QuestionSum}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </body>
        );
    }
};

export default QuizBody;
