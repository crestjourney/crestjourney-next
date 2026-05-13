'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
      >
        <span className="text-xl font-semibold tracking-widest uppercase">CrestJourney</span>
        <div className="flex gap-8 text-sm tracking-wider text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <a href="#" className="hover:text-white transition-colors">Destinations</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 text-center px-4"
        >
          <p className="text-sm tracking-[0.4em] text-gray-400 uppercase mb-6">Vancouver · New York · Istanbul</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Crest<span className="text-gray-400">Journey</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            Exploring the world from the top. One destination at a time.
          </p>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 border border-white/20 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}