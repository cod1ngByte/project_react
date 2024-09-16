import { useState } from "react";
import "./App.css";
import Input from "./component/Input/Input";
import Button from "./component/Button/Button";

function App() {
    const [count, setCount] = useState(0);

    function handleInc(e) {
        setCount(count + 1);
    }
    function handleDec(e) {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <Input count={count} />
            <Button value="+" onClick={handleInc} />
            <Button value="-" onClick={handleDec} />
        </>
    );
}

export default App;
