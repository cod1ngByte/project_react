import getButtonColor from "./getButtonColor";

export default function Button({ value, btnType = "primary", onClick }) {
    return (
        <>
            <button
                className={`p-3 w-32 ml-2 rounded-lg ${getButtonColor(
                    btnType
                )}`}
                onClick={onClick}
            >
                {value}
            </button>
        </>
        // bg-indigo-700
        // bg-amber-600
    );
}
