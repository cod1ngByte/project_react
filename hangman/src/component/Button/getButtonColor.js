export default function getButtonColor(btnColor) {
    if (btnColor === "primary") {
        return `bg-blue-600`;
    } else if (btnColor === "secondary") {
        return `bg-amber-600`;
    }
}
