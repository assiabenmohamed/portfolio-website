"use client"; // Directive nécessaire pour les composants côté client avec Next.js

import React from "react";
import { motion } from "framer-motion"; // Animation avec Framer Motion
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUniversity,
  FaGlobe,
  FaSchool,
} from "react-icons/fa"; // Icônes d’éducation

// Liste des parcours éducatifs avec icônes, titres, institutions et dates
const education = [
  {
    icon: <FaGraduationCap size={24} />,
    title: "Master’s Degree in Software Engineering",
    institution:
      "USTHB - University of Science and Technology Houari Boumediene",
    location: "Bab Ezzouar, Algiers",
    date: "09/2021 – 07/2022",
  },
  {
    icon: <FaUniversity size={24} />,
    title: "Bachelor’s Degree in Computer Science",
    institution:
      "USTHB - University of Science and Technology Houari Boumediene",
    location: "Bab Ezzouar, Algiers",
    date: "09/2019 – 06/2020",
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "Web Development – Level 2",
    institution: "Smart Training Academy",
    location: "Bab Ezzouar, Algiers",
    date: "09/2019 – 06/2020",
  },
  {
    icon: <FaGlobe size={24} />,
    title: "Full Stack Web Development",
    institution: "GoMyCode (Remote)",
    location: "Online",
    date: "11/2024 – 04/2025",
  },
  {
    icon: <FaSchool size={24} />,
    title: "High School Diploma – Science Track",
    institution: "Lycée Abd El Aziz Rdouan Ben Kadour",
    location: "El Achour, Algiers",
    date: "09/2015 – 06/2016",
  },
];

// Animation parent : permet de décaler chaque enfant avec stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation individuelle pour chaque item (slide in depuis la gauche)
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Composant principal de la page
function page() {
  return (
    <div className="flex justify-center">
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Titre */}
          <h2 className="text-4xl font-bold text-accent mb-12 text-center">
            Education
          </h2>

          {/* Bloc animé contenant chaque élément du parcours */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10"
          >
            {/* Boucle sur chaque entrée de l'éducation */}
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-10 border-l border-accent"
              >
                {/* Icône circulaire à gauche */}
                <div className="absolute -left-5 top-0 bg-accent text-black rounded-full p-2">
                  {item.icon}
                </div>

                {/* Contenu de chaque formation */}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.institution}</p>
                <p className="text-gray-400 text-sm italic">
                  {item.location} — {item.date}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default page;
