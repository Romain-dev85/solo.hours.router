import "./Header.css"
import { Link } from "react-router-dom";

function Header() {


    return (
        <>
            <header className="headerclass">
                <img src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_960_720.jpg" alt="" />
                <nav>
                    <Link to="/">App</Link>
                    <Link to="/home">HomePage</Link>
                    <Link to="/register">RegisterPage</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;