import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About | Sustainable",
};

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-24 space-y-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-500/30">
            Mehmet Kıvrak
          </span>
          <span className="text-sm text-slate-300">
            Teknolojiye tutkulu, üretken ve sürekli öğrenen.
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Hakkımda
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Kariyer hikayemin kısa özeti ve bugün nerede durduğuma dair birkaç satır.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl shadow-blue-500/5 backdrop-blur">
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-100">
            <p>
              Mehmet Kıvrak, 4 Şubat 2002 tarihinde doğdu. Afyon Kocatepe Üniversitesi Bayat MYO Veteriner Teknikerliği bölümünü 2024 yılında okul birinciliği ile tamamladı. Kariyerini teknoloji alanında şekillendirme kararı alarak Emirdağ MYO’da başladığı Bilgisayar Programcılığı eğitimine, yatay geçiş yaptığı Manisa Celal Bayar Üniversitesi Teknik Bilimler MYO’da devam etmektedir.
            </p>
            <p>
              Öğrenimi boyunca okul bünyesindeki XRlab bünyesinde birçok projede yer almış; okulun kullanımı için "Bilgisayar Kataloğu" ve "Laboratuvar Kontrol Sistemi" projelerini hayata geçirerek web geliştirme alanında deneyim kazanmıştır. Ayrıca, Karşıyaka Kolektif Girişimcilik Merkezi'nde "Yeşil Eksen" projesi ile girişimci olarak kabul edilmiştir.
            </p>
            <p>
              Şu anda güncel makale ve kaynaklarla kendini geliştirmeye devam eden Mehmet, Instagram üzerinden öğrendiği bilgileri paylaşarak bir network oluşturmakta ve aktif olarak freelance projeler üretmektedir.
            </p>
          </div>
        </div>

        <div className="space-y-5 pt-4 sm:pt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Topluluklarda Görevler</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Yönetim Ekibi Üyesi',
                org: 'Oyun Tasarımı ve Geliştiricileri Topluluğu',
                type: 'Tam zamanlı',
                date: 'Eki 2025 - Halen • 4 ay',
                place: 'Manisa, Türkiye • Ofisten',
                skills: ['HTML5', 'Responsive Web Design'],
              },
              {
                title: 'Gönüllü Stajyer',
                org: 'XRLab',
                type: 'Stajyer',
                date: 'Ağu 2025 - Eyl 2025 • 2 ay',
                place: 'Manisa, Türkiye • Ofisten',
                skills: ['HTML5', 'Responsive Web Design'],
              },
              {
                title: 'MCBÜ Teknofest Kulübü Görsel Tasarım Ekip üyesi',
                org: 'MCBÜ Teknofest Topluluğu',
                type: 'Tam zamanlı',
                date: 'Mar 2025 - Eyl 2025 • 7 ay',
                place: 'Manisa, Türkiye • Uzaktan',
                skills: ['Grafik Tasarımı', 'Canva'],
              },
              {
                title: 'Veri Topluluğu Medya Tasarım Ekip Üyesi',
                org: 'Veri Topluluğu',
                type: 'Tam zamanlı',
                date: 'Kas 2024 - Eyl 2025 • 11 ay',
                place: 'Manisa, Türkiye • Ofisten',
                skills: ['Grafik Tasarımı', 'Canva'],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-lg shadow-blue-500/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400/30"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-200">{item.org} • {item.type}</p>
                  <p className="text-sm text-slate-300">{item.date}</p>
                  <p className="text-sm text-slate-300">{item.place}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100 ring-1 ring-inset ring-blue-500/20"
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