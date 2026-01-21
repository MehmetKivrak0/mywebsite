/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import Trans from '@/components/i18n/Trans'
import { getImgPath } from '@/utils/imagePath'

export default function References() {
  // TODO: Referansları kendi bilgilerinle güncelle
  const references = [
    {
      name: 'Referans Ad Soyad 1',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Yazılım Mühendisi', en: 'Software Engineer' },
      company: { tr: 'Şirket Adı A', en: 'Company A' },
      quote: {
        tr: 'Mehmet, iletişimi güçlü ve işi sahiplenen bir geliştirici. Kısa sürede kaliteli çıktılar üretiyor.',
        en: 'Mehmet is a proactive developer with strong communication skills. He delivers quality work quickly.',
      },
    },
    {
      name: 'Referans Ad Soyad 2',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Takım Lideri', en: 'Team Lead' },
      company: { tr: 'Şirket Adı B', en: 'Company B' },
      quote: {
        tr: 'Problemleri hızlı analiz edip pratik çözümler üretiyor. Sürekli öğrenme motivasyonu çok yüksek.',
        en: 'He analyzes problems quickly and ships practical solutions. His learning drive is outstanding.',
      },
    },
    {
      name: 'Referans Ad Soyad 3',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Proje Yöneticisi', en: 'Project Manager' },
      company: { tr: 'Şirket Adı C', en: 'Company C' },
      quote: {
        tr: "Mehmet'in detaylara olan dikkati ve problem çözme yeteneği takdire şayan.",
        en: "Mehmet's attention to detail and problem-solving skills are commendable.",
      },
    },
    {
      name: 'Referans Ad Soyad 4',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'CTO', en: 'CTO' },
      company: { tr: 'Şirket Adı D', en: 'Company D' },
      quote: {
        tr: 'Teknik bilgisi ve takım çalışmasına katkısı mükemmel. Projelerde güvenilir bir ortak.',
        en: 'His technical knowledge and team collaboration are excellent. A reliable partner on projects.',
      },
    },
    {
      name: 'Referans Ad Soyad 5',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Senior Developer', en: 'Senior Developer' },
      company: { tr: 'Şirket Adı E', en: 'Company E' },
      quote: {
        tr: 'Kod kalitesi ve best practice yaklaşımı örnek alınacak seviyede.',
        en: 'His code quality and best practices approach are exemplary.',
      },
    },
    {
      name: 'Referans Ad Soyad 6',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Frontend Lead', en: 'Frontend Lead' },
      company: { tr: 'Şirket Adı F', en: 'Company F' },
      quote: {
        tr: 'Modern teknolojilere adaptasyonu hızlı ve sürekli öğrenmeye açık.',
        en: 'He adapts quickly to modern technologies and is always open to learning.',
      },
    },
  ] as const

  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(references.length / itemsPerPage)
  const hasPagination = references.length > itemsPerPage

  const visibleRefs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return references.slice(startIndex, endIndex)
  }, [currentPage, references])

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

  return (
    <section className='w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]'>
      <div className='flex flex-col gap-3 mb-5 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1'>
            <span className='h-1.5 w-1.5 rounded-full bg-LightApricot' />
            <span className='text-[11px] font-medium uppercase tracking-[0.16em] text-white/70'>
              <Trans tr='Geri Bildirimler' en='Testimonials' />
            </span>
          </div>
          <h3 className='mt-3 text-lg sm:text-xl font-semibold text-white'>
            <Trans tr='Benimle Çalışanlardan Referanslar' en='References from People I Worked With' />
          </h3>
          <p className='mt-1 text-xs sm:text-sm text-white/70 max-w-xl'>
            <Trans
              tr='Ekip arkadaşlarım ve yöneticilerim, çalışma disiplinim ve problem çözme yaklaşımım hakkında ne söylüyor?'
              en='What do teammates and managers say about my work ethic and problem‑solving approach?'
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
        {visibleRefs.map((ref, idx) => (
          <article
            key={`${ref.name}-${idx}`}
            className='group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-4 sm:p-5 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 hover:border-LightApricot/70'
            style={{ aspectRatio: '1 / 1' }}
          >
            <div className='pointer-events-none absolute -right-2 -top-1 h-16 w-16 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-60 blur-xl' />
            <div className='pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/12'>
              <Icon icon='mdi:format-quote-close' className='text-white/75 text-lg' />
            </div>

            <div className='relative flex items-start gap-3 pb-3'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10'>
                {ref.avatarSrc ? (
                  <Image
                    src={ref.avatarSrc}
                    alt={ref.name}
                    width={40}
                    height={40}
                    className='h-10 w-10 object-cover'
                  />
                ) : (
                  <span className='text-xs font-semibold text-white/80'>
                    {ref.name
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((p) => p[0]?.toUpperCase())
                      .join('')}
                  </span>
                )}
              </div>
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-semibold text-white'>{ref.name}</p>
                <p className='mt-1 text-[11px] text-white/75 line-clamp-2'>
                  <Trans tr={ref.title.tr} en={ref.title.en} />
                  <span className='text-white/35'>{' • '}</span>
                  <Trans tr={ref.company.tr} en={ref.company.en} />
                </p>
              </div>
            </div>

            <p className='relative mt-1 flex-1 text-[11px] leading-relaxed text-white/80 line-clamp-6'>
              <Trans tr={ref.quote.tr} en={ref.quote.en} />
            </p>
          </article>
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

