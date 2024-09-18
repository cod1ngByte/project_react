/**
 *
 * @param {word which is given by the user and expected to be guessed} originalWord
 * @param {letters which are guessed by the user already} guessedLetters
 * eg : orginal word : 'HUMBLE'
 * guessedLetters : ['H','M','E']
 *
 * return --> ['H','_','M','_','_,'E']
 */
export default function getMaskedArray(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map((char) => char.toUpperCase());

    //in set searching is faster as compared to array
    const guessedLettersSet = new Set(guessedLetters);

    const result = originalWord
        .toUpperCase()
        .split("")
        .map((char) => {
            if (guessedLettersSet.has(char)) {
                return char;
            } else {
                return "_";
            }
        });

    console.log(result);
}
