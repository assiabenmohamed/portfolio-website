import React from "react"; // Importation de React
import Typewriter from "typewriter-effect"; // Importation de l'effet de machine à écrire
import Photo from "./Photo"; // Importation du composant Photo
import { Button } from "./ui/button"; // Importation du bouton personnalisé
import { FiDownload } from "react-icons/fi"; // Icône pour le bouton de téléchargement
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icônes pour LinkedIn et GitHub
import Link from "next/link"; // Importation de Link pour la navigation

// Liens sociaux (LinkedIn et GitHub)
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/assia-benmohamed-426664255", // Lien LinkedIn
    icon: <FaLinkedin />, // Icône LinkedIn
  },
  {
    name: "GitHub",
    url: "https://github.com/assiabenmohamed", // Lien GitHub
    icon: <FaGithub />, // Icône GitHub
  },
];

function Hero() {
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/* Section texte et introduction */}
      <div className="flex flex-col xl:w-1/2 text-center">
        <h1 className="text-white font-bold text-3xl">
          👩‍💻 Ben Mohamed Assia <br />
          Full-Stack Software Engineer
        </h1>

        {/* Effet de machine à écrire pour afficher plusieurs titres */}
        <h2 className="font-bold text-3xl text-accent mb-2">
          <Typewriter
            options={{
              strings: [
                "Frontend",
                "Backend",
                "Web Developer",
                "Passionate Coder",
              ],
              autoStart: true, // Démarre automatiquement l'animation
              loop: true, // Répète l'animation
              delay: 50, // Délai entre chaque lettre
              deleteSpeed: 30, // Vitesse de suppression du texte
            }}
          />
        </h2>

        {/* Description personnelle */}
        <p className="text-white mb-4">
          I build modern, high-performance, and scalable web applications — from
          beautiful user interfaces to robust backend systems. Driven by
          curiosity and a love for clean code, I turn ideas into smart digital
          solutions.
        </p>

        {/* Section boutons : téléchargement CV et réseaux sociaux */}
        <div className="flex flex-col xl:flex-row items-center gap-6">
          {/* Bouton pour télécharger le CV */}
          <a href="/CV.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 border-accent rounded-2xl"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" /> {/* Icône de téléchargement */}
            </Button>
          </a>

          {/* Icônes des réseaux sociaux (LinkedIn, GitHub) */}
          <div className="flex gap-4 mt-4 xl:mt-0">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                className="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-lg hover:bg-accent hover:text-white hover:transition-all duration-500 "
              >
                {link.icon} {/* Affichage de l'icône */}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section photo */}
      <div className="w-1/2 flex justify-center pt-4 pb-4">
        <Photo /> {/* Composant Photo */}
      </div>
    </div>
  );
}

export default Hero; // Export du composant Hero
