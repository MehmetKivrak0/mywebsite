'use client'

import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/imagePath'

type Technology = {
  name: string
  icon: 'svg' | 'iconify'
  iconPath?: string
  iconName?: string
}

const technologies: Technology[] = [
  { name: 'React', icon: 'svg', iconPath: '/images/documentation/Categories=React.svg' },
  { name: 'Next.js', icon: 'svg', iconPath: '/images/documentation/Categories=Nextjs.svg' },
  { name: 'TypeScript', icon: 'svg', iconPath: '/images/documentation/Categories=Typescript.svg' },
  { name: 'Tailwind CSS', icon: 'svg', iconPath: '/images/documentation/Categories=Tailwind.svg' },
  { name: 'PHP', icon: 'iconify', iconName: 'logos:php' },
  { name: 'Nest.js', icon: 'iconify', iconName: 'devicon:nestjs' },
  { name: 'Node.js', icon: 'iconify', iconName: 'logos:nodejs-icon' },
  { name: 'PostgreSQL', icon: 'iconify', iconName: 'logos:postgresql' },
  { name: 'MSSQL', icon: 'iconify', iconName: 'devicon:mssql-wordmark' },
  { name: 'C# (WinForms)', icon: 'iconify', iconName: 'devicon:csharp' },
]

export default function TechnologiesCarousel() {
  return (
    <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent px-3 py-3 sm:px-5 sm:py-4 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)] min-w-0 overflow-hidden w-full'>
      <div className='flex flex-col gap-2 mb-3'>
        <div>
          <h3 className='text-base sm:text-lg font-semibold text-white'>
            Yazılımda kullandığım teknolojiler
          </h3>
        </div>
      </div>

      <div
        className='flex flex-wrap items-center gap-3 pb-2'
        data-aos='fade-up'
        data-aos-duration='650'
        data-aos-delay='120'
      >
        {technologies.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className='tech-card group relative isolate overflow-hidden flex items-center gap-2 shrink-0 rounded-lg border border-white/12 bg-white/8 px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-[3px] hover:border-LightApricot/60 hover:shadow-[0_14px_38px_rgba(0,0,0,0.32)]'
            style={{ animationDelay: `${idx * 0.08}s` }}
            data-aos='zoom-in'
            data-aos-duration='520'
            data-aos-delay={160 + idx * 50}
          >
            {tech.icon === 'svg' && tech.iconPath ? (
              <i
                className='relative z-10 bg-no-repeat bg-contain w-6 h-6 inline-block shrink-0'
                style={{ backgroundImage: `url(${getImgPath(tech.iconPath)})` }}
              ></i>
            ) : tech.iconName ? (
              <Icon icon={tech.iconName} className='relative z-10 w-6 h-6 shrink-0' />
            ) : null}
            <span className='relative z-10 text-xs font-medium text-white whitespace-nowrap'>{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tech-card {
          background-image: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.04) 40%,
              rgba(255, 255, 255, 0.1)
            ),
            radial-gradient(circle at 20% 20%, rgba(255, 200, 150, 0.06), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(120, 180, 255, 0.05), transparent 40%);
        }

        .tech-card::before {
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

        .tech-card::after {
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

        .tech-card:hover::after {
          opacity: 1;
          transform: translateX(110%);
        }
      `}</style>
    </div>
  )
}
