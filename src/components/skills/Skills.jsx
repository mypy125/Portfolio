import { FaAws, FaBriefcase, FaDatabase, FaDocker, FaFlask, FaJava, FaLinux, FaNodeJs, FaReact, FaWindows } from "react-icons/fa";
import { SiApache, SiApachetomcat, SiAxios, SiExpress, SiFirebase, SiFlyway, SiGit, SiGradle, SiHibernate, SiJavascript, SiJenkins, SiJunit5, SiLiquibase, 
  SiMysql, SiNetflix, SiNginx, SiPostgresql, SiPostman, SiRabbitmq, SiRedis, SiRedux, SiSpringboot, SiSpringsecurity, SiStripe, SiTypescript
} from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { FaClipboardCheck } from "react-icons/fa6";
import { motion } from 'framer-motion';
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      color: '#2a9d8f',
      items: [
        { icon: <FaJava />, name: 'Java', iconColor: '#007396' },
        { icon: <SiJavascript />, name: 'JavaScript', iconColor: '#F7DF1E' },
        { icon: <SiTypescript />, name: 'TypeScript', iconColor: '#3178C6' },
        { icon: <SiPostgresql />, name: 'PostgreSQL', iconColor: '#336791' },
        { icon: <SiMysql />, name: 'MySQL', iconColor: '#4479A1' },
        { icon: <SiRedis />, name: 'Redis', iconColor: '#D82C20' },
      ],
    },
    {
      category: 'Frameworks & Payment Integration',
      color: '#2a9d8f',
      items: [
        { icon: <SiSpringboot />, name: 'Spring Boot, Cloud, Load Balancer, Webflux, JDBC, JPA', iconColor: '#6DB33F' },
        { icon: <SiSpringsecurity />, name: 'Spring Security, JWT, OAuth2', iconColor: '#6DB33F' },
        { icon: <SiHibernate />, name: 'Hibernate', iconColor: '#59666C' },
        { icon: <SiNetflix />, name: 'Netflix, Eureka, Zuul, Hystrix', iconColor: '#E50914' },
        { icon: <SiStripe />, name: 'Stripe, Idram, Easypay', iconColor: '#008CDD' },
        { icon: <SiRabbitmq />, name: 'RabbitMQ', iconColor: '#FF6600' },
        { icon: <SiFirebase />, name: 'Firebase', iconColor: '#FFCA28' }, 
        { icon: <SiFlyway />, name: 'Flyway', iconColor: '#CC0200' },
        { icon: <SiLiquibase />, name: 'Liquibase', iconColor: '#2962FF' },
      ],
    },
    {
      category: 'Web Technologies',
      color: '#ff9f1c',
      items: [
        { icon: <FaDatabase />, name: 'HTTP, JSON, RESTful API, HTML, CSS', iconColor: '#00758F' },
        { icon: <SiPostman />, name: 'Postman', iconColor: '#FF6C37' },
        { icon: <FaNodeJs />, name: 'Node.js', iconColor: '#68A063' },
        { icon: <FaReact />, name: 'React', iconColor: '#61DAFB' },
        { icon: <SiRedux />, name: 'Redux', iconColor: '#764ABC' },
        { icon: <SiExpress />, name: 'Express', iconColor: '#E0234E' },
        { icon: <SiAxios />, name: 'Axios', iconColor: '#5A29E4' },
        
      ],
    },
    {
      category: 'Tools & Technologies',
      color: '#00a8e8',
      items: [
        { icon: <SiGit />, name: 'Git, CI/CD', iconColor: '#F05032' },
        { icon: <FaAws />, name: 'AWS EC2, RDS', iconColor: '#FF9900' },
        { icon: <FaDocker />, name: 'Docker', iconColor: '#2496ED' },
        { icon: <SiJenkins />, name: 'Jenkins', iconColor: '#D24939' },
        { icon: <SiGradle />, name: 'Gradle, Maven', iconColor: '#00B4AB' },
        { icon: <SiApache />, name: 'Apache', iconColor: '#FF7E42' },
        { icon: <SiApachetomcat />, name: 'Tomcat', iconColor: '#FFD700' },
        { icon: <SiNginx />, name: 'Nginx', iconColor: '#00AA4E' },
      ],
    },
    {
      category: 'Methodologies & Testing',
      color: '#2a9d8f',
      items: [
        { icon: <FaClipboardCheck />, name: 'Agile, Scrum', iconColor: '#4CAF50' },
        { icon: <FaFlask />, name: 'TDD', iconColor: '#FFEB3B' },
        { icon: <SiJunit5 />, name: 'JUnit', iconColor: '#25A162' },
        { icon: <FaJava />, name: 'Mockito', iconColor: '#007396' },
      ],
    },
    {
      category: 'Principles & Architectural Code & Patterns Development',
      color: '#2a9d8f',
      items: [
        { icon: <GiCircuitry />, name: 'SOLID, OOP, AOP, DDD, DAO, MVC, MVP, MVVM, GATEWAY, PROXY, etc.', iconColor: '#00FF00' },
      ],
    },
    {
      category: 'OS',
      color: '#ffffff',
      items: [
        { icon: <FaLinux />, name: 'Linux', iconColor: '#fbc531' },
        { icon: <FaWindows />, name: 'Windows', iconColor: '#0078d7' },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2><FaBriefcase /> Skills</h2>
      {skillsData.map((category, index) => (
        <motion.div
          key={index}
          className={`skills-category ${category.color === '#2a9d8f' ? 'green-category' : category.color === '#ff9f1c' ? 'web-tech' : category.color === '#00a8e8' ? 'tools-tech' : 'os'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, i) => (
              <motion.li
                key={i}
                style={{ borderColor: category.color }}
                whileHover={{ scale: 1.05, backgroundColor: category.color, color: '#fff' }}
                transition={{ duration: 0.3 }}
              >
                <span style={{ color: item.iconColor }}>{item.icon}</span>
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};


export default Skills;