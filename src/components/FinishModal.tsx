import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Collectcounter, Wrongcounter } from "./AnswerModal";

interface FinishModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void;
}

function FinishModal(props: FinishModalProps) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>結果発表</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>正解数：{Collectcounter}</p>
                    <p>不正解数：{Wrongcounter}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        終わる
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FinishModal;
