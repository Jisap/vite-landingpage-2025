import Footer from "../components/Footer"
import CtaSection from "../sections/ctaSection"
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
      <CtaSection />
      <Footer />
    </div>
  )
}

export default HomePage