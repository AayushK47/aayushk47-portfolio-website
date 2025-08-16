import styles from './Hero.module.css'
import programmingSvg from '../assets/programming.svg'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.greeting}>Hello, I'm</span>
              <span className={styles.name}>Aayush Kurup</span>
              <span className={styles.title}>Fullstack Developer</span>
            </h1>
            <p className={styles.heroDescription}>
            I specialize in designing robust architectures, integrating databases, delivering high-performance microservices, and creating pixel-perfect UIs.
            </p>
            <div className={styles.heroActions}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImagePlaceholder}>
              <img
                src={programmingSvg}
                alt="Programming illustration"
                className={styles.programmingImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

