const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ wordByUser, guessedLetter, onLetterClick }) {
    //
    const wordByUserSet = new Set(wordByUser.toUpperCase().split(""));
    const guessedLetterSet = new Set(guessedLetter);

    const buttonStyle = function (alphabet) {
        if (guessedLetterSet.has(alphabet)) {
            return wordByUserSet.has(alphabet) ? "bg-green-500" : "bg-red-500";
        } else {
            return "bg-blue-500";
        }
    };

    function handleLetterClick(e) {
        const charOfTheLetter = e.target.value;
        onLetterClick?.(charOfTheLetter);
    }
    // const buttons = ALPHABETS.map((alphabet) => {
    //     return <button key={`${alphabet}`}>{alphabet}</button>;
    // });
    // return <>{buttons}</>;
    return (
        <>
            {ALPHABETS.map((alphabet) => (
                <button
                    key={`button-${alphabet}`}
                    value={alphabet}
                    onClick={handleLetterClick}
                    disabled={guessedLetterSet.has(alphabet)}
                    className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
                        alphabet
                    )}`}
                >
                    {alphabet}
                </button>
            ))}
        </>
    );
}

export default LetterButtons;
