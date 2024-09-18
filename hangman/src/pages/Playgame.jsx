import { Link, useLocation } from "react-router-dom";

export default function Playgame() {
    const location = useLocation();
    console.log(location);
    console.log(location.state.wordSelected);
    return (
        <>
            <h1>Play Game Page</h1>
            <Link to="/">Home page link</Link>
        </>
    );
}
