import "./components.css"
import protrait from "./images/Self_Portrait_optimized.png"

export default function About(){
    return (
        <section className="about-me section-format" id="about-me">
            <h3>About Me</h3>
            
            <p>
                I am Landon Ellis. I am currently at WakeTech Community College studying in
                Web Development. Though I focus on Front-End Development now I also have
                plently of experience with things like database langauges such as Oracle,
                and other Back-End languages too like C++, Java, Python, and PHP.
            </p>

            <img src={protrait} alt="Using a picrew (a character maker) I made a self protrait of myself (Credit in image!)"/>
        </section>

    );
}