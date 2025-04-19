import Image from "next/image"; // Importation de l'image
import React from "react"; // Importation de React
import { delay, easeIn, motion } from "motion/react"; // Importation des animations avec motion
import "animate.css"; // Importation de animate.css pour les animations CSS

function Photo() {
  return (
    <div className="w-full h-full relative flex justify-center">
      {/* Animation pour la photo de profil */}
      <motion.div
        initial={{ opacity: 0 }} // Initialement, l'opacité est à 0
        animate={{
          opacity: 1, // Devient totalement opaque
          transition: { delay: 0.4, duration: 2, ease: "easeIn" }, // Animation avec délai et durée
        }}
      >
        <motion.div
          initial={{ opacity: 0 }} // Initialement, l'opacité est à 0
          animate={{
            opacity: 1, // Devient totalement opaque
            transition: { delay: 0.4, duration: 2, ease: "easeOut" }, // Transition avec délai et durée
          }}
          className="w-[160px] h-[160px] xl:w-[298px] xl:h-[298px] rounded-full overflow-hidden absolute mix-blend-lighten top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* Image de profil */}
          <Image
            src="/avatar-removebg.png" // Chemin vers l'image
            priority // Priorité de chargement
            quality={100} // Qualité de l'image
            fill // Remplissage de l'élément parent
            alt="photo" // Texte alternatif pour l'image
            className="object-container" // Classe CSS pour le style de l'image
          />
        </motion.div>
      </motion.div>

      {/* Animation pour le cercle autour de l'image */}
      <motion.svg
        className="w-[300px] h-[300px] xl:w-[300px] xl:h-[300px]" // Taille du cercle
        fill="transparent" // Remplissage transparent pour le cercle
        viewBox={"0 0 506 506"} // Vue de l'élément SVG
        xmlns="http://www.w3.org/2000/svg" // Déclaration du namespace SVG
      >
        <motion.circle
          cx="253" // Centre du cercle sur l'axe X
          cy="253" // Centre du cercle sur l'axe Y
          r="250" // Rayon du cercle
          stroke="#00ded1" // Couleur du trait
          strokeWidth="4" // Largeur du trait
          strokeLinecap={"round"} // Arrondi des bords du trait
          strokeLinejoin={"round"} // Arrondi des jonctions des traits
          initial={{ strokeDasharray: "24 10 0 0" }} // Début de l'animation
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], // Animation du tracé du cercle
            rotate: [120, 360], // Animation de la rotation
          }}
          transition={{
            duration: 20, // Durée de l'animation
            repeat: Infinity, // L'animation se répète à l'infini
            repeatType: "reverse", // L'animation se joue en sens inverse à chaque répétition
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Photo;
