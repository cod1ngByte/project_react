import { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default function FormContainer() {
    const [inputType, setInputType] = useState("text");
    const [btnText, setBtnText] = useState("hide");
    const [value, setValue] = useState("");

    const navigator = useNavigate();

    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (value) {
            navigator("/playgame", { state: { wordSelected: value } });
        } else {
            alert("please enter a word");
        }
    }
    function handleShowHideClick(e) {
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
