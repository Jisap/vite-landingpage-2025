import React from 'react'
import { testimonials } from '../assets/data'

const Testimonials = () => {
  return (
    <section>
      <div>
      {/* Title */}
        <div>
          <h2>
            Trusted by Traders
          </h2>

          <p>
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