/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useMemo, useState } from 'react'
import Trans from '@/components/i18n/Trans'
import { getImgPath } from '@/utils/imagePath'

export default function Stakeholders() {
  // TODO: Paydaşları kendi bilgilerinle güncelle
  const stakeholders = [
    {
      name: 'Paydaş Ad Soyad 1',
      logoSrc: getImgPath('/images/photo/196530048.jpg'),
      role: { tr: 'İş Ortağı', en: 'Business Partner' },
      company: { tr: 'Firma A', en: 'Company A' },
    },
    {
      name: 'Paydaş Ad Soyad 2',
      logoSrc: getImgPath('/images/photo/196530048.jpg'),
      role: { tr: 'Çözüm Ortağı', en: 'Solution Partner' },
      company: { tr: 'Firma B', en: 'Company B' },
    },
    {
      name: 'Paydaş Ad Soyad 3',
      logoSrc: getImgPath('/images/photo/196530048.jpg'),
      role: { tr: 'Müşteri', en: 'Client' },
      company: { tr: 'Firma C', en: 'Company C' },
    },
    {
      name: 'Paydaş Ad Soyad 4',
      logoSrc: getImgPath('/images/photo/196530048.jpg'),
      role: { tr: 'Müşteri', en: 'Client' },
      company: { tr: 'Firma D', en: 'Company D' },
    },
    {
      name: 'Paydaş Ad Soyad 5',
      logoSrc: getImgPath('/images/photo/196530048.jpg'),
      role: { tr: 'İş Ortağı', en: 'Business Partner' },
      company: { tr: 'Firma E', en: 'Company E' },
    },
  ] as const

  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(stakeholders.length / itemsPerPage)
  const hasPagination = stakeholders.length > itemsPerPage

  const visibleStakeholders = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return stakeholders.slice(startIndex, endIndex)
  }, [currentPage, stakeholders])

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
    <section className='w-full rounded-3xl border border-white/8 bg-gradient-to-br from-white/6 via-white/3 to-transparent px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.32)]'>
      <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1'>
            <span className='h-1.5 w-1.5 rounded-full bg-emerald-300' />
            <span className='text-[11px] font-medium uppercase tracking-[0.16em] text-white/70'>
              <Trans tr='Birlikte Çalıştığım Kurumlar' en='Teams & Companies I Worked With' />
            </span>
          </div>
          <h3 className='mt-3 text-lg sm:text-xl font-semibold text-white'>
            <Trans tr='Paydaşlar & İş Ortakları' en='Stakeholders & Partners' />
          </h3>
          <p className='mt-1 max-w-xl text-xs sm:text-sm text-white/70'>
            <Trans
              tr='Projelerde birlikte çalıştığım ekipler ve iş ortakları. Logoları örnek olarak yerleştirdim, kendi paydaşlarınla doldurabilirsin.'
              en='Teams and companies I collaborated with on different projects. Replace these sample entries with your own stakeholders.'
            />
          </p>
        </div>

        {hasPagination && (
          <div className='flex items-center gap-2 self-start sm:self-auto'>
            <button
              type='button'
              aria-label='Previous stakeholders page'
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
              aria-label='Next stakeholders page'
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

      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {visibleStakeholders.map((item, idx) => (
          <article
            key={`${item.name}-${idx}`}
            className='group relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/6 px-3 py-3 text-center backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-1 hover:border-LightApricot/70'
          >
            <div className='pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/10 to-transparent opacity-70' />

            <div className='relative mb-2 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10'>
              {item.logoSrc ? (
                <Image
                  src={item.logoSrc}
                  alt={item.name}
                  width={48}
                  height={48}
                  className='h-12 w-12 object-cover'
                />
              ) : (
                <span className='text-sm font-semibold text-white/80'>
                  {item.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((p) => p[0]?.toUpperCase())
                    .join('')}
                </span>
              )}
            </div>

            <p className='relative max-w-[140px] truncate text-[11px] font-semibold text-white'>
              {item.name}
            </p>
            <p className='relative mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60'>
              <Trans tr={item.role.tr} en={item.role.en} />
            </p>
            <p className='relative mt-0.5 text-[10px] text-white/55 line-clamp-1'>
              <Trans tr={item.company.tr} en={item.company.en} />
            </p>
          </article>
        ))}
      </div>

      {hasPagination && (
        <div className='mt-4 flex items-center justify-center gap-1.5'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type='button'
              aria-label={`Go to stakeholders page ${page}`}
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

