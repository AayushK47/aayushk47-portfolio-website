import styles from './Experience.module.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Saama Technologies",
      location: "Pune, MH",
      position: "Software Engineer",
      duration: "Oct 2023 – Present",
      description: "Saama Technologies is a software company that uses AI-powered data analytics to help pharmaceutical and life sciences companies develop drugs and treatments faster.",
      achievements: [
        "Built and Optimized Restful APIs using Express and PostgreSQL, including a paginated API for large Datasets (> 10,000 records) and a dedicated API to export section-level customer data, improving data accessibility and reducing client-side load by ~90%.",
        "Developed reusable dynamic UI components in React, including custom date pickers and data visualizations, and implemented a 'single-click filter save' feature to enhance user productivity across multi section dashboard.",
        "Implemented secure authentication workflows using Node.js middleware and PingFederate, enabling robust refresh token handling and ensuring seamless user session continuity.",
        "Automated frontend and backend deployments via GitHub Actions, enabling developer-led rollouts and reducing deployment turnaround time.",
        "Used GitHub Copilot to accelerate development workflows, reduce repetitive coding tasks, and maintain focus on business logic.",
        "Designed usage analytics pipelines with Apache Airflow, AWS CloudWatch Insights, Athena Glue and Quicksight, giving the product team actionable user insights to prioritize feature delivery.",
        "Set up proactive monitoring infrastructure through AWS CloudFormation and CloudWatch alarms to detect critical issues early and boost application reliability.",
        "Mentored junior developers in backend development with Node.js, React and Python and AWS services, guiding them through API design, cloud workflows, and best practices for scalable application development."
      ],
      technologies: ["Node.js", "React", "MySQL", "PostgreSQL", "Athena", "Python", "Apache Airflow", "AWS Lambda", "AWS Athena", "AWS Glue", "AWS Quicksight", "GitHub Actions", "PingFederate", "GitHub Copilot"]
    },
    {
      id: 2,
      company: "Orah - Modern Student Engagement Suite",
      location: "Remote",
      position: "Software Engineer",
      duration: "Aug 2023 - Oct 2023",
      description: "Orah is a holistic student engagement solution encompassing attendance, events, and well-being, enhancing campus experiences.",
      achievements: [
        "Migrated legacy APIs to the new system to ensure better code maintainability.",
        "Collaborated on the development of platform features and seamlessly integrated student platforms with the Orah app.",
        "Analyzed, debugged, and resolved bugs and issues reported by clients.",
        "Engaged in multiple sprint ceremonies."
      ],
      technologies: ["TypeScript", "Express", "Node.js", "React", "PostgreSQL"]
    },
    {
      id: 3,
      company: "Squareboat",
      location: "Gurugram, HR",
      position: "Software Engineer",
      duration: "Mar 2022 – Jul 2023",
      description: "Squareboat, leveraging its tech expertise, aids startups and MNCs in crafting beautiful, scalable digital products, driving positive change one product at a time.",
      achievements: [
        "Analyzed client product requirements, designed scalable databases, and developed backend services, integrating third-party packages for enhanced functionality in over 5 projects.",
        "Influenced diverse projects including Finemake, Hudle, TV App, Healify, and Hero Vired across various technology stacks.",
        "Finemake: Engineered a B2B e-commerce app, facilitating the purchase of highly customizable interior design hardware using Node.js, Nest.js, React, AWS Lambda, SQS, and Postgres.",
        "Hudle: Played a pivotal role in developing a sports venue booking app, currently serving 1000-5000 daily active users, with a forthcoming leaderboard feature using Node.js, Nest.js, AWS Lambda, SQS, and MySQL.",
        "TV App: Created a Flutter app for Android TVs, facilitating remote image slideshow management and broadcasting crucial information to 100+ company personnel using Node.js, Nest.js, React.js, TypeScript, Flutter, AWS Lambda, and Postgres.",
        "Healify: Crafted an exercise admin panel, enabling physiotherapists to add exercises and configure joint angles for virtual sessions resulting in a 25% improvement in patient adherence to treatment plans using Python, FastAPI, Next.js, TypeScript, AWS Lambda, AWS SQS, and Postgres.",
        "Hero Vired: Optimized backend with a Go-based middle tier which led to a 98% improvement in response time and programmed an internal service desk tool for an ed-tech platform using Node.js, Express.js, Golang, React, TypeScript, Postgres, and Redis.",
        "Mentored 3 interns (recent graduates) in Node.js, Nest.js and TypeScript, providing hands-on guidance from setup to production-grade feature development and helping them transition from academic to industry workflows."
      ],
      technologies: ["Node.js", "Nest.js", "React", "TypeScript", "Flutter", "Python", "FastAPI", "Next.js", "Golang", "Express.js", "AWS Lambda", "AWS SQS", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      id: 4,
      company: "Tata Consultancy Services",
      location: "Remote",
      position: "Assistant System Engineer",
      duration: "Jan 2021 – Mar 2022",
      description: "Tata Consultancy Services, headquartered in Mumbai, is a global IT services and consulting firm that leverages technology and business collaboration to foster change.",
      achievements: [
        "Developed record-level audit functionality in a legacy Java/Spring Boot application by implementing database triggers and procedures to automatically capture create, update and delete actions with user identity and timestamps.",
        "Delivered front-end enhancements, including adding dynamic form fields and updating UI components enhancing user experience.",
        "Patched the Log4j vulnerability (CVE-2021-44228), ensuring application safety and compliance across production environments.",
        "Analyzed and documented a critical performance issue affecting 200+ concurrent users, and suggested architectural changes to improve scalability and user experience.",
        "Supported 200+ users and maintained 100% SLA compliance for service requests."
      ],
      technologies: ["Java", "Spring Boot", "Oracle"]
    }
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey in software engineering</p>
        </div>
        
        <div className={styles.experienceTimeline}>
          {experiences.map((exp, index) => {
            const initialAchievements = exp.achievements.slice(0, 2)
            const remainingAchievements = exp.achievements.slice(2)
            
            return (
              <div key={exp.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <div className={styles.companyInfo}>
                      <h4 className={styles.company}>{exp.company}</h4>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                    <span className={styles.duration}>{exp.duration}</span>
                  </div>
                  
                  {/* Description - hidden by default, shown on hover */}
                  <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{exp.description}</p>
                  </div>
                  
                  {/* Initial achievements (always shown) */}
                  <div className={styles.achievements}>
                    <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
                    <ul className={styles.achievementsList}>
                      {initialAchievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Show remaining achievements when expanded */}
                    {remainingAchievements.length > 0 && (
                      <div className={styles.remainingAchievements}>
                        <ul className={styles.achievementsList}>
                          {remainingAchievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex + 2} className={styles.achievementItem}>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Technologies - hidden by default, shown on hover */}
                  <div className={styles.technologiesContainer}>
                    <div className={styles.technologies}>
                      <h5 className={styles.technologiesTitle}>Technologies Used:</h5>
                      <div className={styles.techTags}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience

