import FeaturesSection from "../sections/FeaturesSection"
import HeroSection from "../sections/HeroSection"
import LogoCarousel from "../sections/LogoCarousel"


const HomePage = () => {
  return (
    <div className='bg-black mx-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
    </div>
  )
}

export default HomePage