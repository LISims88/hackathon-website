import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='container'>
            <div className="contact">
                <h1>Contact</h1>
                <h2>Feel free to reach out to me at the following:</h2>
                <h3>
                    <a href="https://www.linkedin.com/in/lydia-sims">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </h3>
                <h3>
                    <a href="mailto:sims.lydia88@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </a>
                </h3>
                <h3>
                    <a href="https://github.com/LISims88"> 
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </h3>
            </div>     
        </div>
    )   
}

export default Contact;
