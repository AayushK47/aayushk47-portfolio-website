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
        "Designed and implemented CI/CD pipelines using GitHub Actions to fully automate builds, tests, and deployments for Node.js and React applications, eliminating manual deployment steps and improving release consistency.",
        "Integrated secure refresh token flow using PingFederate and Node.js to enhance authentication stability and maintain seamless user sessions.",
        "Automated weekly application usage reports using CloudWatch Insights, Athena, Glue, and QuickSight, enabling the product team to prioritize features based on real user behavior and engagement insights.",
        "Established and maintained data processing pipelines using Airflow, S3, Lambda, Athena and Glue ensuring timely data availability for critical tasks.",
        "Delivered critical bug fixes and feature enhancements in close collaboration with the product team, contributing to improved application stability and user satisfaction.",
        "Established proactive monitoring by provisioning AWS CloudWatch alarms through AWS CloudFormation, enabling early detection of infrastructure issues and improving system reliability."
      ],
      technologies: ["Python", "Node.js", "React", "Apache Airflow", "AWS Lambda", "AWS Athena", "AWS Glue", "AWS Quicksight", "GitHub Actions", "PingFederate"]
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
        "Influenced diverse projects including Finemake (B2B e-commerce), Hudle (sports venue booking), TV App (Flutter), Healify (exercise admin panel), and Hero Vired (ed-tech platform).",
        "Engineered B2B e-commerce app facilitating highly customizable interior design hardware purchases.",
        "Developed sports venue booking app serving 1000-5000 daily active users with forthcoming leaderboard feature.",
        "Created Flutter app for Android TVs enabling remote image slideshow management for 100+ company personnel.",
        "Crafted exercise admin panel resulting in 25% improvement in patient adherence to treatment plans.",
        "Optimized backend with Go-based middle tier achieving 98% improvement in response time."
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
        "Achieved 90% SLA compliance by promptly fulfilling client-raised service requests.",
        "Monitored software for 200+ users, enhancing experience and productivity through root cause analyses, software enhancements, and patches."
      ],
      technologies: ["Java", "Spring Boot"]
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

