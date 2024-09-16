import { useState } from "react";
import Form from "./Form";

export default function FormContainer() {
    const [inputType, setInputType] = useState("text");
    const [btnText, setBtnText] = useState("hide");

    function handleChange(e) {
        console.log(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleShowHideClick(e) {
        console.log("button show/hide clicked");
        setInputType(inputType === "text" ? "password" : "text");
        setBtnText(btnText === "show" ? "hide" : "show");
    }

    return (
        <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleShowHideClick={handleShowHideClick}
            btnText={btnText}
            inputType={inputType}
        />
    );
}
