'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { boxData } from '../../../app/api/data'
import { getImgPath } from '@/utils/imagePath'
import Trans from '@/components/i18n/Trans'
import { useLanguage } from '@/app/context/LanguageContext'

const WorkGrow = () => {
  const { lang } = useLanguage()
  return (
    <>
      <section className='bg-AliceBlue dark:bg-darklight py-20'>
        <div className='container'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className=''>
              <h2 className='text-secondary dark:text-white max-w-446'>
                <Trans
                  tr='Yaptığım işler: sergi, fotoğraf, çalıştay'
                  en='My work: exhibitions, photography, workshops'
                />
              </h2>
              <p className='text-SlateBlue dark:text-slate-200 text-base font-normal pt-9 pb-2 max-w-408'>
                <Trans
                  tr='Sergi, fotoğraf ve çalıştay projelerimi öne çıkan görseller ve kısa notlarla özetledim.'
                  en='A quick look at exhibition, photography, and workshop projects with brief notes.'
                />
              </p>
            </div>
            {boxData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={
                  index === 1
                    ? "xl:-mt-44 -mt-0 relative"
                    : ''
                }
                style={index === 1 ? { '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties : undefined}
                data-aos='fade-up'
                data-aos-delay={`${(index + 1) * 200}`}
                data-aos-duration='1000'>
                <div className='relative rounded-14 overflow-hidden'>
                  <Image
                    src={item.src}
                    alt={typeof item.alt === 'string' ? item.alt : (lang === 'tr' ? item.alt.tr : item.alt.en)}
                    width={0}
                    height={0}
                    quality={100}
                    layout='responsive'
                    sizes='100vh'
                  />
                </div>
                <div className='pt-4 flex flex-col gap-2'>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className='sm:text-[22px] text-[18px] leading-[1.4] text-secondary dark:text-white font-semibold hover:opacity-80 transition-opacity'>
                    {typeof item.title === 'string' ? item.title : (lang === 'tr' ? item.title.tr : item.title.en)}
                  </Link>
                  {item.description && (
                    <p className='text-SlateBlue dark:text-slate-200 text-sm sm:text-base leading-relaxed'>
                      {typeof item.description === 'string' ? item.description : (lang === 'tr' ? item.description.tr : item.description.en)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkGrow
