export default function Inputfield({ type, onChange }) {
    return (
        <>
            <input
                onChange={onChange}
                className="p-3 border-2 m-2 w-2/3 rounded-md"
                type={type}
                placeholder="enter a word"
            />
        </>
    );
}
