import './About.css'
import Profile from "../Assets/Profile.jpeg"

function About(){
    return(
        <div className="about">
            <div className="image">
                <img src={Profile} alt='Lydia'></img>
            </div>
            <div className='paragraph'>
                <p>
                    Greetings! I'm Lydia Sims! I am an Alumni for Turing School of Software and Web Design, embarking on an exciting journey into the world of technology. With a robust background in Clinical Counseling Psychology and a Bachelor's in Psychology with a Minor in Philosophy, I bring a unique blend of communication, social impact, and program development expertise to the tech industry. 
                </p>
                <p>
                    In my previous role as a nonprofit professional, I passionately engaged in community upliftment and social program development, contributing to positive changes in disenfranchised communities. These experiences not only honed my commitment to creating meaningful change but also enriched my understanding of human behavior and societal needs.
                </p>
                <p>
                    In 2023, I took a bold step towards personal growth and transitioned into the field of technology. Enrolling at Turing School of Software and Design, I am now dedicated to merging my strong communication skills and passion for social impact with technical proficiency to develop innovative solutions.
                </p>
                <p>
                    I am excited to leverage my diverse background and new technical skills to make a significant impact in the tech world. Let's connect and explore how we can drive positive change together!
                </p>
            </div>

        </div>
    )
}
export default About