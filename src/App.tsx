import React from "react";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

import QuizHeader from "./components/QuizHeader";
import QuizBody from "./components/QuizBody";

// const API_URL = "http://localhost:3000/events/";

const App = () => {
    return (
        <>
            <QuizHeader />
            <QuizBody />
        </>
    );
};

export default App;
