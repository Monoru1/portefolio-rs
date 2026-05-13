'use client'

import { motion } from 'framer-motion'

export function SplitHeading({ title }: { title: string }) {
  const words = title.split(' ')

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.05 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
