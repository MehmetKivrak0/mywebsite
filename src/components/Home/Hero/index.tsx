/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'
import Trans from '@/components/i18n/Trans'
import { Icon } from '@iconify/react'

const Hero = () => {
  // TODO: Bu linkleri kendi hesaplarınla güncelle
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:me@example.com',
  }

  return (
    <>
      <section
        className="relative overflow-x-clip top-0 bg-primary circalanimat"
        style={{ '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties}
      >
        <div className='banner-shap it-wrapper'>
          <div className='container py-18 md:py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16'>
              {/* Left: intro */}
              <div
                className='relative z-1'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <h1 className='text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl'>
                  Mehmet Kıvrak
                </h1>
                <p className='mt-4 text-white/90 text-lg sm:text-xl font-semibold'>
                  <Trans tr='Projelerimle modern web uygulamaları geliştiriyorum' en='I build modern web applications with my projects' />
                </p>
                <p className='mt-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl'>
                  <Trans
                    tr='GitHub üzerindeki projelerimle; frontend, backend ve tam stack geliştirme deneyimimi gösteriyorum. Gerçek problemleri çözen, performanslı ve ölçeklenebilir web uygulamaları üretmeye odaklanıyorum.'
                    en='Through my GitHub projects, I showcase my frontend, backend and full‑stack experience. I focus on building performant and scalable web applications that solve real problems.'
                  />
                </p>

                <div className='mt-7 flex items-center gap-3'>
                  <a
                    href={socialLinks.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='LinkedIn'
                    className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors'
                  >
                    <Icon icon='mdi:linkedin' className='text-white text-2xl' />
                  </a>
                  <a
                    href={socialLinks.email}
                    aria-label='Email'
                    className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors'
                  >
                    <Icon icon='mdi:email-outline' className='text-white text-2xl' />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Instagram'
                    className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors'
                  >
                    <Icon icon='mdi:instagram' className='text-white text-2xl' />
                  </a>
                </div>
              </div>

              {/* Right: photo */}
              <div
                className='relative z-1 md:justify-self-end w-full max-w-md'
                style={{
                  '--grid-line-bg': `url(${getImgPath('/images/hero/grid-line.png')})`,
                  '--circal-bg': `url(${getImgPath('/images/hero/circal.png')})`,
                } as React.CSSProperties}
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <div className='absolute -top-10 -left-10 h-24 w-24 rounded-full bg-white/10 blur-2xl' />
                <div className='absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-LightApricot/20 blur-2xl' />

                <div className='relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-2xl'>
                  <div className='absolute inset-0 opacity-20' style={{ backgroundImage: `var(--grid-line-bg)` }} />
                  <Image
                    src={getImgPath('/images/photo/196530048.jpg')}
                    alt='Mehmet Kıvrak'
                    width={800}
                    height={1000}
                    className='relative w-full h-auto object-cover'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
