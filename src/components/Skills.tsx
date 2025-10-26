import { useAnalysisResults } from '../hooks/useFirebaseData'
import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import PieChart from './PieChart'
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

  // Prepare data for pie charts
  const chartData = [
    {
      category: "Programming Languages",
      data: analysisResults.summary.languageBreakdown.map(lang => ({
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
      ]
    },
    {
      category: "Databases & ORMs",
      data: [
        ...analysisResults.databases.orm.map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        })),
        ...analysisResults.databases.sql.map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        })),
        ...analysisResults.databases.nosql.map(db => ({
          name: db.name,
          value: db.repositoryCount,
          percentage: parseFloat(db.percentageOfRepositories).toFixed(1),
          repositoryCount: db.repositoryCount,
          fileCount: 0,
          color: getDatabaseColor(db.key)
        }))
      ]
    }
  ]

  // Prepare tools data for pie chart
  const toolsData = analysisResults.tools.map(tool => ({
    name: tool.name,
    value: tool.repositoryCount,
    percentage: tool.percentageOfRepositories,
    repositoryCount: tool.repositoryCount,
    fileCount: 0,
    color: getToolColor(tool.category)
  }))

  const handleSegmentHover = (event: React.MouseEvent, item: ChartItem, category: string) => {
    const rect = event.currentTarget.getBoundingClientRect()
    let tooltipContent = ''
    
    if (category === "Programming Languages") {
      tooltipContent = `${item.name} - ${item.percentage}% (${item.repositoryCount} repos, ${item.value.toLocaleString()} lines)`
    } else {
      tooltipContent = `${item.name} - ${item.percentage}% (${item.repositoryCount} / ${analysisResults.summary.totalRepositories} repos)`
    }
    
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
          {/* Pie Charts */}
          <div className={styles.chartsSection}>
            {chartData.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.chartWrapper}>
                <PieChart
                  data={category.data}
                  title={category.category}
                  onSegmentHover={(e, item) => handleSegmentHover(e, item, category.category)}
                  onSegmentLeave={handleSegmentLeave}
                />
              </div>
            ))}
            
            <div className={styles.chartWrapper}>
              <PieChart
                data={toolsData}
                title="Other Tools"
                onSegmentHover={(e, item) => handleSegmentHover(e, item, "Tools")}
                onSegmentLeave={handleSegmentLeave}
              />
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
    py: '#306998',      // Python blue (darker)
    go: '#00add8',      // Go cyan
    java: '#ed8b00',    // Java orange
    c: '#555555',       // C gray
    html: '#e34c26',    // HTML orange-red
    css: '#264de4',     // CSS blue (darker, more distinct)
    dart: '#0175c2'     // Dart blue
  }
  return colors[key] || '#6b7280'
}

const getFrameworkColor = (key: string): string => {
  const colors: Record<string, string> = {
    reactNext: '#61dafb',   // React cyan
    express: '#259dff',     // Express blue (changed from black)
    flask: '#000000',       // Flask black
    flutter: '#02569b',     // Flutter blue
    gofiber: '#00d9ff'      // Go Fiber light cyan (changed to be distinct)
  }
  return colors[key] || '#8b5cf6'
}

const getDatabaseColor = (key: string): string => {
  const colors: Record<string, string> = {
    postgresql: '#336791',  // PostgreSQL blue
    mysql: '#00758f',       // MySQL teal (darker, more distinct)
    mongodb: '#47a248',     // MongoDB green
    redis: '#dc382d',       // Redis red
    prisma: '#2d3748',      // Prisma dark gray
    sequelize: '#52b0e7',   // Sequelize light blue
    typeorm: '#fe0902',     // TypeORM bright red (more distinct)
    sqlalchemy: '#d71f16',  // SQLAlchemy red
    gorm: '#00d4aa'         // GORM teal (changed to be distinct)
  }
  return colors[key] || '#6b7280'
}

const getToolColor = (category: string): string => {
  const colors: Record<string, string> = {
    cicd: '#2088ff',        // Blue
    devops: '#28a745',      // Green
    cloud: '#ff6b35',       // Orange
    monitoring: '#6f42c1',  // Purple
    testing: '#e535ab'      // Pink (changed from orange)
  }
  return colors[category] || '#6b7280'
}

export default Skills

