"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const NAVY = "#0C1E3D";
  const BG = "#FBF7EC";

  const [activeCategory, setActiveCategory] = useState("All");

  const videos = [
    {
      title: "MAGGI",
      src: "https://drive.google.com/file/d/1JEzz3UXV4ZdPeahQb5XMC7DzavHmtUJF/preview",
      category: "TVC",
    },
    {
      title: "Lemon Bright",
      src: "https://drive.google.com/file/d/1-nhpI2_MN4O5aDu-6V9kwyYSBgbUcPRa/preview",
      category: "OVC",
    },
    {
      title: "Hisense AC",
      src: "https://drive.google.com/file/d/1-bz2HMWSIMzIxxQPtkmdZ0_TWFk-2niF/preview",
      category: "TVC",
    },
    {
      title: "Lemon White",
      src: "https://drive.google.com/file/d/1I8GHemhpiT08gAGDukYdKi92zYXXcq_K/preview",
      category: "TVC",
    },
    {
      title: "UHC Documentary",
      src: "https://drive.google.com/file/d/13adreH3SZrm7X34tJ6FHlA-sqGBQ4U8d/preview",
      category: "Documentary",
    },
    {
      title: "PRAN Jelly",
      src: "https://drive.google.com/file/d/1Nfs-GNjwYj-gH9bByYcjAtZh2NQnCkey/preview",
      category: "OVC",
    },
  ];

  return (
    <main className="scroll-smooth bg-[#FBF7EC] text-[#1C2A39]">
      {/* Header */}
      <nav className="border-b border-slate-200/60">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <div className="text-sm text-[#5E6A75]">
            <span className="font-semibold text-[#1C2A39]">Tasmia Rahman</span>{" "}
            <span className="mx-1">•</span> Voice Artist
          </div>
          <ul className="flex items-center gap-7 text-sm text-[#5E6A75]">
            <li><Link href="#work" className="hover:text-[#0C1E3D]">Work</Link></li>
            <li><Link href="#about" className="hover:text-[#0C1E3D]">About</Link></li>
            <li><Link href="#contact" className="hover:text-[#0C1E3D]">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[88vh] flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="text-[12px] tracking-[0.18em] text-[#5E6A75] uppercase mb-4">
              Professional Voice
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Tasmia Rahman</h1>
            <p className="text-lg text-[#5E6A75] mb-6">Voice Artist</p>
            <p className="text-[#5E6A75] leading-relaxed mb-5 max-w-xl">
              Bilingual voice artist delivering warm, confident, and brand-true performances in Bangla and English.
            </p>
            <p className="text-[#5E6A75] text-sm leading-relaxed mb-8 max-w-xl">
              Specializing in TVC, OVC, Documentary, and IVR with 6+ years of professional experience.
            </p>

            <div className="flex gap-3">
              <Link href="#work" className="rounded-full px-5 py-3 text-white" style={{ backgroundColor: NAVY }}>
                Listen to Work
              </Link>
              <Link href="#contact" className="rounded-full px-5 py-3" style={{ border: `1px solid ${NAVY}`, color: NAVY }}>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <Image
                src="/microphone/blue-mic.png"
                alt="Studio microphone"
                width={900}
                height={900}
                className="rounded-2xl shadow-md object-cover aspect-square"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="scroll-mt-24 pt-24 pb-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Featured Works</h2>
          <p className="text-[#5E6A75] mb-8">
            Explore samples from TVC, OVC & Documentary projects.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "TVC", "OVC", "Documentary"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-5 py-2 rounded-full text-sm transition-all border ${
                  activeCategory === tab
                    ? "bg-[#0C1E3D] text-white border-[#0C1E3D]"
                    : "bg-[#FBF7EC] text-[#1C2A39] border-[#D1D5DB] hover:bg-[#f1ece2]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Video Grid (3 per row) */}
          <div className="grid md:grid-cols-3 gap-8">
            {videos
              .filter((v) => activeCategory === "All" || v.category === activeCategory)
              .map((video) => (
                <div key={video.title} className="text-center">
                  <iframe
                    src={video.src}
                    width="100%"
                    height="220"
                    allow="autoplay"
                    className="rounded-xl shadow-lg mb-3"
                  ></iframe>
                  <p className="text-[#1C2A39] font-medium">{video.title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 pt-24 pb-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
          <div className="max-w-3xl space-y-4 text-[#5E6A75] leading-relaxed text-base md:text-lg">
            <p>
              I’m a professional voice-over artist with over six years of experience bringing words to life in both Bengali and English. My voice has been trusted by brands, agencies, and creators for commercials, documentaries, corporate narrations, e-learning, storytelling, and digital campaigns.
            </p>
            <p>
              Whether it’s a calm and emotional narration or a sharp and energetic promo, I adapt my tone, pace, and expression to match the soul of each project. A great voice doesn’t just read a script — it tells a story, evokes emotion, and builds connection.
            </p>
            <p>
              Every recording I deliver is crafted with care, clarity, and passion for sound. I take pride in maintaining professionalism, quality, and timely delivery. My goal is simple: to make every message sound human, heartfelt, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Collaborate */}
      <section id="contact" className="scroll-mt-24 pt-28 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_480px] gap-10 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold md:whitespace-nowrap mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-[#5E6A75] leading-relaxed max-w-xl mb-8">
              Whether you’re looking for a voice-over for your next project, need a professional recording session, or just want to explore possibilities — I’m here to help bring your vision to life.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <div className="leading-tight">
                  <div className="text-xs text-[#5E6A75]">Email</div>
                  <a href="mailto:tasmiarahman161@gmail.com"
                    className="text-lg md:text-xl font-semibold hover:underline"
                    style={{ color: NAVY }}>
                    tasmiarahman161@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">☎️</span>
                <div className="leading-tight">
                  <div className="text-xs text-[#5E6A75]">Phone & WhatsApp</div>
                  <a href="https://wa.me/8801777397519" target="_blank" rel="noreferrer"
                    className="text-lg md:text-xl font-semibold hover:underline"
                    style={{ color: NAVY }}>
                    +880 1777 397519
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Navy Box */}
          <div className="md:ml-auto">
            <div className="rounded-2xl text-slate-100 p-8 md:p-10 shadow-lg w-full md:w-[480px] md:h-[420px]"
              style={{ backgroundColor: NAVY, boxShadow: "0 10px 24px rgba(12,30,61,0.12)" }}>
              <h3 className="text-2xl font-semibold text-white mb-6">What I Can Help With</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3"><span className="mt-1">🎙️</span><div><div className="font-semibold text-lg">Commercials & TVCs</div><div className="text-slate-300 text-sm">30–60 second spots in Bangla & English</div></div></li>
                <li className="flex items-start gap-3"><span className="mt-1">🎬</span><div><div className="font-semibold text-lg">Documentary Narration</div><div className="text-slate-300 text-sm">Professional documentary voiceovers</div></div></li>
                <li className="flex items-start gap-3"><span className="mt-1">📣</span><div><div className="font-semibold text-lg">OVC & Promotional</div><div className="text-slate-300 text-sm">Online video content & promotional work</div></div></li>
                <li className="flex items-start gap-3"><span className="mt-1">📞</span><div><div className="font-semibold text-lg">IVR & Telephony</div><div className="text-slate-300 text-sm">Interactive voice response systems</div></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-12">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <p className="text-xs text-[#9CA3AF]">© 2025 Tasmia Rahman. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
