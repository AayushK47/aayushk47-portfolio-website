import styles from './About.module.css'
import profilePhoto from '../assets/me.jpeg'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.aboutStory}>
              <p>
                Hello, My name is Aayush Kurup. I am a Full-stack Software Engineer from Bhopal, Madhya Pradesh, India,
                currently based in Pune, Maharashtra. I am employed by{" "}
                <a
                  href="https://www.saama.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.textHighlight}
                >
                  Saama Technologies
                </a>{" "}
                as a Software Engineer.
              </p>
              <p>
                I specialize in API development, database design, cloud infrastructure, and frontend integrations. 
                With strong expertise in Node.js with TypeScript, Nest.js, Express.js, React.js, and AWS cloud services, 
                I have experience building highly scalable applications handling thousands of daily active users, 
                optimizing performance, and ensuring reliability. I am passionate about delivering low-latency, 
                high-performance services for data-driven and real-time applications.
              </p>
            </div>
            
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>4.5+</div>
                <div className={styles.highlightText}>Years of Experience</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>20+</div>
                <div className={styles.highlightText}>Projects Delivered</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>10+</div>
                <div className={styles.highlightText}>Frameworks worked with</div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutImage}>
            <div className={styles.aboutImageContainer}>
              <img 
                src={profilePhoto} 
                alt="Me" 
                className={styles.aboutPhoto}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

