import { motion } from 'framer-motion';
import "./Skills.css";
import { FaBriefcase } from 'react-icons/fa';
import { skillsData } from '../../data/skillsData.jsx';

const Skills = () => {
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