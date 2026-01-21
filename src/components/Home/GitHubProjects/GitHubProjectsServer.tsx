import { GitHubRepo } from '@/types/github'
import GitHubProjectsClient from './GitHubProjectsClient'

// GitHub kullanıcı adını buradan değiştirebilirsin
// Veya .env.local dosyasına GITHUB_USERNAME=MehmetKivrak0 şeklinde ekleyebilirsin
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'MehmetKivrak0'

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=all`,
      {
        next: { revalidate: 3600 }, // 1 saatte bir yenile (3600 saniye)
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    )

    if (!response.ok) {
      console.error('GitHub API hatası:', response.status, response.statusText)
      return []
    }

    const repos: GitHubRepo[] = await response.json()

    // Sadece public reposları filtrele ve önemli alanları döndür
    return repos
      .filter((repo) => !repo.name.includes('test') && !repo.name.includes('demo')) // İsteğe bağlı: test/demo reposlarını filtrele
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        created_at: repo.created_at,
        topics: repo.topics || [],
        homepage: repo.homepage,
      }))
      .slice(0, 8) // İlk 8 projeyi al
  } catch (error) {
    console.error('GitHub repos çekilirken hata:', error)
    return []
  }
}

export default async function GitHubProjectsServer() {
  const repos = await fetchGitHubRepos()

  return <GitHubProjectsClient repos={repos} />
}
