'use client'

import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import { GitHubRepo } from '@/types/github'
import Trans from '@/components/i18n/Trans'
import Link from 'next/link'

interface GitHubProjectsClientProps {
  repos: GitHubRepo[]
}

export default function GitHubProjectsClient({ repos }: GitHubProjectsClientProps) {
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(repos.length / itemsPerPage)
  const hasPagination = repos.length > itemsPerPage

  const visibleRepos = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return repos.slice(startIndex, endIndex)
  }, [currentPage, repos])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Eğer repo yoksa boş state göster
  if (repos.length === 0) {
    return (
      <section className='w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]'>
        <div className='text-center py-8'>
          <p className='text-white/70 text-sm'>
            <Trans tr='Projeler yükleniyor...' en='Loading projects...' />
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className='w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]'>
      <div className='flex flex-col gap-3 mb-5 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1'>
            <span className='h-1.5 w-1.5 rounded-full bg-LightApricot' />
            <span className='text-[11px] font-medium uppercase tracking-[0.16em] text-white/70'>
              <Trans tr='Projelerim' en='My Projects' />
            </span>
          </div>
          <h3 className='mt-3 text-lg sm:text-xl font-semibold text-white'>
            <Trans tr='GitHub Projelerim' en='My GitHub Projects' />
          </h3>
          <p className='mt-1 text-xs sm:text-sm text-white/70 max-w-xl'>
            <Trans
              tr='Açık kaynak projelerim ve GitHub üzerindeki çalışmalarım'
              en='My open source projects and work on GitHub'
            />
          </p>
        </div>

        {hasPagination && (
          <div className='flex items-center gap-2 self-start sm:self-auto'>
            <button
              type='button'
              aria-label='Previous page'
              onClick={goPrevPage}
              disabled={currentPage === 1}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-colors ${
                currentPage === 1
                  ? 'border-white/15 bg-white/5 text-white/30 cursor-not-allowed'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Icon icon='mdi:chevron-left' className='text-lg' />
            </button>
            <button
              type='button'
              aria-label='Next page'
              onClick={goNextPage}
              disabled={currentPage === totalPages}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-colors ${
                currentPage === totalPages
                  ? 'border-white/15 bg-white/5 text-white/30 cursor-not-allowed'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Icon icon='mdi:chevron-right' className='text-lg' />
            </button>
          </div>
        )}
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {visibleRepos.map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-4 sm:p-5 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 hover:border-LightApricot/70'
            style={{ aspectRatio: '1 / 1' }}
          >
            <div className='pointer-events-none absolute -right-2 -top-1 h-16 w-16 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-60 blur-xl' />
            <div className='pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/12'>
              <Icon icon='mdi:github' className='text-white/75 text-lg' />
            </div>

            <div className='relative flex items-start gap-3 pb-3'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10'>
                <Icon icon='mdi:code-braces' className='text-white/80 text-xl' />
              </div>
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-semibold text-white'>{repo.name}</p>
                {repo.language && (
                  <p className='mt-1 text-[11px] text-white/75 line-clamp-1'>
                    <span className='inline-flex items-center gap-1'>
                      <Icon icon='mdi:code-tags' className='text-xs' />
                      {repo.language}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {repo.description && (
              <p className='relative mt-1 flex-1 text-[11px] leading-relaxed text-white/80 line-clamp-4'>
                {repo.description}
              </p>
            )}

            <div className='mt-3 flex items-center gap-3 text-[10px] text-white/60'>
              {repo.stargazers_count > 0 && (
                <span className='inline-flex items-center gap-1'>
                  <Icon icon='mdi:star' className='text-xs' />
                  {repo.stargazers_count}
                </span>
              )}
              {repo.forks_count > 0 && (
                <span className='inline-flex items-center gap-1'>
                  <Icon icon='mdi:source-fork' className='text-xs' />
                  {repo.forks_count}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {hasPagination && (
        <div className='mt-5 flex items-center justify-center gap-1.5'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type='button'
              aria-label={`Go to page ${page}`}
              onClick={() => goToPage(page)}
              className={`h-7 min-w-7 rounded-full px-2 text-[11px] font-medium transition-colors ${
                currentPage === page
                  ? 'bg-white text-primary'
                  : 'bg-white/8 text-white/80 hover:bg-white/16'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
