import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FinishModal from "./FinishModal";

interface QuizAnswerProps {
    showFlag: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectAnswer: number;
    AnswerNumber: number;
    QuestionSum: number;
}

export let Quizcounter = 0;
export let Collectcounter = 0;
export let Wrongcounter = 0;

const QuizAnswer = (props: QuizAnswerProps) => {
    const [showFinishModal, setShowFinishModal] = useState(false); // FinishModalコンポーネントの表示の状態を定義する
    console.log("問題数" + Quizcounter);
    console.log("正解数" + Collectcounter);
    console.log("間違い" + Wrongcounter);

    const closeModal = () => {
        props.setShowModal(false);
        setShowFinishModal(true);
    };

    const FinishModalhandleClose = () => {
        setShowFinishModal(false);
        Quizcounter = 0;
        Collectcounter = 0;
        Wrongcounter = 0;
    };

    const NextQuiz = () => {
        props.setShowModal(false);
        if (props.QuestionSum === Quizcounter + 1) {
            setShowFinishModal(true);
        } else {
            Quizcounter++;
        }
    };
    if (props.showFlag === true) {
        if (props.selectAnswer === props.AnswerNumber) {
            Collectcounter++;
            return (
                <>
                    <div id="overlay" style={overlay}>
                        <div id="modalContent" style={modalContent}>
                            <i className="bi bi-circle" style={answercircleicon}></i>
                            <Button onClick={closeModal}>終了する</Button>
                            <Button onClick={NextQuiz}>次の問題</Button>
                        </div>
                    </div>
                </>
            );
        } else {
            Wrongcounter++;
            return (
                <>
                    <div id="overlay" style={overlay}>
                        <div id="modalContent" style={modalContent}>
                            <i className="bi bi-x" style={answericon}></i>
                            <Button onClick={closeModal}>終了する</Button>
                            <Button onClick={NextQuiz}>次の問題</Button>
                        </div>
                    </div>
                </>
            );
        }
    } else {
        return (
            <>
                <FinishModal show={showFinishModal} setShow={setShowFinishModal} handleClose={FinishModalhandleClose} />
            </>
        );
    }
};

export default QuizAnswer;

// CSS

const answericon: React.CSSProperties = {
    position: "fixed",
    fontSize: "20rem",
    top: "6%",
    zIndex: -1,
    color: "red",
};

const answercircleicon: React.CSSProperties = {
    position: "fixed",
    fontSize: "10rem",
    fontWeight: "bold",
    top: "20%",
    zIndex: -1,
    color: "red",
};

const modalContent: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",

    padding: "10px",
    borderRadius: "3px",
};

const overlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
