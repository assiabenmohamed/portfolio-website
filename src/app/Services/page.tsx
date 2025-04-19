"use client"; // Directive pour exécuter ce code côté client dans Next.js

import React from "react"; // Importation de React
import "./style.css"; // Importation du fichier CSS pour les styles personnalisés
import { motion } from "framer-motion"; // Importation de Framer Motion pour les animations

// Définition des variantes pour l'animation du conteneur (invisible au début puis apparaît avec un délai)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre l'apparition de chaque élément
    },
  },
};

// Définition des variantes pour chaque élément (ils se déplacent de la gauche à droite lors de l'apparition)
const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

// Liste des services proposés
const services = [
  {
    title: "Web Design", // Titre du service
    img: "/responsive.png", // Image associée au service
    description: "Modern and responsive designs tailored to your brand.", // Description du service
  },
  {
    title: "Web Development",
    img: "/webdev.jpg",
    description: "Custom websites and web apps using modern technologies.",
  },
  {
    title: "SEO Optimization",
    img: "/seo.png",
    description: "Improve your visibility and rank higher in search engines.",
  },
  {
    title: "Maintenance & Support",
    img: "/suport.jpg",
    description: "Ongoing updates, bug fixes, and performance monitoring.",
  },
  {
    title: "Data Visualization",
    img: "datavis.png",
    description: "Create interactive dashboards with tools like Power BI or Tableau.",
  },
  {
    title: "Data Warehousing",
    img: "data-warehousing.png",
    description: "Design and manage data warehouses for scalable data storage.",
  },
  {
    title: "ETL Processes",
    img: "etl.png",
    description: "Extract, transform, and load data from multiple sources efficiently.",
  },
  {
    title: "Predictive Analytics",
    img: "/predictive.jpg",
    description: "Use AI and ML models to forecast trends and drive smart decisions.",
  },
];

function Page() {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Titre de la section "My Services" */}
          <h2 className="text-3xl font-bold text-center mb-12 text-accent ">
            My Services
          </h2>

          {/* Animation du conteneur contenant tous les services */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Parcours de la liste des services */}
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item} // Animation pour chaque élément
                className="flex flex-col items-center p-6 border border-gray-600 rounded-lg shadow-lg w-56 bg-black"
              >
                {/* Affichage de l'image du service */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-40 h-25 mb-2 object-contain"
                />
                {/* Titre du service */}
                <h3 className="text-xl font-semibold mb-2 text-accent text-center">
                  {service.title}
                </h3>
                {/* Description du service */}
                <p className="text-center text-white">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Page;
