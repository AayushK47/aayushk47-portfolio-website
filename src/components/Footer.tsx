import styles from './Footer.module.css'
import brandSvg from '../assets/brand.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <img 
                src={brandSvg} 
                alt="Aayush Kurup - Frontend Developer" 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.footerDescription}>
              Frontend Developer & UI/UX Designer creating exceptional digital experiences.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="https://github.com/AayushK47/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/aayushk47/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/AayushK_47" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href="mailto:aayushkurup786@outlook.com">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>&copy; {currentYear} Aayush Kurup. All rights reserved.</p>
          </div>
          <div className={styles.footerLegal}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.separator}>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

