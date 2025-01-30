import "./About.css";
import photo from "/images/photo.jpg";

const About = () => {
    return (
      <section id="about" className="section">
       <h3> HI</h3>
        <div className="about-content">
        <img src={photo} alt="Photo" className="about-photo" />
          <p>Im a Back-End Developer with four years of specialized education in client-server application development. I have extensive experience in creating scalable, secure, and efficient solutions. Passionate about problem-solving, learning new technologies, and contributing to impactful projects.</p>
        </div>
      </section>
    );
};

export default About;
