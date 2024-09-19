import getMaskedArray from "./MaskingUtility";

export default function MaskedText({ wordByUser, guessedLetter }) {
    //it will re-render each time user guess new letter
    console.log("word by user: ", wordByUser);
    console.log("guessed letter: ", guessedLetter);
    const maskedStringArray = getMaskedArray(wordByUser, guessedLetter);
    console.log("masked string array", maskedStringArray);
    return (
        <>
            {maskedStringArray.map((letter, index) => (
                <span key={index} className="inline-block mr-2 text-xl">
                    {letter}
                </span>
            ))}
        </>
    );
}
