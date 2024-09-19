import { Link } from "react-router-dom";
import "./Landing.css"
import Profile from "../Assets/Profile.jpeg"
const LandingPage = () => {
    return (
        <div className="landing">
            <div className="image">
                <img src={Profile} alt="Lydia"></img>
            </div>
            <div className="welcome">
                <div> 
                    <h1>Welcome!</h1>
                </div>
                <div>
                    <Link to={"/Welcome"}><button>Click to Enter</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage