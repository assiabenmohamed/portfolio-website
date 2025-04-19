"use client";
import Image from "next/image"; // Importation de l'image
import Link from "next/link"; // Importation du composant Link de Next.js
import { usePathname } from "next/navigation"; // Permet de récupérer le chemin de la page actuelle
import React from "react"; // Importation de React
import { IoIosClose, IoMdMenu } from "react-icons/io"; // Icônes pour le menu mobile

// Tableau des liens de navigation
const link = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/Services" },
  { name: "Skills", path: "/Skills" },
  { name: "Projects", path: "/Projects" },
  { name: "Resume", path: "/Resume" },
  { name: "Education", path: "/Education" },
  { name: "contact", path: "/Contact" },
];

function Navbar() {
  const pathname = usePathname(); // Récupère le chemin de la page actuelle
  const [isOpen, setIsOpen] = React.useState(false); // Etat pour gérer l'ouverture/fermeture du menu mobile

  return (
    <div className="flex flex-col gap-6 w-full p-prim bg-black font-jetbrains-mono xl:px-30 xl:flex-row">
      {/* Section Logo et Menu mobile */}
      <div className="flex justify-between w-full items-center">
        {/* Lien vers la page d'accueil avec logo */}
        <Link href={"/"}>
          <Image src="/logo.jpg" alt="Logo" width={80} height={20} />
        </Link>

        {/* Icônes du menu mobile : afficher ou fermer */}
        <div className="xl:hidden">
          {!isOpen ? (
            <IoMdMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)} // Ouvre le menu mobile
            />
          ) : (
            <IoIosClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)} // Ferme le menu mobile
            />
          )}
        </div>
      </div>

      {/* Menu de navigation (pour écran large) */}
      <ul className="hidden gap-6 text-white xl:flex">
        {link.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path && "border-b border-accent text-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu mobile (affiché lorsque isOpen est vrai) */}
      <ul
        className={`${isOpen ? "flex flex-col" : "hidden"} gap-6 text-white items-center xl:hidden`}
      >
        {link.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path && "border-b border-accent text-accent"
              } capitalize font-medium hover:text-accent transition-all`}
              onClick={() => setIsOpen(false)} // Ferme le menu après clic
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
