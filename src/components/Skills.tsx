import { useAnalysisResults } from '../hooks/useFirebaseData'
import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import styles from './Skills.module.css'

interface TooltipData {
  content: string
  x: number
  y: number
}

interface ChartItem {
  name: string
  value: number
  percentage: string
  repositoryCount: number
  fileCount: number
  color: string
}

const Skills = () => {
  const { data: analysisResults, isLoading, error } = useAnalysisResults()
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  
  if (isLoading) return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className={styles.loading}>Loading skills from GitHub analysis...</div>
      </div>
    </section>
  )
  
  if (error) return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className={styles.error}>Error loading skills: {error.message}</div>
      </div>
    </section>
  )

  if (!analysisResults) return null

  // Prepare data for stacked bar chart
  const chartData = [
    {
      category: "Programming Languages",
      data: analysisResults.summary.languageBreakdown.slice(0, 6).map(lang => ({
        name: lang.language,
        value: lang.linesOfCode,
        percentage: (lang.linesOfCode / analysisResults.summary.totalLinesOfCode * 100).toFixed(1),
        repositoryCount: lang.repositoryCount,
        fileCount: lang.fileCount,
        color: getLanguageColor(lang.languageKey)
      }))
    },
    {
      category: "Frameworks",
      data: [
        ...analysisResults.frameworks.frontend.map(fw => ({
          name: fw.name || fw.framework || 'Unknown',
          value: fw.repositoryCount || 0,
          percentage: fw.percentageOfRepositories ? 
            parseFloat(fw.percentageOfRepositories).toFixed(1) : 
            ((fw.repositoryCount || 0) / analysisResults.summary.totalRepositories * 100).toFixed(1),
          repositoryCount: fw.repositoryCount || 0,
          fileCount: fw.fileCount || 0,
          color: getFrameworkColor(fw.key || fw.frameworkKey || '')
        })),
        ...analysisResults.frameworks.backend.map(fw => ({
          name: fw.name || fw.framework || 'Unknown',
          value: fw.repositoryCount || 0,
          percentage: fw.percentageOfRepositories ? 
            parseFloat(fw.percentageOfRepositories).toFixed(1) : 
            ((fw.repositoryCount || 0) / analysisResults.summary.totalRepositories * 100).toFixed(1),
          repositoryCount: fw.repositoryCount || 0,
          fileCount: fw.fileCount || 0,
          color: getFrameworkColor(fw.key || fw.frameworkKey || '')
        }))
      ].slice(0, 5)
    },
    {
      category: "Databases & ORMs",
      data: [
        ...analysisResults.databases.orm.slice(0, 3).map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        })),
        ...analysisResults.databases.sql.slice(0, 2).map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        })),
        ...analysisResults.databases.nosql.slice(0, 2).map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        }))
      ].slice(0, 6)
    }
  ]

  const tools = analysisResults.tools.slice(0, 8).map(tool => ({
    name: tool.name,
    category: tool.category,
    usage: tool.percentageOfRepositories
  }))

  const handleSegmentHover = (event: React.MouseEvent, item: ChartItem, category: string) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const tooltipContent = `${item.name}: ${item.percentage}% (${item.repositoryCount} repos, ${item.value.toLocaleString()} ${category === "Programming Languages" ? "lines" : "repos"})`
    
    setTooltip({
      content: tooltipContent,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleSegmentLeave = () => {
    setTooltip(null)
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Based on analysis of {analysisResults.summary.totalRepositories} repositories • 
            {analysisResults.summary.totalLinesOfCode.toLocaleString()} lines of code • 
            {analysisResults.summary.totalFiles.toLocaleString()} files
          </p>
        </div>
        
        <div className={styles.skillsContent}>
          {/* Stacked Bar Charts */}
          <div className={styles.chartsSection}>
            {chartData.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.chartCategory}>
                <h3 className={styles.chartTitle}>{category.category}</h3>
                <div className={styles.stackedBarChart}>
                  <div className={styles.chartBar}>
                    {category.data.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={styles.chartSegment}
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color
                        }}
                        onMouseEnter={(e) => handleSegmentHover(e, item, category.category)}
                        onMouseLeave={handleSegmentLeave}
                      >
                        <span className={styles.segmentLabel}>
                          {parseFloat(item.percentage) >= 8 ? item.name : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.chartLegend}>
                    {category.data.map((item, itemIndex) => (
                      <div key={itemIndex} className={styles.legendItem}>
                        <div 
                          className={styles.legendColor} 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className={styles.legendName}>{item.name}</span>
                        <span className={styles.legendValue}>{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.toolsSection}>
            <h3 className={styles.toolsTitle}>Tools & Technologies</h3>
            <p className={styles.toolsDescription}>
              DevOps, CI/CD, Cloud platforms, and development tools I use
            </p>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div key={index} className={`${styles.toolItem} ${styles[tool.category]}`}>
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={styles.toolUsage}>{tool.usage}%</span>
                  <span className={styles.toolCategory}>{tool.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.githubSection}>
            <h3 className={styles.githubTitle}>GitHub Activity</h3>
            <p className={styles.githubDescription}>
              My contribution activity over the past year
            </p>
            <div className={styles.calendarContainer}>
              <GitHubCalendar 
                username="aayushk47"
                colorScheme="light"
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                hideColorLegend={false}
                showWeekdayLabels={true}
                labels={{
                  totalCount: '{{count}} contributions in the last year'
                }}
              />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div 
            className={styles.tooltip}
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: 'translateX(-50%)'
            }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </section>
  )
}

// Helper functions for colors
const getLanguageColor = (key: string): string => {
  const colors: Record<string, string> = {
    ts: '#3178c6',      // TypeScript blue
    js: '#f7df1e',      // JavaScript yellow
    py: '#3776ab',      // Python blue
    go: '#00add8',      // Go blue
    java: '#ed8b00',    // Java orange
    c: '#555555',       // C gray
    html: '#e34c26',    // HTML orange
    css: '#1572b6',     // CSS blue
    dart: '#00b4ab'     // Dart teal
  }
  return colors[key] || '#6b7280'
}

const getFrameworkColor = (key: string): string => {
  const colors: Record<string, string> = {
    reactNext: '#61dafb',  // React blue
    express: '#000000',     // Express black
    flask: '#000000',       // Flask black
    flutter: '#02569b',     // Flutter blue
    gofiber: '#00add8'      // Go Fiber blue
  }
  return colors[key] || '#8b5cf6'
}

const getDatabaseColor = (key: string): string => {
  const colors: Record<string, string> = {
    postgresql: '#336791',  // PostgreSQL blue
    mysql: '#4479a1',       // MySQL blue
    mongodb: '#47a248',     // MongoDB green
    redis: '#dc382d',       // Redis red
    prisma: '#2d3748',      // Prisma dark
    sequelize: '#52b0e7',   // Sequelize blue
    typeorm: '#f03e2f',     // TypeORM red
    sqlalchemy: '#d71f16',  // SQLAlchemy red
    gorm: '#00add8'         // GORM blue
  }
  return colors[key] || '#6b7280'
}

export default Skills

