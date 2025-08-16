import styles from './Skills.module.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Git", level: 85 },
        { name: "npm/yarn", level: 80 },
        { name: "REST APIs", level: 80 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "Design & Tools",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 70 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 85 }
      ]
    }
  ]

  const tools = [
    "VS Code", "Webpack", "Vite", "Jest", "ESLint", "Prettier", "Chrome DevTools", "Postman"
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className={styles.skillsContent}>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div 
                          className={styles.skillProgress} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.toolsSection}>
            <h3 className={styles.toolsTitle}>Tools & Technologies</h3>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div key={index} className={styles.toolItem}>
                  <span className={styles.toolName}>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

