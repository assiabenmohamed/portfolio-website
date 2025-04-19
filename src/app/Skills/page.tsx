"use client"; // Directive pour exécuter ce code côté client dans Next.js

import React from "react"; // Importation de React
import { FaReact } from "react-icons/fa"; // Importation d'icônes de React
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"; // Importation d'autres icônes
import { useEffect, useRef, useState } from "react"; // Hooks React (useEffect, useRef, useState)

function page() {
  // Déclaration des références pour les conteneurs de défilement horizontal
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRefleft = useRef<HTMLDivElement>(null);

  // États pour contrôler la pause et la reprise du défilement
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isPaused1, setIsPaused1] = useState<boolean>(false);

  // Hook useEffect pour la gestion du défilement horizontal à droite
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;

    // Fonction de défilement horizontal
    const scrollInfinite = () => {
      if (isPaused) return; // Si le défilement est mis en pause, on ne défile pas
      if (scrollContainer.scrollLeft >= scrollWidth) {
        scrollContainer.scrollLeft = 0; // Si on atteint la fin, on revient au début
      } else {
        scrollContainer.scrollLeft += 1; // On avance d'un pixel
      }
    };

    const intervalId = setInterval(scrollInfinite, 16); // Intervalle pour faire défiler
    return () => clearInterval(intervalId); // Nettoyage à la destruction du composant
  }, [isPaused]);

  // Hook useEffect pour la gestion du défilement horizontal à gauche
  useEffect(() => {
    const scrollContainer = scrollContainerRefleft.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;

    // Fonction de défilement horizontal inverse
    const scrollInfiniteleft = () => {
      if (isPaused1) return; // Si la pause est activée, on ne défile pas
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth; // Revenir à la fin si on atteint le début
      } else {
        scrollContainer.scrollLeft -= 1; // Avancer de 1 pixel vers la gauche
      }
    };

    const intervalId = setInterval(scrollInfiniteleft, 16); // Intervalle pour le défilement
    return () => clearInterval(intervalId); // Nettoyage à la destruction du composant
  }, [isPaused1]);

  // Liste des compétences à afficher
  const skills = [
    {
      icon: <FaReact color="#61DBFB" />, // Icône React
      title: "React", // Titre
      description: "UI Library", // Description
    },
    {
      icon: <SiTypescript color="#007acc" />, // Icône TypeScript
      title: "TypeScript",
      description: "Typed JavaScript",
    },
    {
      icon: <SiJavascript color="#F7DF1E" />, // Icône JavaScript
      title: "JavaScript",
      description: "Web Language",
    },
    {
      icon: <SiNextdotjs className="text-white" />, // Icône Next.js
      title: "Next.js",
      description: "React Framework",
    },
    {
      icon: <SiTailwindcss color="#20c8e9" />, // Icône Tailwind CSS
      title: "Tailwind CSS",
      description: "Utility-first CSS",
    },
  ];

  // Fonctions pour gérer la pause et la reprise lors du survol des éléments
  const handleMouseEnter = () => setIsPaused(true); // Met en pause le défilement droit
  const handleMouseLeave = () => setIsPaused(false); // Reprend le défilement droit
  const handleMouseEnter1 = () => setIsPaused1(true); // Met en pause le défilement gauche
  const handleMouseLeave1 = () => setIsPaused1(false); // Reprend le défilement gauche

  return (
    <div>
      <div className="container mx-auto p-4 xl:p-8">
        {/* Titre de la section */}
        <h2 className="text-2xl font-bold mb-4 text-center text-accent">
          My Skills
        </h2>

        {/* Conteneur pour le défilement horizontal à droite */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden flex space-x-4 py-4"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              {/* Affichage des compétences */}
              {skills.map((skill, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex flex-col items-center p-4 border rounded-md w-48 hover:bg-gray-800 transition-colors duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Affichage de l'icône de la compétence */}
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  {/* Titre de la compétence */}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  {/* Description de la compétence */}
                  <p className="text-gray-500">{skill.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Conteneur pour le défilement horizontal inverse à gauche */}
        <div
          ref={scrollContainerRefleft}
          className="overflow-x-hidden flex space-x-4 py-4"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              {/* Affichage des compétences */}
              {skills.map((skill, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex flex-col items-center p-4 border rounded-md w-48 hover:bg-gray-800 transition-colors duration-200"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  {/* Affichage de l'icône de la compétence */}
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  {/* Titre de la compétence */}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  {/* Description de la compétence */}
                  <p className="text-gray-500">{skill.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
