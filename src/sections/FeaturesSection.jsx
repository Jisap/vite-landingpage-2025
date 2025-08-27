import { Wallet } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { features } from '../assets/data'
import { AnimatePresence, motion } from 'framer-motion'

const FeaturesSection = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Auto playing
  useEffect(() => {
    if(!isPaused){                                              // Cuando isPaused es false el carrusel esta activo
      intervalRef.current = setInterval(() => {                 // setInterval ejecuta una acción cada 3 seg  
        setActiveIndex((prev) => (prev + 1) % features.length)  // La acción que ejecuta es incrementar activeIndex en 1
      }, 3000)                                                  // % features.length es para que cuando el índice llegue al final de la lista vuelva a empezar a 0
    }

    return () => clearInterval(intervalRef.current)
  },[isPaused])

  // if user hovers, pause autoplay
  const handleOver = (index) => {
    setIsPaused(true)
    setActiveIndex(index)
  }

  const handleLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className='container mx-auto px-4 py-24'>
      {/* Title */}
      <div className='max-w-2xl mb-20'>
        <h2 className='text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left'>
          Advanced Trading <br/>
          <span className='font-medium clash-display grad1'>
            Features & Tools
          </span>
        </h2>

        <p className='text-lg text-zinc-300/80 text-left'>
          Experience professional-grade trading tools and features
          designed for btoh novice and experienced crypto traders.
        </p>
      </div>

      {/* Features Content */}
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
          {/* left: Tab triggers */}
          <div className='md:col-span-5 space-y-3'>
            <div className='col w-full h-auto p-0 space-y-3'>

              {features.map((feature, index) => (
                <div 
                  key={index} 
                  onMouseEnter={() => handleOver(index)}
                  onMouseLeave={handleLeave}
                  onClick={() => setActiveIndex(index)}
                  className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 transition-all duration-300 ease-out border rounded-xl
                    ${activeIndex === index ? "border-indigo-400/10 bg-indigo-500/10" : "border-transparent"}
                  `}
                >
                  <div>
                    {feature.icon}
                  </div>

                  <div className='col gap-1'>
                    <h3 className='text-base clash-display text-indigo-200'>{feature.title}</h3>
                    <p className='text-sm text-zinc-300/80'>
                      {feature.description} 
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tab images */}
          <div className='md:col-span-7 min-h-[320px] centered-row'>
            <AnimatePresence mode="wait">
              <motion.div 
                key={features[activeIndex].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{opacity: 0, y: -60}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className='glass rounded-xl overflow-hidden w-full relative'
              >
                <img
                  src={features[activeIndex].image}
                  alt="feature_image"
                  className='w-full h-full object-contain'
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent z-10' />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection