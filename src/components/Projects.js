import "./components.css"
import project1 from "./images/Vicious-Cycle_optimized.png"
import project2 from "./images/Vicious-Landing-Page_optimized.png"
import project3 from "./images/Resume-Maker_optimized.png"

export default function Projects(){
    return (
        <section className="projects section-format" id="projects">
            
            <h3>Projects</h3>
            <a className="headings" href="https://wcet.waketech.edu/leellis/WEB140/Vicious-Cycles/index.html" target="_blank">Vicious Cycles</a>

            <p>
                Vicious Cycles was my first big scale project. We had to work as a client
                and designer. The image on the right is only a smaple of what I was able to
                come up with. Looking at the skill set I have now I think it needs a lot of
                tweaks and small updates to make it shine. Though it's still a great first
                attempt I think.
            </p>

            <img src= {project1} alt="A sample screenshot of my project based on a bike shop"/>

            <a className="headings" href="https://wcet.waketech.edu/leellis/WEB110/Landing-Page/" target="_blank">Vicious Cycles Landing Page</a>

            <p>
                The landing page was the sequel to my first Vicious Cycles project. We had
                to make an event page for a fictional company and it just laid itself out
                for me. I challegned myself with this project to try and make a 'one pager'
                esc design. Where everything you needed to know was right on the page with
                no external or internal linkings.
            </p>

            <img src= {project2} alt="A sample screenshot of my project using a bike shop to for m a landin page for an event"/>

            <a className="headings" href="https://wcet.waketech.edu/leellis/WEB115/FinalProject/finalProject.html" target="_blank" >Resume Builder</a>

            <p>
                The Resume Builder waas my final project for my javascript class. Using
                mostly what we learned in class we made a sample page that took a bunch of
                data. Then the page used that data to make a brand new page and formatted it
                like an actually Resume. I encourage clicking the link above to test it out
                for yourself!
            </p>

            <img src={project3} alt="A resume maker using JavaScript to take information"/>

        </section>

    );
}