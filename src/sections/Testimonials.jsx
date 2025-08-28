import React from 'react'
import { testimonials } from '../assets/data'

const Testimonials = () => {
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
        <div>
          <div>
            <div>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div>
                    <div>
                      <img src="" alt="" />
                    </div>

                    <div>
                      <h4>
                        {testimonial.name}
                      </h4>
                      <p>
                        {testimonial.role}
                      </p>
                    </div>

                    <p>
                      {testimonial.content}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials