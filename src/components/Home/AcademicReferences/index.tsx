'use client'

import Image from 'next/image'
import Trans from '@/components/i18n/Trans'
import { getImgPath } from '@/utils/imagePath'

export default function AcademicReferences() {
  // TODO: Hocaların bilgilerini kendi bilgilerinle güncelle
  const professors = [
    {
      name: 'Barış ÇUKURBAŞI',
      avatarSrc: getImgPath('/images/photo/hoca/br.jpg'),
      title: { tr: 'Doç. Dr.', en: 'Assoc. Prof. Dr.' },
      status: {
        tr: 'Bilgisayar Teknolojileri Bölüm Başkanı',
        en: 'Head of Computer Technologies Department',
      },
    },
    {
      name: 'Semih GENÇAY',
      avatarSrc: getImgPath('/images/photo/hoca/sm.jpg'),
      title: { tr: 'Öğr. Gör. Dr.', en: 'Lecturer Dr.' },
      status: {
        tr: 'Manisa Teknik Bilimler MYO Müdür Yardımcısı',
        en: 'Deputy Director of Manisa Technical Sciences Vocational School',
      },
    },
    {
      name: 'Fatma TOPUZ ERYÜRÜK',
      avatarSrc: getImgPath('/images/photo/hoca/ftm.jpg'),
      title: { tr: 'Öğr. Gör.', en: 'Lecturer' },
      status: {
        tr: 'Bilgisayar Teknolojileri Bölüm Başkanı',
        en: 'Head of Computer Technologies Department',
      },
    },
  ] as const

  return (
    <section className='w-full rounded-2xl border border-white/10 dark:border-dark_border bg-gradient-to-br from-white/8 via-white/4 to-transparent dark:from-darklight dark:via-darkmode dark:to-darkmode px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)] dark:shadow-darkmd'>
      <div className='flex flex-col gap-3 mb-5'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border border-white/15 dark:border-dark_border bg-white/8 dark:bg-darklight px-3 py-1'>
            <span className='h-1.5 w-1.5 rounded-full bg-blue-400' />
            <span className='text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 dark:text-darktext'>
              <Trans tr='Akademik Referanslar' en='Academic References' />
            </span>
          </div>
          <h3 className='mt-3 text-lg sm:text-xl font-semibold text-white'>
            <Trans tr='Akademik Referanslar (Hocalarım)' en='Academic References (My Professors)' />
          </h3>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {professors.map((prof, idx) => (
          <article
            key={`${prof.name}-${idx}`}
            className='group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/12 dark:border-dark_border bg-white/8 dark:bg-darklight p-5 sm:p-6 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.35)] dark:shadow-darkmd transition-transform duration-200 hover:-translate-y-1 hover:border-blue-400/70 dark:hover:border-primary/70'
          >
            <div className='flex flex-col items-center text-center'>
              <div className='flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 dark:border-dark_border bg-white/10 dark:bg-darkmode mb-4'>
                {prof.avatarSrc ? (
                  <Image
                    src={prof.avatarSrc}
                    alt={prof.name}
                    width={96}
                    height={96}
                    className='h-full w-full object-cover'
                  />
                ) : (
                  <span className='text-lg sm:text-xl font-semibold text-white/80'>
                    {prof.name
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((p) => p[0]?.toUpperCase())
                      .join('')}
                  </span>
                )}
              </div>
              
              <p className='text-sm sm:text-base font-semibold text-white mb-1'>
                <Trans tr={prof.title.tr} en={prof.title.en} /> {prof.name}
              </p>
              
              <p className='text-xs sm:text-sm text-white/70'>
                <Trans tr={prof.status.tr} en={prof.status.en} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
