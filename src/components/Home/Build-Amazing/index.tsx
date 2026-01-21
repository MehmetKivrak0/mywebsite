import React from 'react'
import Link from 'next/link'
import { getImgPath } from '@/utils/imagePath'
import Trans from '@/components/i18n/Trans'
import References from '@/components/Home/References'
import Stakeholders from '@/components/Home/Stakeholders'
import { GitHubRepo } from '@/types/github'
import TechnologiesCarousel from './TechnologiesCarousel'
import ApplicationsCarousel from './ApplicationsCarousel'
import ProductivityToolsCarousel from './ProductivityToolsCarousel'
import LearningResourcesCarousel from './LearningResourcesCarousel'

// GitHub kullanıcı adını buradan değiştirebilirsin
// Veya .env.local dosyasına GITHUB_USERNAME=MehmetKivrak0 şeklinde ekleyebilirsin
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'MehmetKivrak0'

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4&type=all`,
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
      .slice(0, 4) // İlk 4 projeyi al (2x2 grid için)
  } catch (error) {
    console.error('GitHub repos çekilirken hata:', error)
    return []
  }
}

// Dil bazlı icon seçimi için helper fonksiyon
function getLanguageIcon(language: string | null): string {
  if (!language) return getImgPath('/images/build-amazing/coded.svg')
  
  const languageIcons: Record<string, string> = {
    'TypeScript': getImgPath('/images/build-amazing/coded.svg'),
    'JavaScript': getImgPath('/images/build-amazing/coded.svg'),
    'Python': getImgPath('/images/build-amazing/amazing.svg'),
    'Java': getImgPath('/images/build-amazing/beautiful-design.svg'),
    'React': getImgPath('/images/build-amazing/coded.svg'),
    'Next.js': getImgPath('/images/build-amazing/coded.svg'),
  }
  
  return languageIcons[language] || getImgPath('/images/build-amazing/coded.svg')
}

const BuildAmazing = async ({ isSpace }: { isSpace: boolean }) => {
  const repos = await fetchGitHubRepos()
  return (
    <>
      <section className={`${isSpace ? '' : ''} dark:bg-darkmode pt-28 md:pt-32 pb-20`}>
        <div className='container flex flex-col gap-10'>
          <div>
            <References />
          </div>
          <div>
            <Stakeholders />
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div
              className='col-span-1 lg:pb-0 pb-7'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <h2 className='text-secondary dark:text-white max-w-420 pb-8'>
                <Trans
                  tr='Projelerimle modern ve kullanıcı odaklı web uygulamaları geliştiriyorum'
                  en='I build modern, user‑focused web applications with my projects'
                />
              </h2>
              <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-408'>
                <Trans
                  tr='Gerçek problemleri çözen, performanslı ve ölçeklenebilir web projeleri üzerinde çalışıyorum. Aşağıda GitHub üzerindeki bazı çalışmalarımı görebilirsin.'
                  en='I work on performant and scalable web projects that solve real problems. Below you can see some of my work from GitHub.'
                />
              </p>
              <div className='pt-6 flex flex-col gap-y-5'>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    <Trans tr='Modern teknolojiler' en='Modern technologies' />
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    <Trans tr='Gerçek dünyadan problemler' en='Real‑world problems' />
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='text-base font-normal text-SlateBlue dark:text-darktext'>
                    <Trans tr='Sürekli gelişen portföy' en='Continuously growing portfolio' />
                  </span>
                </div>
              </div>
              <div className='mt-8'>
                <Link href='/' className='btn inline-flex items-center gap-3'>
                  <Trans tr='Başla' en='Get Started' />
                  <i className="bg-no-repeat bg-contain w-4 h-3 inline-block" style={{ backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow.svg')})` }}></i>
                </Link>
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
              {repos.length > 0 ? (
                repos.map((repo, index) => (
                  <div
                    key={repo.id}
                    className='group'
                    data-aos='fade-up'
                    data-aos-delay={`${(index + 1) * 200}`}
                    data-aos-duration='1000'>
                    <div className='shadow-light_shadwo dark:shadow-darkmd p-8 rounded-14 group-hover:cursor-pointer'>
                      <i
                        className='bg-no-repeat w-10 h-10 inline-block'
                        style={{ backgroundImage: `url(${getLanguageIcon(repo.language)})` }}></i>
                      <h6 className='text-[22px] leading-[2rem] font-bold text-secondary dark:text-white max-w-200 pt-3'>
                        {repo.name}
                      </h6>
                      <p className='text-14 text-SlateBlue dark:text-darktext font-normal max-w-200 pt-3 pb-7 line-clamp-2'>
                        {repo.description || 'No description available'}
                      </p>
                      <Link
                        href={repo.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary text-base font-normal flex items-center gap-3 transition-all group'>
                        <Trans tr='GitHub' en='GitHub' />
                        <i
                          className='bg-no-repeat bg-contain w-4 h-3 inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1'
                          style={{
                            backgroundImage: `url(${getImgPath('/images/build-amazing/right-arrow-blue.svg')})`,
                          }}></i>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                // Fallback: Eğer repo yoksa veya yüklenemediyse boş state göster
                <div className='col-span-2 text-center py-8'>
                  <p className='text-SlateBlue dark:text-darktext'>
                    <Trans tr='Projeler yükleniyor...' en='Loading projects...' />
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 4 kart: üstte 2, altta 2 - sayfanın ortasında */}
          <div className='mt-12 flex justify-center'>
            <div className='grid gap-4 md:gap-2 lg:gap-8 grid-cols-1 sm:grid-cols-2 w-full max-w-5xl'>
              <TechnologiesCarousel />
              <ApplicationsCarousel />
              <ProductivityToolsCarousel />
              <LearningResourcesCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuildAmazing
