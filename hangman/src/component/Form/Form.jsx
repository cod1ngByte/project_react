import { useState } from "react";
import Inputfield from "../Inputfield/Inputfield";
import Button from "../Button/Button";

export default function Form({
    handleChange,
    handleShowHideClick,
    handleSubmit,
    inputType,
    btnText,
}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Inputfield onChange={handleChange} type={inputType} />
                <div>
                    <Button
                        value={btnText}
                        btnType={"secondary"}
                        onClick={handleShowHideClick}
                    />
                    <Button
                        value={"Submit"}
                        btnType={"primary"}
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </>
    );
}
