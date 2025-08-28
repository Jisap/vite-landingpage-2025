import FeaturesSection from "../sections/FeaturesSection"
import HeroSection from "../sections/HeroSection"
import LogoCarousel from "../sections/LogoCarousel"
import Pricing from "../sections/Pricing"
import Testimonials from "../sections/Testimonials"


const HomePage = () => {
  return (
    <div className='bg-black mx-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <Pricing />
      <Testimonials />
    </div>
  )
}

export default HomePage