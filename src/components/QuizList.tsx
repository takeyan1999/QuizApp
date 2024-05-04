import React from "react";

import { Quizcounter } from "./AnswerModal";
import { AnswerListinterface } from "./QuizBody";

interface QuizListProps {
    choice: string;
    AnswerList: AnswerListinterface[];
}

const QuizList = (props: QuizListProps) => {
    if (props.choice === "select1") {
        return <>{props.AnswerList[Quizcounter].select1}</>;
    } else if (props.choice === "select2") {
        return <>{props.AnswerList[Quizcounter].select2}</>;
    } else if (props.choice === "select3") {
        return <>{props.AnswerList[Quizcounter].select3}</>;
    } else if (props.choice === "select4") {
        return <>{props.AnswerList[Quizcounter].select4}</>;
    } else if (props.choice === "quiztitle") {
        return <>{props.AnswerList[Quizcounter].title}</>;
    }

    return <></>;
};

export default QuizList;
