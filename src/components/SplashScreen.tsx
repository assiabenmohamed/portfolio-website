"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SplashScreen() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimeout = setTimeout(() => {
      setIsExiting(true); // ⚡ Lancer l'animation de sortie
      setTimeout(() => {
        setShowIntro(false); // ❌ Cacher l'intro après l'animation
      }, 200); // durée de l'animation de sortie
    }, 400);

    return () => clearTimeout(exitTimeout);
  }, []);

  // Si l'intro n'est plus affichée, on ne rend rien du tout
  if (!showIntro) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black h-full w-full scroll={false}
      ${isExiting ? "fade-out" : "fade-in"}`}
      // Ajout d'un style pour empêcher les interactions avec ce qui est en dessous
      style={{
        pointerEvents: isExiting ? "none" : "auto",
      }}
    >
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  );
}

export default SplashScreen;
