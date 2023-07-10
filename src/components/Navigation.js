import "./components.css"

export default function Navigation(){
    return (
        <header className="header-content">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="menu-icon">
          ☰
        </label>
        <nav>
          <ul>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about-me">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </nav>
      </header>
    );
}