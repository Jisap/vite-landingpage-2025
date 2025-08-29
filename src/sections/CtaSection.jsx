import { ArrowRight } from 'lucide-react'
import React from 'react'

const CtaSection = () => {
  return (
    <section className='container mx-auto px-4 py-20 relative bg-black'>
      <div 
        className='absolute inset-0 opacity-40' 
        style={{
          backgroundImage: 'url("/crack.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        />
        <div className='bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10'>
          <h2 className='text-3xl md:text-4xl clash-display mb-4'>
            Ready to start trading ?
          </h2>

          <p className='text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80'>
            Join thousands of traders who have already discovered the power of our platform.
          </p>

          <button className='centered-row mx-auto text-lg bg-gradient-to-r from-indigo-400 to-indigo-600 clash-display hover:-translate-y-1 transition2 text-zinc-50 py-3 rounded-full px-3 cursor-pointer'>
            Create Account <ArrowRight className='ml-2 size-4'/>
          </button>
        </div>
      
    </section>
  )
}

export default CtaSection