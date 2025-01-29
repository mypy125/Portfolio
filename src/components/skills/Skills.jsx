import { FaAws, FaDatabase, FaDocker, FaGit, FaJava, FaReact } from "react-icons/fa";
import "./Skills.css"
import { SiGradle, SiJenkins, SiNestjs, SiNginx, SiPostman, SiRabbitmq, SiSpringboot, SiStripe } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GiCircuitry } from "react-icons/gi";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>

       <div className="skills-category">
        <h3>Languages</h3>
        <ul>
          <li><FaJava/> Java, JavaScript, TypeScript</li>
          <li><FaDatabase /> MySQL, PostgreSQL, Redis</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Payment Integration</h3>
        <ul>
          <li><SiSpringboot /> Spring Boot, Spring Security, JWT, OAuth2, JDBC, JPA, Webflux, Hibernate</li>
          <li><SiRabbitmq /> RabbitMQ</li>
          <li><SiStripe /> Stripe, Idram, Easypay</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Web Technologies</h3>
        <ul>
          <li><SiPostman /> Postman</li>
          <li><DiNodejs /> Node.js</li>
          <li><FaReact /> React, Redux, Axios</li>
          <li><SiNestjs /> NestJS, TypeORM</li>
          <li><FaDatabase /> HTTP, JSON, RESTful API, HTML, CSS</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools & Technologies</h3>
        <ul>
          <li><FaGit /> CI/CD, Git</li>
          <li><FaAws /> AWS EC2, RDS</li>
          <li><FaDocker /> Docker</li>
          <li><SiJenkins /> Jenkins</li>
          <li><SiGradle /> Maven, Gradle</li>
          <li><SiNginx /> Nginx, Apache, Tomcat</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Principles & Architectural Code & Patterns Development</h3>
        <ul>
          <li><GiCircuitry /> SOLID, OOP, AOP, DDD, DAO, MVC, MVP, MVVM, GATEWAY, PROXY, etc.</li>
        </ul>
      </div> 

      <div className="skills-category">
        <h3>Methodologies & Testing</h3>
        <ul>
          <li>Agile, Scrum</li>
          <li>TDD, JUnit, Mockito</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

