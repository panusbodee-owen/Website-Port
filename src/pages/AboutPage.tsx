import { ArrowUpRight, Dot } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '@/components/SectionHeading'
import TopNav from '@/components/TopNav'
import { portfolioLinks, profile } from '@/data/portfolio'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(214,180,128,0.16),transparent_30%),#f7f1e8]">
      <div className="page-grain pointer-events-none absolute inset-0 opacity-50" />
      <TopNav />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <section className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-[rgba(255,252,247,0.78)] p-6 shadow-[0_25px_70px_rgba(28,25,23,0.08)] md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="About"
            title="เรื่องราวของผม"
            description="ผมชอบงานที่ต้องใช้ความคิดเป็นระบบ แต่ยังรักษาความละเมียดของงานภาพและประสบการณ์ผู้ใช้ไว้เสมอ"
          />

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-stone-200/80 bg-white/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                สรุปตัวตน
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                ผมชื่อ {profile.shortName} ({profile.name}) ทำงานในจุดตัดระหว่าง
                การจัดการโปรเจกต์, การออกแบบ UI และการคิดเชิงกระบวนการ
                เพื่อแปลง “ความซับซ้อน” ให้กลายเป็น “ความชัดเจน” ที่ใช้งานได้จริง
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200/80 bg-stone-950 p-6 text-stone-50">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                สิ่งที่ผมเชื่อ
              </p>
              <div className="mt-4 space-y-3">
                {profile.principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm text-stone-200 last:border-b-0"
                  >
                    <Dot size={18} className="text-amber-300" />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-[rgba(255,252,247,0.72)] p-6 md:p-10">
          <h2 className="font-display text-4xl leading-tight text-stone-950 md:text-5xl">
            ทำไมผมถึงทำพอร์ตแบบนี้
          </h2>
          <div className="grid gap-6 text-sm leading-7 text-stone-600 md:grid-cols-2">
            <p>
              ผมอยากให้คนที่เข้ามาอ่านพอร์ต เข้าใจตัวตนและวิธีทำงานของผมได้เร็ว
              แต่ไม่รู้สึกว่า “ยัดข้อมูล” หรือ “พยายามขายตัวเอง” เกินไป
              พอร์ตนี้เลยถูกออกแบบให้มีจังหวะการอ่านแบบ editorial: เงียบ สุขุม
              และเลือกพูดเฉพาะสิ่งที่สำคัญจริง
            </p>
            <p>
              งานของผมส่วนใหญ่คือการทำให้ทีมทำงานร่วมกันได้ลื่นขึ้น
              ทำให้ stakeholder เห็นภาพเดียวกันเร็วขึ้น
              และทำให้ interface หรือระบบที่สร้างออกมา “ใช้งานได้จริง” ภายใต้ข้อจำกัด
              ในโลกจริง
            </p>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.4rem] border border-stone-200/80 bg-[rgba(255,252,247,0.72)] p-6 md:p-10">
          <h2 className="font-display text-4xl leading-tight text-stone-950 md:text-5xl">
            ช่องทางติดต่อ
          </h2>
          <div className="grid gap-3">
            {portfolioLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.4rem] border border-stone-200 bg-white/80 px-5 py-4 text-sm text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm text-stone-800 transition hover:border-stone-500 hover:bg-white"
            >
              กลับหน้าแรก
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

