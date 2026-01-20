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
      name: 'Referans Ad Soyad',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Yazılım Mühendisi', en: 'Software Engineer' },
      company: { tr: 'Şirket Adı', en: 'Company' },
      quote: {
        tr: 'Mehmet, iletişimi güçlü ve işi sahiplenen bir geliştirici. Kısa sürede kaliteli çıktılar üretiyor.',
        en: 'Mehmet is a proactive developer with strong communication skills. He delivers quality work quickly.',
      },
    },
    {
      name: 'Referans Ad Soyad',
      avatarSrc: getImgPath('/images/photo/196530048.jpg'),
      title: { tr: 'Takım Lideri', en: 'Team Lead' },
      company: { tr: 'Şirket Adı', en: 'Company' },
      quote: {
        tr: 'Problemleri hızlı analiz edip pratik çözümler üretiyor. Sürekli öğrenme motivasyonu çok yüksek.',
        en: 'He analyzes problems quickly and ships practical solutions. His learning drive is outstanding.',
      },
    },
    // 3+ olursa oklar otomatik aktif olur
    // {
    //   name: 'Referans Ad Soyad',
    //   avatarSrc: getImgPath('/images/photo/196530048.jpg'),
    //   title: { tr: 'Ürün Yöneticisi', en: 'Product Manager' },
    //   company: { tr: 'Şirket Adı', en: 'Company' },
    //   quote: {
    //     tr: 'Kullanıcı odaklı yaklaşımı ve detaylara verdiği önem sayesinde projeye ciddi katkı sağladı.',
    //     en: 'His user-focused mindset and attention to detail made a real impact on the project.',
    //   },
    // },
  ] as const

  const [refIndex, setRefIndex] = useState(0)
  const hasRefNav = references.length > 4
  const visibleRefs = useMemo(() => {
    if (references.length <= 4) return references
    const start = ((refIndex % references.length) + references.length) % references.length
    const out = Array.from({ length: 4 }, (_, i) => references[(start + i) % references.length])
    return out
  }, [refIndex, references])

  const goPrevRef = () => setRefIndex((v) => v - 1)
  const goNextRef = () => setRefIndex((v) => v + 1)

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between gap-4'>
        <h3 className='text-white font-semibold text-lg'>
          <Trans tr='Referanslar' en='References' />
        </h3>
        {hasRefNav && (
          <div className='flex items-center gap-2'>
            <button
              type='button'
              aria-label='Previous reference'
              onClick={goPrevRef}
              className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors'
            >
              <Icon icon='mdi:chevron-left' className='text-white text-2xl' />
            </button>
            <button
              type='button'
              aria-label='Next reference'
              onClick={goNextRef}
              className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors'
            >
              <Icon icon='mdi:chevron-right' className='text-white text-2xl' />
            </button>
          </div>
        )}
      </div>

      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {visibleRefs.map((ref, idx) => (
          <div
            key={`${ref.name}-${idx}`}
            className={[
              'w-full rounded-2xl border border-white/15 bg-white/12 p-5 backdrop-blur-md shadow-lg shadow-black/10',
              // responsive visibility: 1 on mobile, 2 on sm, 3 on lg, 4 on xl
              idx >= 1 ? 'hidden sm:block' : '',
              idx >= 2 ? 'hidden lg:block' : '',
              idx >= 3 ? 'hidden xl:block' : '',
            ].join(' ')}
            style={{ aspectRatio: '1 / 1' }}
          >
            <div className='flex h-full flex-col'>
              <div className='flex items-start justify-between gap-4'>
              <div className='flex items-start gap-3'>
                <div className='h-10 w-10 rounded-full overflow-hidden border border-white/15 bg-white/10 shrink-0'>
                  {ref.avatarSrc ? (
                    <Image
                      src={ref.avatarSrc}
                      alt={ref.name}
                      width={40}
                      height={40}
                      className='h-10 w-10 object-cover'
                    />
                  ) : (
                    <div className='h-10 w-10 flex items-center justify-center text-white/80 text-sm font-semibold'>
                      {ref.name
                        .split(' ')
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((p) => p[0]?.toUpperCase())
                        .join('')}
                    </div>
                  )}
                </div>
                <div>
                  <p className='text-white font-semibold'>{ref.name}</p>
                  <p className='text-white/80 text-sm mt-1'>
                    <Trans tr={ref.title.tr} en={ref.title.en} />
                    <span className='text-white/40'> • </span>
                    <Trans tr={ref.company.tr} en={ref.company.en} />
                  </p>
                </div>
              </div>
              <div className='h-10 w-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center'>
                <Icon icon='mdi:format-quote-close' className='text-white/80 text-xl' />
              </div>
              </div>
              <p className='text-white/85 text-sm leading-relaxed mt-4 line-clamp-6'>
                <Trans tr={ref.quote.tr} en={ref.quote.en} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

