import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <>
        <header>
            <div className="title">
                <h1>Lydia Sims</h1>
                <h2>React Web Developer</h2>
            </div>
            <div className="links">
                <Link to={'/welcome'}> <button>Home</button></Link>
                <Link to={'/about-me'}> <button>About Me</button></Link>
                <Link to={'/contact'}> <button>Let's Connect</button></Link>
            </div>
        </header>
        </>
    )
}

export default Header