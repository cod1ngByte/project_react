import { Link, useLocation } from "react-router-dom";
import MaskedText from "../component/MaskedText/MaskedText";
import LetterButtons from "../component/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../component/Hangman/Hangman";

export default function Playgame() {
    const location = useLocation();
    // console.log(location);
    // console.log(location.state.wordSelected);

    const [guessedLetter, setGuessedLetter] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (
            location.state.wordSelected.toUpperCase().split("").includes(letter)
        ) {
            console.log("correct");
        } else {
            console.log("incorrect");
            setStep(step + 1);
        }
        setGuessedLetter([...guessedLetter, letter]);
    }

    return (
        <>
            <h1>Play Game Page</h1>
            <Link to="/">Home page link</Link>
            <h2>
                <MaskedText
                    wordByUser={location.state.wordSelected}
                    guessedLetter={guessedLetter}
                />
            </h2>
            <LetterButtons
                wordByUser={location.state.wordSelected}
                guessedLetter={guessedLetter}
                onLetterClick={handleLetterClick}
            />
            <Hangman step={step} />
        </>
    );
}
