import "./About.css";

const About = () => {
    return (
      <section id="about" className="section">
        <h3>About Me</h3>
        <div className="about-content">
          <img src="src/assets/images/photo.jpg" alt="Your Photo" className="about-photo" />
          <p>Im a Back-End Developer with four years of specialized education in client-server application development. I have extensive experience in creating scalable, secure, and efficient solutions. Passionate about problem-solving, learning new technologies, and contributing to impactful projects.</p>
        </div>
      </section>
    );
};

export default About;
