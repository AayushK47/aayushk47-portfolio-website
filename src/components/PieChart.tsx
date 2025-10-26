import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import styles from './PieChart.module.css'

interface PieChartData {
  name: string
  value: number
  percentage: string
  repositoryCount: number
  fileCount: number
  color: string
}

interface PieChartProps {
  data: PieChartData[]
  title: string
  onSegmentHover?: (event: React.MouseEvent, item: PieChartData) => void
  onSegmentLeave?: () => void
}

const PieChart = ({ data, title, onSegmentHover, onSegmentLeave }: PieChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 350, height: 350 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        const size = Math.min(width, 350)
        setDimensions({ width: size, height: size })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const { width, height } = dimensions
    const radius = Math.min(width, height) / 2 - 100
    
    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .on('mouseleave', function() {
        if (onSegmentLeave) {
          onSegmentLeave()
        }
      })

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Create pie layout
    const pie = d3.pie<PieChartData>()
      .value(d => parseFloat(d.percentage))
      .sort(null)

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(0)
      .outerRadius(radius)

    // Arc for label positioning (outside the pie)
    const outerArc = d3.arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(radius * 1.1)
      .outerRadius(radius * 1.1)

    const pieData = pie(data)

    // Add path for each slice
    g.selectAll('.slice')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        if (onSegmentHover) {
          onSegmentHover(event as any, d.data)
        }
      })
      .on('mouseout', function() {
        if (onSegmentLeave) {
          onSegmentLeave()
        }
      })

    // Add polylines (connecting lines) for larger slices
    g.selectAll('.polyline')
      .data(pieData)
      .enter()
      .append('polyline')
      .attr('class', 'polyline')
      .attr('stroke', 'var(--text-secondary)')
      .attr('stroke-width', 1)
      .attr('fill', 'none')
      .style('opacity', d => parseFloat(d.data.percentage) >= 5 ? 0.5 : 0)
      .attr('points', d => {
        if (parseFloat(d.data.percentage) < 5) return ''
        
        const pos = arc.centroid(d)
        const outerPos = outerArc.centroid(d)
        const labelPos = outerArc.centroid(d)
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        labelPos[0] = (radius * 1.25) * (midAngle < Math.PI ? 1 : -1)
        
        return [pos, outerPos, labelPos].map(p => p.join(',')).join(' ')
      })

    // Add labels for larger slices (rendered after all paths so they appear on top)
    g.selectAll('.label')
      .data(pieData)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('transform', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        const x = (radius * 1.25) * (midAngle < Math.PI ? 1 : -1)
        const y = outerArc.centroid(d)[1]
        return `translate(${x}, ${y})`
      })
      .attr('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return midAngle < Math.PI ? 'start' : 'end'
      })
      .attr('dy', '0.35em')
      .attr('fill', 'var(--text-primary)')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .style('pointer-events', 'none')
      .text(d => parseFloat(d.data.percentage) >= 5 ? d.data.name : '')

  }, [data, dimensions, onSegmentHover, onSegmentLeave])

  return (
    <div className={styles.pieChartWrapper}>
      <h3 className={styles.chartTitle}>{title}</h3>
      <div ref={containerRef} className={styles.pieChartContainer}>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  )
}

export default PieChart

