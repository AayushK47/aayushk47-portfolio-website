import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

// Types based on the actual Firebase data structure
export interface LanguageBreakdown {
  language: string
  linesOfCode: number
  languageKey: string
  repositoryCount: number
  percentageOfTotal: string
  fileCount: number
}

export interface Summary {
  languageBreakdown: LanguageBreakdown[]
  totalRepositories: number
  totalLinesOfCode: number
  totalFiles: number
}

export interface Metadata {
  databases: Record<string, string>
  timestamp: string
  languages: Record<string, string>
  tools: Record<string, string>
  totalRepositories: number
  frameworks: Record<string, string>
}

export interface DatabaseItem {
  percentageOfRepositories: string
  key: string
  repositoryCount: number
  name: string
}

export interface Databases {
  orm: DatabaseItem[]
  sql: DatabaseItem[]
  nosql: DatabaseItem[]
}

export interface Tool {
  name: string
  repositoryCount: number
  key: string
  percentageOfRepositories: string
  category: 'cicd' | 'devops' | 'cloud' | 'monitoring' | 'testing'
}

export interface FrameworkItem {
  percentageOfRepositories?: string
  name: string
  key: string
  repositoryCount?: number
  linesOfCode?: number
  fileCount?: number
  confidence?: 'high' | 'medium' | 'low'
  frameworkKey?: string
  framework?: string
}

export interface Frameworks {
  backend: FrameworkItem[]
  frontend: FrameworkItem[]
}

export interface FirestoreTimestamp {
  type: string
  seconds: number
  nanoseconds: number
}

export interface LastUpdated {
  type: string
  seconds: number
  nanoseconds: number
}

export interface RepositoryLanguage {
  languageKey: string
  language: string
  fileCount: number
  linesOfCode: number
}

export interface RepositoryDatabase {
  database: string
  databaseKey: string
  category: 'sql' | 'nosql' | 'orm'
  confidence: 'high' | 'medium' | 'low'
}

export interface RepositoryTool {
  toolKey: string
  category: string
  confidence: 'high' | 'medium' | 'low'
  tool: string
}

export interface RepositoryFramework {
  framework?: string
  confidence: 'high' | 'medium' | 'low'
  fileCount: number
  linesOfCode: number
  frameworkKey: string
}

export interface RepositoryStatistics {
  totalFiles: number
  totalLinesOfCode: number
}

export interface DetailedResult {
  languages: RepositoryLanguage[]
  frameworks: RepositoryFramework[]
  statistics: RepositoryStatistics
  databases: RepositoryDatabase[]
  repository: string
  tools: RepositoryTool[]
}

export interface AnalysisResults {
  id: string
  metadata: Metadata
  databases: Databases
  tools: Tool[]
  lastUpdated: LastUpdated
  frameworks: Frameworks
  summary: Summary
  detailedResults: DetailedResult[]
}

// Hook to fetch the analysis results document
export const useAnalysisResults = () => {
  return useQuery<AnalysisResults>({
    queryKey: ['firebase', 'analysis-results', 'results'],
    queryFn: async (): Promise<AnalysisResults> => {
      try {
        const docRef = doc(db, 'analysis-results', 'results')
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          console.log({
            id: docSnap.id,
            ...docSnap.data()
          })
          return {
            id: docSnap.id,
            ...docSnap.data()
          } as AnalysisResults
        } else {
          throw new Error('Document "results" not found in "analysis-results" collection')
        }
      } catch (error) {
        console.error('Error fetching analysis results:', error)
        throw new Error('Failed to fetch analysis results')
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
