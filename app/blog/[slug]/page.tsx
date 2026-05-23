'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { use } from 'react'

const posts: Record<string, { title: string; date: string; location: string; content: string; cover?: string }> = {
  'summit-one-vanderbilt': {
    title: "Summit One Vanderbilt: New York'un Zirvesinde",
    date: "December 2024",
    location: "New York, USA",
    content: `Manhattan'ın en yüksek noktalarından birinden şehri izlemek bambaşka bir his. Bulutların arasında kaybolurken şehrin nabzını hissediyorsunuz.

Summit One Vanderbilt, klasik gözlem kulelerinden çok farklı bir deneyim sunuyor. Cam yüzeyler, yansımalar ve sanat enstalasyonları ile adeta başka bir boyuta giriyorsunuz.

En güzel an ise gün batımında geliyor. Turuncu ve pembe tonların Manhattan siluetiyle buluştuğu o an, hiçbir fotoğrafın tam olarak yansıtamayacağı türden.

Pratik bilgi: Biletleri önceden online almak şart, özellikle hafta sonları. En iyi manzara için gün batımından 1 saat önce gidin.`
  },
  'vancouver-whistler': {
    title: "Vancouver'dan Whistler'a: Kar ve Özgürlük",
    date: "January 2025",
    location: "Vancouver, Canada",
    content: `Sea to Sky Highway boyunca sürerken her virajda yeni bir manzara sizi karşılıyor. Bu yol sadece bir güzergah değil, başlı başına bir deneyim.

Whistler'a ulaştığınızda köyün kendine has atmosferi sizi sarıyor. Kar yağışının altında ahşap binalar, dağ havasının temizliği ve her yerde hissedilen o özgürlük duygusu.

Kayak yapmayı bilmeseniz bile Whistler'a gitmeye değer. Köyde yürüyüş, restoran ve kültürel deneyimler bir haftanızı dolduracak kadar zengin.

Pratik bilgi: Vancouver'dan yaklaşık 2 saat sürüş. Kış aylarında yola çıkmadan önce hava durumunu mutlaka kontrol edin.`
  },
  'empire-state': {
    title: "Empire State'in Tepesinde Gün Batımı",
    date: "December 2024",
    location: "New York, USA",
    cover: "/images/empire-state-cover.jpg",
    content: `Klasik ama etkisini hiç kaybetmeyen bir deneyim. Empire State Building'e kaç kez çıkarsanız çıkın, o manzara sizi her seferinde aynı şekilde etkiliyor.

102. kattan New York'u izlemek, şehrin ne kadar büyük ve karmaşık olduğunu bir kez daha hatırlatıyor. Her ışık bir hikaye, her sokak bir macera.

Gün batımında gökyüzünün aldığı renkler ise kelimelerle anlatılamaz. Turuncu, pembe ve mor tonların binaların camlarına yansıması inanılmaz bir görsel şölen sunuyor.

Pratik bilgi: 86. kat açık teras, 102. kat kapalı. Rüzgarlı havalarda 86. kat çok soğuk olabilir, buna göre giyinin.`
  }
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Yazı bulunamadı</h1>
          <Link href="/blog" className="text-gray-400 hover:text-white">← Blog'a dön</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
      >
        <Link href="/" className="text-xl font-semibold tracking-widest uppercase">CrestJourney</Link>
        <div className="flex gap-8 text-sm tracking-wider text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <a href="#" className="hover:text-white transition-colors">Destinations</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
      </motion.nav>

      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-8 pt-40 pb-20"
      >
        <Link href="/blog" className="text-sm text-gray-500 tracking-wider uppercase hover:text-white transition-colors mb-10 block">
          ← Blog
        </Link>
        <div className="flex items-center gap-4 text-xs text-gray-500 tracking-wider uppercase mb-6">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.location}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-10">{post.title}</h1>

        {post.cover && (
          <div className="relative w-full h-[50vh] mb-10 overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="text-gray-300 leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.article>
    </main>
  )
}