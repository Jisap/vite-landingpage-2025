import React from 'react'

const FeaturesSection = () => {
  return (
    <section>
      {/* Title */}
      <div>
        <h2>
          Advanced Trading <br/>
          <span>
            Features & Tools
          </span>
        </h2>

        <p>
          Experience professional-grade trading tools and features
          designed for btoh novice and experienced crypto traders.
        </p>
      </div>

      {/* Features Content */}
      <div>
        <div>
          {/* left: Tab triggers */}
          <div>
            <div></div>
            <div>
              <h3>Feature Title</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt 
              </p>
            </div>
          </div>

          {/* Right: Tab images */}
          <div>
            <div>
              <div>
                <img src="" alt="feature_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection