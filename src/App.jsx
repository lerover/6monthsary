import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  {
    src: "/images/memory1.jpg",
    phrase: "The day we laughed until our cheeks hurt 💕",
  },
  {
    src: "/images/memory2.jpg",
    phrase: "Every moment with you feels like home ❤️",
  },
  {
    src: "/images/memory3.jpg",
    phrase: "Six months of us, forever to go ✨",
  },
  {
    src: "/images/memory4.jpg",
    phrase: "Our sweetest coffee date ☕💕",
  },
  {
    src: "/images/memory5.jpg",
    phrase: "That sunset walk I’ll never forget 🌅",
  },
];

export default function LovePage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200">
        <img
          src="/images/girlfriend.jpg"
          alt="My Love"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-900 drop-shadow-lg">
            Happy 6th Monthsary, My Love 💖
          </h1>
          <p className="mt-4 text-xl text-pink-800 max-w-xl mx-auto">
            Time flies, but my love for you only grows stronger. Thank you for six months of laughter, memories, and love that feels endless.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-3xl text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-pink-800 mb-4">Our Story</h2>
        <p className="text-lg text-pink-700 leading-relaxed">
          Six months ago, two hearts found each other. Since then, every day has been filled with warmth, laughter, and love. We’ve created countless memories, faced challenges hand-in-hand, and celebrated little victories that made us stronger. This page is a small gift, a reminder of how special you are to me, and how beautiful our journey together has been.
        </p>
      </section>

      {/* Gallery */}
      <section className="w-full max-w-5xl py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.src}
              alt={`memory-${i}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </section>

      {/* Love Letter */}
      <section className="w-full max-w-3xl text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-pink-800 mb-4">A Little Love Letter</h2>
        <p className="text-lg text-pink-700 italic leading-relaxed">
          "My love, these six months have been the happiest of my life. Every smile of yours lights up my world, and every moment with you feels magical. I can’t wait to make more memories, grow together, and love you endlessly. This is just the beginning of our forever." 💌
        </p>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt="memory"
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="mt-4 text-lg text-pink-700 font-medium">
                {selected.phrase}
              </p>
              <button
                className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-pink-700">
        <p>Made with ❤️ by You, for Her ✨</p>
      </footer>
    </div>
  );
}