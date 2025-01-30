import { FaAws, FaBriefcase, FaDatabase, FaDocker, FaFlask, FaGit, FaJava, FaReact, FaWindows } from "react-icons/fa";
import "./Skills.css"
import { SiGradle, SiJenkins, SiJunit5, SiNestjs, SiNginx, SiPostman, SiRabbitmq, SiSpringboot, SiStripe} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GiCircuitry } from "react-icons/gi";
import { LiaLinux } from "react-icons/lia";
import { FaClipboardCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3><FaBriefcase /> Skills</h3> 

       <div className="skills-category green-category">
        <h3>Languages</h3>
        <ul>
          <li><FaJava/> Java, JavaScript, TypeScript</li>
          <li><FaDatabase /> MySQL, PostgreSQL, Redis</li>
        </ul>
      </div>

      <div className="skills-category green-category">
        <h3>Frameworks & Payment Integration</h3>
        <ul>
          <li><SiSpringboot /> Spring Boot, Spring Security, JWT, OAuth2, JDBC, JPA, Webflux, Hibernate</li>
          <li><SiRabbitmq /> RabbitMQ</li>
          <li><SiStripe /> Stripe, Idram, Easypay</li>
        </ul>
      </div>

      <div className="skills-category web-tech">
        <h3>Web Technologies</h3>
        <ul>
          <li><SiPostman /> Postman</li>
          <li><DiNodejs /> Node.js</li>
          <li><FaReact /> React, Redux, Axios</li>
          <li><SiNestjs /> NestJS, TypeORM</li>
          <li><FaDatabase /> HTTP, JSON, RESTful API, HTML, CSS</li>
        </ul>
      </div>

      <div className="skills-category tools-tech">
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
      <div className="skills-category green-category">
        <h3>Methodologies & Testing</h3>
        <ul>
          <li><FaClipboardCheck /> Agile, Scrum</li>
          <li><FaFlask /> TDD</li>
          <li><SiJunit5 /> JUnit</li>
          <li><FaJava /> Mockito</li>
        </ul>
      </div>
      <div className="skills-category green-category">
        <h3>Principles & Architectural Code & Patterns Development</h3>
        <ul>
          <li><GiCircuitry /> SOLID, OOP, AOP, DDD, DAO, MVC, MVP, MVVM, GATEWAY, PROXY, etc.</li>
        </ul>
      </div> 
      <div className="skills-category os">
        <h3>OS</h3>
        <ul>
          <li><LiaLinux /> Linux</li>
          <li><FaWindows /> Windows</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;