import { motion, Variants } from "motion/react";
import { skillCategories, parseYears } from "../data/toolsData";
import "./ToolsSection.css";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const ToolsSection: React.FC = () => {
  // Use imported skill categories from data file
  const categories = skillCategories;

  return (
    <motion.section
      className="tools-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div className="tools-header" variants={sectionVariants}>
        <motion.h2 className="section-title" variants={skillVariants}>
          Tools & Methods
        </motion.h2>
        <motion.p className="section-subtitle" variants={skillVariants}>
          14+ years of expertise across full-stack development, cloud infrastructure, and team leadership
        </motion.p>
      </motion.div>

      <motion.div className="tools-grid" variants={sectionVariants}>
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="tool-card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            style={
              {
                "--card-color": category.color,
              } as React.CSSProperties
            }
          >
            <div className="card-header">
              <div className="card-icon">{category.icon}</div>
              <div className="card-title-group">
                <h3 className="card-title">{category.title}</h3>
                <p className="card-description">{category.description}</p>
              </div>
            </div>

            <motion.div
              className="skills-list"
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, index) => {
                const yearsNum = parseYears(skill.years);
                return (
                  <motion.div
                    key={index}
                    className={`skill-tag ${skill.highlight ? "highlighted" : ""}`}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    {yearsNum && (
                      <span className="skill-experience">
                        <span className="experience-bar">
                          <span
                            className="experience-fill"
                            style={{ width: `${Math.min((yearsNum / 10) * 100, 100)}%` }}
                          ></span>
                        </span>
                        <span className="experience-label">{skill.years}</span>
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;
