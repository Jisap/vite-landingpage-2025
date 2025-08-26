import HeroSection from "../sections/HeroSection"
import LogoCarousel from "../sections/LogoCarousel"


const HomePage = () => {
  return (
    <div className='bg-black mx-auto'>
      <HeroSection />
      <LogoCarousel />
    </div>
  )
}

export default HomePage