export default function getButtonColor(btnType) {
    if (btnType === "primary") {
        return `bg-blue-600`;
    } else if (btnType === "secondary") {
        return `bg-amber-600`;
    }
}
