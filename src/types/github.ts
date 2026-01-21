export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  topics?: string[]
  homepage?: string | null
}
