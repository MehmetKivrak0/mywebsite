'use client'
import React from 'react'
import Trans from '@/components/i18n/Trans'

const page = () => {
  const experiences = [
    {
      title: { tr: 'Yönetim Ekibi Üyesi', en: 'Management Team Member' },
      org: { tr: 'Oyun Tasarımı ve Geliştiricileri Topluluğu', en: 'Game Design and Developers Community' },
      type: { tr: 'Tam zamanlı', en: 'Full-time' },
      date: { tr: 'Eki 2025 - Halen • 4 ay', en: 'Oct 2025 - Present • 4 months' },
      place: { tr: 'Manisa, Türkiye • Ofisten', en: 'Manisa, Turkey • On-site' },
      skills: ['HTML5', 'Responsive Web Design'],
    },
    {
      title: { tr: 'Gönüllü Stajyer', en: 'Volunteer Intern' },
      org: { tr: 'XRLab', en: 'XRLab' },
      type: { tr: 'Stajyer', en: 'Intern' },
      date: { tr: 'Ağu 2025 - Eyl 2025 • 2 ay', en: 'Aug 2025 - Sep 2025 • 2 months' },
      place: { tr: 'Manisa, Türkiye • Ofisten', en: 'Manisa, Turkey • On-site' },
      skills: ['HTML5', 'Responsive Web Design'],
    },
    {
      title: { tr: 'MCBÜ Teknofest Kulübü Görsel Tasarım Ekip üyesi', en: 'MCBÜ Teknofest Club Visual Design Team Member' },
      org: { tr: 'MCBÜ Teknofest Topluluğu', en: 'MCBÜ Teknofest Community' },
      type: { tr: 'Tam zamanlı', en: 'Full-time' },
      date: { tr: 'Mar 2025 - Eyl 2025 • 7 ay', en: 'Mar 2025 - Sep 2025 • 7 months' },
      place: { tr: 'Manisa, Türkiye • Uzaktan', en: 'Manisa, Turkey • Remote' },
      skills: ['Grafik Tasarımı', 'Canva'],
    },
    {
      title: { tr: 'Veri Topluluğu Medya Tasarım Ekip Üyesi', en: 'Data Community Media Design Team Member' },
      org: { tr: 'Veri Topluluğu', en: 'Data Community' },
      type: { tr: 'Tam zamanlı', en: 'Full-time' },
      date: { tr: 'Kas 2024 - Eyl 2025 • 11 ay', en: 'Nov 2024 - Sep 2025 • 11 months' },
      place: { tr: 'Manisa, Türkiye • Ofisten', en: 'Manisa, Turkey • On-site' },
      skills: ['Grafik Tasarımı', 'Canva'],
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-darkmode dark:via-darkmode dark:to-darkmode">
      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-24 space-y-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1 text-sm font-medium text-primary dark:text-primary ring-1 ring-inset ring-primary/30 dark:ring-primary/30">
            Mehmet Kıvrak
          </span>
          <span className="text-sm text-SlateBlue dark:text-darktext">
            <Trans tr="Teknolojiye tutkulu, üretken ve sürekli öğrenen." en="Passionate about technology, productive and continuously learning." />
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-secondary dark:text-white">
            <Trans tr="Hakkımda" en="About Me" />
          </h1>
          <p className="text-lg text-SlateBlue dark:text-darktext max-w-3xl">
            <Trans tr="Kariyer hikayemin kısa özeti ve bugün nerede durduğuma dair birkaç satır." en="A brief summary of my career story and where I stand today." />
          </p>
        </div>

        <div className="rounded-2xl border border-BorderLine dark:border-dark_border bg-AliceBlue dark:bg-darklight p-6 sm:p-8 shadow-xl shadow-light-shadwo dark:shadow-darkmd">
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-secondary dark:text-white">
            <p>
              <Trans
                tr="Mehmet Kıvrak, 4 Şubat 2002 tarihinde doğdu. Afyon Kocatepe Üniversitesi Bayat MYO Veteriner Teknikerliği bölümünü 2024 yılında okul birinciliği ile tamamladı. Kariyerini teknoloji alanında şekillendirme kararı alarak Emirdağ MYO'da başladığı Bilgisayar Programcılığı eğitimine, yatay geçiş yaptığı Manisa Celal Bayar Üniversitesi Teknik Bilimler MYO'da devam etmektedir."
                en="Mehmet Kıvrak was born on February 4, 2002. He completed the Veterinary Technician program at Afyon Kocatepe University Bayat Vocational School in 2024 with first place honors. Deciding to shape his career in technology, he started Computer Programming education at Emirdağ Vocational School and continues at Manisa Celal Bayar University Technical Sciences Vocational School through horizontal transfer."
              />
            </p>
            <p>
              <Trans
                tr={'Öğrenimi boyunca okul bünyesindeki XRlab bünyesinde birçok projede yer almış; okulun kullanımı için "Bilgisayar Kataloğu" ve "Laboratuvar Kontrol Sistemi" projelerini hayata geçirerek web geliştirme alanında deneyim kazanmıştır. Ayrıca, Karşıyaka Kolektif Girişimcilik Merkezi\'nde "Yeşil Eksen" projesi ile girişimci olarak kabul edilmiştir.'}
                en={'During his studies, he has been involved in many projects within the XRlab at the school; he gained experience in web development by implementing the "Computer Catalog" and "Laboratory Control System" projects for school use. Additionally, he was accepted as an entrepreneur with the "Green Axis" project at Karşıyaka Collective Entrepreneurship Center.'}
              />
            </p>
            <p>
              <Trans
                tr="Şu anda güncel makale ve kaynaklarla kendini geliştirmeye devam eden Mehmet, Instagram üzerinden öğrendiği bilgileri paylaşarak bir network oluşturmakta ve aktif olarak freelance projeler üretmektedir."
                en="Currently continuing to develop himself with up-to-date articles and resources, Mehmet is building a network by sharing information he learns on Instagram and actively working on freelance projects."
              />
            </p>
          </div>
        </div>

        <div className="space-y-5 pt-4 sm:pt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-primary">
              <Trans tr="Topluluklarda Görevler" en="Roles in Communities" />
            </span>
            <span className="h-px flex-1 bg-BorderLine dark:bg-dark_border" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-BorderLine dark:border-dark_border bg-white dark:bg-darklight p-4 sm:p-5 shadow-lg shadow-light-shadwo dark:shadow-darkmd transition hover:-translate-y-0.5 hover:border-primary/50 dark:hover:border-primary/50"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">
                    <Trans tr={item.title.tr} en={item.title.en} />
                  </h3>
                  <p className="text-sm text-SlateBlue dark:text-darktext">
                    <Trans tr={item.org.tr} en={item.org.en} /> • <Trans tr={item.type.tr} en={item.type.en} />
                  </p>
                  <p className="text-sm text-SlateBlue dark:text-darktext">
                    <Trans tr={item.date.tr} en={item.date.en} />
                  </p>
                  <p className="text-sm text-SlateBlue dark:text-darktext">
                    <Trans tr={item.place.tr} en={item.place.en} />
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-medium text-primary dark:text-primary ring-1 ring-inset ring-primary/20 dark:ring-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page