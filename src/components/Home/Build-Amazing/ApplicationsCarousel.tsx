'use client'

import { Icon } from '@iconify/react'

const applications = [
  { name: 'Gemini', iconName: 'logos:google-gemini' },
  { name: 'ChatGPT', iconName: 'logos:openai-icon' },
  { name: 'Photoshop', iconName: 'logos:adobe-photoshop' },
  { name: 'Canva', iconName: 'logos:canva' },
  { name: 'Figma', iconName: 'logos:figma' },
  { name: 'Relume', iconName: 'mdi:shape-outline' },
  { name: 'Notion', iconName: 'logos:notion-icon' },
  { name: 'Obsidian', iconName: 'simple-icons:obsidian' },
]

export default function ApplicationsCarousel() {
  return (
    <div className='rounded-2xl border border-white/10 dark:border-dark_border bg-gradient-to-br from-white/8 via-white/4 to-transparent dark:from-darklight dark:via-darkmode dark:to-darkmode px-3 py-3 sm:px-5 sm:py-4 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)] dark:shadow-darkmd min-w-0 overflow-hidden w-full'>
      <div className='flex flex-col gap-2 mb-3'>
        <div>
          <h3 className='text-base sm:text-lg font-semibold text-white'>
            Kullandığım AI ve tasarım uygulamaları
          </h3>
        </div>
      </div>

      <div
        className='flex flex-wrap items-center gap-3 pb-2'
        data-aos='fade-up'
        data-aos-duration='650'
        data-aos-delay='120'
      >
        {applications.map((app, idx) => (
          <div
            key={`${app.name}-${idx}`}
            className='app-card group relative isolate overflow-hidden flex items-center gap-2 shrink-0 rounded-lg border border-white/12 dark:border-dark_border bg-white/8 dark:bg-darklight px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:shadow-darkmd transition-transform duration-200 hover:-translate-y-[3px] hover:border-LightApricot/60 dark:hover:border-primary/60 hover:shadow-[0_14px_38px_rgba(0,0,0,0.32)]'
            style={{ animationDelay: `${idx * 0.08}s` }}
            data-aos='zoom-in'
            data-aos-duration='520'
            data-aos-delay={160 + idx * 50}
          >
            <Icon icon={app.iconName} className='relative z-10 w-6 h-6 shrink-0' />
            <span className='relative z-10 text-xs font-medium text-white whitespace-nowrap'>{app.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .app-card {
          background-image: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.04) 40%,
              rgba(255, 255, 255, 0.1)
            ),
            radial-gradient(circle at 20% 20%, rgba(255, 200, 150, 0.06), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(120, 180, 255, 0.05), transparent 40%);
        }

        .app-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 12px;
          background: radial-gradient(circle at 15% 30%, rgba(255, 188, 135, 0.12), transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(124, 200, 255, 0.14), transparent 45%);
          opacity: 0.45;
          pointer-events: none;
          z-index: 0;
        }

        .app-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          transform: translateX(-120%);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          transition: transform 0.7s ease, opacity 0.3s ease;
        }

        .app-card:hover::after {
          opacity: 1;
          transform: translateX(110%);
        }
      `}</style>
    </div>
  )
}
