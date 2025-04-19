"use client"; // Directive pour exécuter ce code côté client dans Next.js

import { motion } from "framer-motion"; // Importation de Framer Motion pour les animations
import { useInView } from "framer-motion"; // Hook de Framer Motion pour détecter quand un élément est visible
import React, { useRef } from "react"; // Importation de React et useRef pour gérer les références DOM
import { FaBriefcase } from "react-icons/fa"; // Icône de travail provenant de react-icons

// Liste des expériences professionnelles
const experiences = [
  {
    icon: <FaBriefcase size={20} />, // Icône de l'expérience
    title: "Software Engineering Intern", // Titre de l'emploi
    company: "SPA Naftal / GPL Branch", // Nom de l'entreprise
    location: "Mohammadia-Alger, Algeria", // Localisation
    date: "04/2022 - 07/2022", // Période de travail
    description:
      "Completed a Master's degree project focusing on the design and implementation of a decision support solution for the transport activities of the GPL branch.", // Description de l'expérience
    contact: "azzedine.beh@gmail.com, fatimekhazni@yahoo.fr", // Contacts pour cette expérience
  },
  {
    icon: <FaBriefcase size={20} />, // Icône pour cette expérience
    title: "IT Systems Intern", // Titre de l'emploi
    company: "Épale", // Nom de l'entreprise
    location: "Algiers, Algeria", // Localisation
    date: "04/2020 - 09/2020", // Période de travail
    description:
      "Designed and implemented an information system for monitoring and managing ITIL V3 processes.", // Description de l'expérience
    contact: "hkam86@gmail.com", // Contact associé
  },
];

export default function Resume() {
  const ref = useRef(null); // Référence à un élément DOM pour utiliser avec le hook useInView
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Détection de la visibilité de l'élément

  return (
    <div className=" text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Titre de la section */}

        {/* Animation pour afficher les expériences avec un délai entre chaque élément */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          <div ref={ref}>
            {/* Titre de la section "Experience" */}
            <h3 className="text-3xl font-semibold text-accent mb-8">
              Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Parcours chaque expérience pour l'afficher */}
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700"
                >
                  {/* Section avec icône et informations de l'expérience */}
                  <div className="flex items-center mb-4">
                    <div className="bg-accent text-black p-3 rounded-full mr-4">
                      {item.icon} {/* Icône de l'expérience */}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {item.title} {/* Titre du poste */}
                      </h4>
                      <p className="text-gray-400">{item.company}</p>{" "}
                      {/* Nom de l'entreprise */}
                    </div>
                  </div>
                  {/* Localisation et période de travail */}
                  <p className="text-gray-300 text-sm italic">
                    {item.location} — {item.date}
                  </p>
                  {/* Description de l'expérience */}
                  <p className="text-gray-200 mt-2">{item.description}</p>
                  {/* Contact (si disponible) */}
                  {item.contact && (
                    <p className="text-gray-400 text-sm italic mt-2">
                      <span className="font-bold">Contact:</span> {item.contact}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
