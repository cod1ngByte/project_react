import Inputfield from "../Inputfield/Inputfield";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

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
                        btnColor={"secondary"}
                        btnType={"button"}
                        onClick={handleShowHideClick}
                    />
                    <Button
                        value={"Submit"}
                        btnColor={"primary"}
                        btnType={"submit"}
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            <h1>
                <Link to="/">Home page link</Link>
            </h1>
        </>
    );
}
