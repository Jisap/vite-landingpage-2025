
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";

// ScrollSmoother es un plugin de GSAP que intercepta el comportamiento de scroll nativo del navegador para crear 
// una experiencia de desplazamiento suave y fluida. En lugar de que la página salte de una posición a otra, 
// se desliza con una inercia elegante.


const App = () => {


  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother && smoother.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
    
  },[])

  return (
    <div className="text-zinc-100 bg-black p-4">
      <Navbar />
      <div 
        ref={contentRef} 
        id="smooth-content"
      >
        <HomePage />
      </div>
    </div>
  ) 
};

export default App;
