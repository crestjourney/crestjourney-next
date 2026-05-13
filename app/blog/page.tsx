'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: "Summit One Vanderbilt: New York'un Zirvesinde",
    description: "Manhattan'ın en yüksek noktalarından birinden şehri izlemek bambaşka bir his. Bulutların arasında kaybolurken şehrin nabzını hissediyorsunuz.",
    date: "December 2024",
    location: "New York, USA",
    readTime: "5 min read",
    tag: "New York"
  },
  {
    id: 2,
    title: "Vancouver'dan Whistler'a: Kar ve Özgürlük",
    description: "Sea to Sky Highway boyunca sürerken her virajda yeni bir manzara. Whistler sadece bir kayak merkezi değil, bir yaşam tarzı.",
    date: "January 2025",
    location: "Vancouver, Canada",
    readTime: "7 min read",
    tag: "Canada"
  },
  {
    id: 3,
    title: "Empire State'in Tepesinde Gün Batımı",
    description: "Klasik ama etkisini hiç kaybetmeyen bir deneyim. New York siluetini turuncu gökyüzünde izlemek için bir kez daha çıkmaya değer.",
    date: "December 2024",
    location: "New York, USA",
    readTime: "4 min read",
    tag: "New York"
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
      >
        <Link href="/" className="text-xl font-semibold tracking-widest uppercase">CrestJourney</Link>
        <div className="flex gap-8 text-sm tracking-wider text-gray-400">
          <Link href="/blog" className="text-white">Blog</Link>
          <a href="#" className="hover:text-white transition-colors">Destinations</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
      </motion.nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-8 max-w-4xl mx-auto"
      >
        <p className="text-sm tracking-[0.4em] text-gray-500 uppercase mb-4">All Stories</p>
        <h1 className="text-5xl font-bold tracking-tight">Blog</h1>
      </motion.div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-8 pb-20">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="border-t border-white/10 py-10 group cursor-pointer"
          >
            <div className="flex items-center gap-4 text-xs text-gray-500 tracking-wider uppercase mb-4">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.location}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              {post.description}
            </p>
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase border border-white/20 px-3 py-1 text-gray-400">
                {post.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}