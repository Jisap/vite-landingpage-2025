import React, { useRef } from 'react'
import { testimonials } from '../assets/data'

const Testimonials = () => {

  const marqueeRef = useRef(null);
  const handleMouseEnter = () => {
    if(marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "paused")
    }
  }

  const handleMouseleave = () => {
    if(marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "running")
    }
  }


  return (
    <section className='py-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
      {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-normal mb-4 clash-display'>
            Trusted by Traders
          </h2>

          <p className='text-zinc-400/90 text-lg'>
            Jin thousands of satisfied traders on ForexTrade
          </p>
        </div>

        {/* Marquee */}
        <div className='relative flex flex-col antialiased'>
          <div className='relative flex overflow-hidden py-4' ref={marqueeRef}>
            {/* moving part */}
            <div 
              className='animate-marquee flex min-w-full shrink-0 items-stretch gap-8'
              style={{
                animationPlayState: "var(--marquee-play-state)"
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseleave}
                >
                  <div className='centered-row gap-4 mb-6'>
                    <div className='h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500'>
                      {!testimonial.image ? (testimonial.name[0]) : (
                        <img 
                          src={testimonial.image} 
                          alt="image" 
                          className='w-full h-full object-cover'
                        />
                      ) }
                    </div>

                    <div>
                      <h4 className='font-medium text-lg clash-display text-white/90'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-white/60'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate moving part for marquee effect */}
            <div 
              className='animate-marquee flex min-w-full shrink-0 items-stretch gap-8'
              style={{
                animationPlayState: "var(--marquee-play-state)"
              }}  
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseleave}
                  className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
                >
                  <div className='centered-row gap-4 mb-6'>
                    <div className='h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500'>
                      {!testimonial.image ? (testimonial.name[0]) : (
                        <img
                          src={testimonial.image}
                          alt="image"
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>

                    <div>
                      <h4 className='font-medium text-lg clash-display text-white/90'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-white/60'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='absolute h-full w-20 md:w-50 bg-gradient-to-r from-black to transparent -left-1'></div>
          <div className='absolute h-full w-20 md:w-50 bg-gradient-to-l from-black to transparent -right-1'></div>
         

        </div>
      </div>
    </section>
  )
}

export default Testimonials