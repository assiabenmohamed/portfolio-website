"use client"; // Directive pour que le code fonctionne côté client dans Next.js

import { motion } from "framer-motion"; // Importation des animations avec Framer Motion
import React from "react";
import {
  FaLaptopCode,
  FaTools,
  FaShoppingCart,
  FaDumbbell,
} from "react-icons/fa"; // Importation des icônes des projets

// Liste des projets avec icônes, titres, descriptions et outils utilisés
const projects = [
  {
    icon: <FaTools size={20} />,
    title: "Decision Support System",
    description:
      "Development of a decision support system for transportation activities of the GPL branch, utilizing SSMS, SSIS, SSAS, SSRS, and Power BI for analysis and reporting.",
    tools: "SSMS, SSIS, SSAS, SSRS, Power BI",
  },
  {
    icon: <FaLaptopCode size={20} />,
    title: "Information System for ITIL V3 Processes",
    description:
      "Designed and implemented an information system for monitoring and managing ITIL V3 processes using HTML, CSS, PHP, and JavaScript.",
    tools: "HTML, CSS, PHP, JavaScript, MySQL",
  },
  {
    icon: <FaShoppingCart size={20} />,
    title: "E-Commerce Web Application",
    description:
      "Developed an e-commerce web application with a focus on user experience and secure transactions. Implemented with React.js, Node.js, Express, and integrated with a payment gateway.",
    tools: "React.js, Node.js, Express, MongoDB",
  },
  {
    icon: <FaDumbbell size={20} />,
    title: "Gym Management System",
    description:
      "Developed a Gym Management System to handle membership registration, scheduling, billing, and attendance tracking. The system allows gym members to book classes and track their fitness progress.",
    tools: "React.js, Node.js, Express, MongoDB",
  },
];

// Composant principal qui affiche les projets
export default function Projects() {
  return (
    <div className=" text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-accent mb-12 text-center">
          My Projects
        </h2>

        {/* Animation pour l'apparition des projets avec effet de délai */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Parcours chaque projet pour l'afficher */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700"
            >
              {/* Section contenant l'icône et le titre du projet */}
              <div className="flex items-center mb-4">
                <div className="bg-accent text-black p-3 rounded-full mr-4">
                  {project.icon} {/* Icône du projet */}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {project.title} {/* Titre du projet */}
                  </h4>
                </div>
              </div>
              {/* Description du projet */}
              <p className="text-gray-300 text-sm">{project.description}</p>
              {/* Outils utilisés pour chaque projet */}
              <p className="text-gray-400 text-sm italic mt-2">
                <span className="font-bold">Tools:</span> {project.tools}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
