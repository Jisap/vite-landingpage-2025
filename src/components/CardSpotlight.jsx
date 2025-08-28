"use client";

import { useState, useRef } from "react";

/**
 * Un componente contenedor que aplica un efecto de "spotlight" (foco de luz)
 * que sigue al cursor del ratón cuando se pasa sobre él.
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido que se renderizará dentro de la tarjeta.
 * @param {string} [props.className=""] - Clases CSS adicionales para aplicar al contenedor.
 */
export const CardSpotlight = ({ children, className = "" }) => {
  
  const divRef = useRef(null);                                 // Ref para acceder al elemento div principal en el DOM.
  const [position, setPosition] = useState({ x: 0, y: 0 });    // Estado para almacenar la posición del cursor (x, y) relativa al div.
  const [opacity, setOpacity] = useState(0);                   // Estado para controlar la opacidad del efecto de spotlight.

  // Manejador para el movimiento del ratón sobre el elemento.
  const handleMouseMove = (e) => {
    
    if (!divRef.current) return;                                // Si la referencia al div no existe, no hagas nada.

    const div = divRef.current;                                 // Obtiene el elemento div principal.
    
    const rect = div.getBoundingClientRect();                   // Obtiene el rectángulo delimitador del div para conocer su posición y tamaño.

    
    
    setPosition({                                               // Actualiza el estado de la posición con las coordenadas del cliente (ratón)
      x: e.clientX - rect.left,                                 // relativas a la esquina superior izquierda del div.
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => {
    // Al entrar el ratón, haz visible el spotlight.
    setOpacity(1);
  };

  const handleBlur = () => {
    // Al salir el ratón, oculta el spotlight.
    setOpacity(0);
  };

  return (
    <div
      
      ref={divRef}                      // Asigna la referencia al div.
      onMouseMove={handleMouseMove}     // Asigna los manejadores de eventos del ratón.
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 ${className}`}
    >
      {/* Este div es el que crea el efecto de spotlight. */}
      <div
        // 'pointer-events-none' asegura que este div no interfiera con los eventos del ratón,
        // permitiendo que los eventos lleguen a los elementos que están debajo.
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          // La opacidad se controla con el estado, permitiendo una transición suave.
          opacity,
          // El fondo es un gradiente radial que crea el efecto de luz.
          // El centro del gradiente ('circle at ...') se actualiza dinámicamente
          // con la posición del ratón para que el efecto lo siga.
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      {/* Renderiza el contenido hijo que se pasó al componente. */}
      {children}
    </div>
  );
};
