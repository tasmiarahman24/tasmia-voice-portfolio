"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NAVY = "#0C1E3D";

type Video = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const videos: Video[] = [
    { id: 1, title: "MAGGI", type: "TVC", url: "https://drive.google.com/file/d/1JEzz3UXV4ZdPeahQb5XMC7DzavHmtUJF/preview" },
    { id: 2, title: "Lemon Bright", type: "OVC", url: "https://drive.google.com/file/d/1-nhpI2_MN4O5aDu-6V9kwyYSBgbUcPRa/preview" },
    { id: 3, title: "Hisense AC", type: "TVC", url: "https://drive.google.com/file/d/1-bz2HMWSIMzIxxQPtkmdZ0_TWFk-2niF/preview" },
    { id: 4, title: "Lemon White", type: "TVC", url: "https://drive.google.com/file/d/1I8GHemhpiT08gAGDukYdKi92zYXXcq_K/preview" },
    { id: 5, title: "UHC OVC", type: "OVC", url: "https://drive.google.com/file/d/13adreH3SZrm7X34tJ6FHlA-sqGBQ4U8d/preview" },
    { id: 6, title: "PRAN Jelly", type: "OVC", url: "https://drive.google.com/file/d/1Nfs-GNjwYj-gH9bByYcjAtZh2NQnCkey/preview" },
    { id: 7, title: "Prime Bank OVC", type: "OVC", url: "https://drive.google.com/file/d/1TSyESpryaKS1XKcAnkX5EdcSM2vjw94t/preview" },
    { id: 8, title: "Savlon Documentary", type: "Documentary", url: "https://drive.google.com/file/d/1umIQquYG5zIbcuaeO1TG0NZ03SQhsuAg/preview" },
  ];

  const categories = ["All", "TVC", "OVC", "Documentary"];

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.type === activeCategory);

  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 6);

  const fadeInProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true },
  };

  return (
    <>
      {/* Minimal Responsive Nav Bar */}
      <nav className="w-full border-b border-slate-200/60 bg-[#FBF7EC] sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Left: Logo/Name */}
          <div className="font-semibold text-[#1C2A39] text-base">Tasmia Rahman</div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#1C2A39]">
            <a href="#work" className="hover:text-[#0C1E3D]">Work</a>
            <a href="#about" className="hover:text-[#0C1E3D]">About</a>
            <a href="#contact" className="hover:text-[#0C1E3D]">Contact</a>
          </div>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className={`block h-0.5 w-6 bg-[#1C2A39] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[#1C2A39] rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[#1C2A39] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 flex justify-end md:hidden">
            <div className="bg-white w-2/3 max-w-xs h-full p-8 flex flex-col gap-8">
              <button
                className="self-end mb-8"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-2xl">&times;</span>
              </button>
              <a href="#work" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#1C2A39]">Work</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#1C2A39]">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#1C2A39]">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main className="scroll-smooth bg-[#FBF7EC] text-[#1C2A39] pb-16">
        {/* Hero */}
        <section className="min-h-[88vh] flex items-center">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-[12px] tracking-[0.18em] text-[#5E6A75] uppercase mb-4">
                Professional Voice
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-2">Tasmia Rahman</h1>
              <p className="text-lg text-[#5E6A75] mb-6">Voice Artist</p>
              <p className="text-[#5E6A75] leading-relaxed mb-5 max-w-xl">
                Bilingual voice artist delivering warm, confident, and brand-true
                performances in Bangla and English.
              </p>
              <p className="text-[#5E6A75] text-sm leading-relaxed mb-8 max-w-xl">
                Specializing in TVC, OVC, Documentary, and IVR with 6+ years of professional experience.
              </p>
              <div className="flex gap-3">
                <Link href="#work" className="rounded-full px-5 py-3 text-white" style={{ backgroundColor: NAVY }}>Listen to Work</Link>
                <Link href="#contact" className="rounded-full px-5 py-3" style={{ border: `1px solid ${NAVY}`, color: NAVY }}>Get in Touch</Link>
              </div>
            </div>
            {/* Microphone Image */}
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

        {/* Featured Works Section */}
        <section id="work" className="scroll-mt-24 pt-24 pb-16">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <motion.div {...fadeInProps}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Featured Works</h2>
              <p className="text-[#5E6A75] mb-8">
                Explore samples from TVC, OVC & Documentary projects.
              </p>
            </motion.div>
            {/* Category Tabs */}
            <motion.div className="flex flex-wrap gap-3 mb-10" {...fadeInProps}>
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-5 py-2 rounded-full text-sm transition-all border ${
                    activeCategory === tab
                      ? "bg-[#0C1E3D] text-white border-[#0C1E3D]"
                      : "bg-[#FBF7EC] text-[#1C2A39] border-[#D1D5DB] hover:bg-[#EDE9E1]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
            {/* Video Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              {...fadeInProps}
            >
              {displayedVideos.map((video) => (
                <motion.div
                  key={video.id}
                  className="rounded-2xl overflow-hidden shadow-md bg-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video rounded-2xl"
                  ></iframe>
                  <div className="p-3 text-center font-medium">{video.title}</div>
                </motion.div>
              ))}
            </motion.div>
            {/* See More button */}
            {filteredVideos.length > 6 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 border border-[#1C2A39] rounded-full font-medium hover:bg-[#1C2A39] hover:text-white transition-all"
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="scroll-mt-24 pt-20 pb-12">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <motion.div {...fadeInProps}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
              <div className="max-w-3xl space-y-4 text-[#5E6A75] leading-relaxed text-base md:text-lg">
                <p>
                  I’m a professional voice-over artist with over six years of experience bringing words to life in both Bengali and English.
                </p>
                <p>
                  My voice has been trusted by brands, agencies, and creators for commercials, documentaries, corporate narrations, and digital campaigns.
                </p>
                <p>
                  I believe that a great voice doesn’t just read a script, it tells a story, evokes emotion, and builds connection.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ready to Collaborate */}
        <section id="contact" className="scroll-mt-24 pt-28 pb-24">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_460px] gap-10 items-start">
            {/* Left */}
            <motion.div {...fadeInProps}>
              <h2 className="text-4xl md:text-5xl font-bold md:whitespace-nowrap mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-[#5E6A75] leading-relaxed max-w-xl mb-8">
                Whether you’re looking for a voice-over for your next project or a professional recording session, I’m here to help bring your vision to life.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <div className="leading-tight">
                    <a href="mailto:tasmiarahman161@gmail.com" className="text-lg md:text-xl font-semibold hover:underline" style={{ color: NAVY }}>
                      tasmiarahman161@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">☎️</span>
                  <a href="https://wa.me/8801777397519" target="_blank" rel="noreferrer" className="text-lg md:text-xl font-semibold hover:underline" style={{ color: NAVY }}>
                    +880 1777 397519
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Right */}
            <motion.div className="md:ml-auto" {...fadeInProps}>
              <div className="rounded-2xl text-slate-100 p-8 md:p-10 shadow-lg w-full md:w-[460px]" style={{ backgroundColor: NAVY }}>
                <h3 className="text-2xl font-semibold text-white mb-6">What I Can Help With</h3>
                <ul className="space-y-5">
                  <li>🎙️ Commercials & TVCs</li>
                  <li>🎬 Documentary Narration</li>
                  <li>📣 OVC & Promotional</li>
                  <li>📞 IVR & Telephony</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-12">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <p className="text-xs text-[#9CA3AF]">© 2025 Tasmia Rahman. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}







