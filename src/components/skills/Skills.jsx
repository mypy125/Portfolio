import { FaAws, FaBriefcase, FaDatabase, FaDocker, FaFlask, FaJava, FaLinux, FaNodeJs, FaReact, FaWindows } from "react-icons/fa";
import "./Skills.css"
import { SiApache, SiApachetomcat, SiAxios, SiFlyway, SiGit, SiGradle, SiHibernate, SiJavascript, SiJenkins, SiJunit5, SiLiquibase, 
  SiMysql, SiNestjs, SiNetflix, SiNginx, SiPostgresql, SiPostman, SiRabbitmq, SiRedis, SiRedux, SiSpringboot, SiSpringsecurity, SiStripe, SiTypescript
} from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { FaClipboardCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3><FaBriefcase /> Skills</h3> 

       <div className="skills-category green-category">
        <h3>Languages</h3>
         <ul>
          <li><FaJava style={{ color: '#007396' }} /> Java</li>
          <li><SiJavascript style={{ color: '#F7DF1E' }} /> JavaScript</li>
          <li><SiTypescript style={{ color: '#3178C6' }} /> TypeScript</li>
          <li><SiPostgresql style={{ color: '#336791' }} /> PostgreSQL</li>
          <li><SiMysql style={{ color: '#4479A1' }} /> MySQL</li>
          <li><SiRedis style={{ color: '#D82C20' }} /> Redis</li>
        </ul>
      </div>

      <div className="skills-category green-category">
        <h3>Frameworks & Payment Integration</h3>
        <ul>
          <li><SiSpringboot style={{ color: '#6DB33F' }} /> Spring Boot, Cloud, Load Balancer, Webflux, JDBC, JPA</li>
          <li><SiSpringsecurity style={{ color: '#6DB33F' }} /> Spring Security, JWT, OAuth2</li>
          <li><SiHibernate style={{ color: '#59666C' }} /> Hibernate</li>
          <li><SiNetflix style={{ color: '#E50914' }} /> Netflix, Eureka, Zuul, Hystrix</li>
          <li><SiStripe style={{ color: '#008CDD' }} /> Stripe, Idram, Easypay</li>
          <li><SiRabbitmq style={{ color: '#FF6600' }} /> RabbitMQ</li>
          <li><SiFlyway style={{ color: '#CC0200' }} /> Flyway</li>
          <li><SiLiquibase style={{ color: '#2962FF' }} /> Liquibase</li>
        </ul>
      </div>

      <div className="skills-category web-tech">
        <h3>Web Technologies</h3>
        <ul>
          <li><FaDatabase style={{ color: '#00758F' }} /> HTTP, JSON, RESTful API, HTML, CSS</li>
          <li><SiPostman style={{ color: '#FF6C37' }} /> Postman</li>
          <li><FaNodeJs style={{ color: '#68A063' }} /> Node.js</li>
          <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
          <li><SiRedux style={{ color: '#764ABC' }} /> Redux</li>
          <li><SiAxios style={{ color: '#5A29E4' }} /> Axios</li>
          <li><SiNestjs style={{ color: '#E0234E' }} /> NestJS</li>
        </ul>
      </div>

      <div className="skills-category tools-tech">
        <h3>Tools & Technologies</h3>
        <ul>
        <li><SiGit style={{ color: '#F05032' }} /> Git, CI/CD</li>
          <li><FaAws style={{ color: '#FF9900' }} /> AWS EC2, RDS</li>
          <li><FaDocker style={{ color: '#2496ED' }} /> Docker</li>
          <li><SiJenkins style={{ color: '#D24939' }} /> Jenkins</li>
          <li><SiGradle style={{ color: '#00B4AB' }} /> Gradle, Maven</li>
          <li><SiApache style={{ color: '#FF7E42' }} /> Apache</li>
          <li><SiApachetomcat style={{ color: '#FFD700' }} /> Tomcat</li>
          <li><SiNginx style={{ color: '#00AA4E' }} /> Nginx</li>
        </ul>
      </div>
      <div className="skills-category green-category">
        <h3>Methodologies & Testing</h3>
        <ul>
          <li><FaClipboardCheck style={{ color: '#4CAF50' }} /> Agile, Scrum</li>
          <li><FaFlask style={{ color: '#FFEB3B' }} /> TDD</li>
          <li><SiJunit5 style={{ color: '#25A162' }} /> JUnit</li>
          <li><FaJava style={{ color: '#007396' }} /> Mockito</li>
        </ul>
      </div>
      <div className="skills-category green-category">
        <h3>Principles & Architectural Code & Patterns Development</h3>
        <ul>
          <li><GiCircuitry  style={{ color: '#00FF00' }}/> SOLID, OOP, AOP, DDD, DAO, MVC, MVP, MVVM, GATEWAY, PROXY, etc.</li>
        </ul>
      </div> 
      <div className="skills-category os">
        <h3>OS</h3>
        <ul>
        <li><FaLinux style={{ color: '#FFFFFF' }} /> Linux</li>
        <li><FaWindows style={{ color: '#00A4EF' }} /> Windows</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;