import getButtonColor from "./getButtonColor";

export default function Button({
    value,
    btnColor = "primary",
    onClick,
    btnType,
}) {
    return (
        <>
            <button
                className={`p-3 w-32 ml-2 rounded-lg ${getButtonColor(
                    btnColor
                )}`}
                onClick={onClick}
                type={btnType}
            >
                {value}
            </button>
        </>
        // bg-indigo-700
        // bg-amber-600
    );
}
