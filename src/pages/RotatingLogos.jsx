import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import FoodProcessing from "../assets/tracks/FOOD processing technologies.jpeg";
import FoodEngineering from "../assets/tracks/food engineering.jpeg"
import Thermal  from "../assets/tracks/Thermal & non thermal preservation methods.jpeg";
import FoodBio from "../assets/tracks/food biotechnology -enzymes &fermentation.jpeg";
import Probiotics from "../assets/tracks/probiotics &functional food innovation.jpeg";
import Alternative from "../assets/tracks/Alternative proteins plant based cultured&fermentation- derived.jpeg"
import Nutra from "../assets/tracks/Nutraceuticals& bioactive compounds.png";
import FoodSafety from "../assets/tracks/food safety management.jpeg"
import FoodQuality from "../assets/tracks/food quality assurance& shelf line modeling.jpeg";
import Standards from "../assets/tracks/standards &global regulartory compliances.jpeg"
import FoodFraud from "../assets/tracks/food fraud dection &analytical technology.jpeg";
import FoodProcessing1 from "../assets/tracks/food processing &green technologies.jpeg"
import FoodWaste from "../assets/tracks/food waste reduction &circular food system.jpeg";
import Smart from "../assets/tracks/smart biodergradable &edible packaging.jpeg"
import climate from "../assets/tracks/climate smartfood system&life cycle assessment.jpeg";
import iot1 from "../assets/tracks/IOT automation &smart manufacturing.jpeg"
import DataAnalystic from "../assets/tracks/Data analytics for food innovation.jpeg"
import DigitalTwins from "../assets/tracks/Digital twins predictive modeling in food processing.png";
import Precison1 from "../assets/tracks/precision fermentation.jpeg"
import Cold from "../assets/tracks/cold plasma preservation.jpeg"

export const tracks = [
  {
    image: FoodProcessing,
    title: "Food Processing Technologies (HPP, PEF, Ultrasound, Ohmic)",
    description: (
      <>
This track explores advanced food processing technologies including High Pressure Processing (HPP), Pulsed Electric Fields (PEF), Ultrasound, and Ohmic Heating. It highlights their role in improving food safety, extending shelf life, preserving nutrients, enhancing quality, and enabling sustainable, energy-efficient food manufacturing practices.{" "}
        <Link
          to="/executive-panel-members/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       
        </Link>
   
      </>
    ),
  },

  {
    image: FoodEngineering,
    title: "Food Engineering",
    description: (
      <>
        Examines the principles and applications of food engineering in modern food systems. Topics include process design, heat and mass transfer, equipment innovation, modeling, automation, and scale-up strategies that enhance efficiency, product quality, safety, sustainability, and industrial performance across{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         food manufacturing sectors.
        </Link>{" "}
       
      </>
    ),
  },

  {
    image: Thermal,
    title: "Thermal & Non-Thermal Preservation Methods",
    description: (
      <>
     Thermal & Non-Thermal Preservation Methods
This track covers thermal and non-thermal preservation methods used to ensure food safety and quality. It addresses conventional heat treatments alongside emerging technologies that extend shelf life, inactivate microorganisms, retain nutritional value, and support clean-label, sustainable{" "}
        <Link
          to="/foodtech-event-schedule" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      food preservation solutions.
        </Link> 
      </>
    ),
  },

  {
    image: FoodBio,
    title: "Food Biotechnology - Enzymes & Fermentation",
    description: (
      <>
      This track explores food   {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   biotechnology 
        </Link>{" "}
with a focus on enzymes and fermentation. It highlights their role in improving processing efficiency, flavor development, nutritional enhancement, functional foods, shelf-life extension, and the production of innovative, sustainable, and value-added food products.
      </>
    ),
  },

  {
    image: Probiotics ,
    title: "Probiotics & Functional Foods Innovation",
    description: (
      <>
    This track highlights innovations in probiotics and functional foods, focusing on formulation, delivery systems, stability, and health benefits. It explores science-driven approaches to gut health, immunity, personalized nutrition, regulatory trends, and the development of next-generation functional products for global markets.{" "}
        {/* <Link
          to="/foodtech-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     
        </Link>{" "} */}
   
      </>
    ),
  },

  {
    image: Alternative,
    title: "Alternative Proteins: Plant-Based, Cultured & Fermentation-Derived",
    description: (
      <>
Explores alternative protein innovations including plant-based, cultured, and fermentation-derived sources. It covers processing technologies, nutrition, scalability, sensory optimization, sustainability, regulatory challenges, and market adoption shaping the future of protein for resilient 
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      global food systems.
        </Link>{" "}
     
      </>
    ),
  },

  {
    image: Nutra,
    title: "Nutraceuticals & Bioactive Compounds",
    description: (
      <>
This track focuses on nutraceuticals and bioactive compounds, covering sources, extraction, formulation, and efficacy. It explores their role in disease prevention, wellness, functional food development, regulatory considerations, and innovative delivery systems supporting health-driven consumer demand.{" "}
        <Link
          to="/foodtech-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       
        </Link>{" "}
      </>
    ),
  },

  {
    image:  FoodSafety,
    title: "Food Safety Management",
    description: (
      <>
       This track addresses{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     food safety management systems 
        </Link>{" "}
       ensuring compliance and consumer protection. Topics include hazard analysis, risk assessment, regulatory standards, traceability, quality assurance, digital monitoring, and best practices to prevent contamination, ensure product integrity, and maintain safety across the food supply chain.practices.
      </>
    ),
  },

  {
    image: FoodQuality,
    title: "Food Quality Assurance & Shelf-Life Modeling",
    description: (
      <>
      This track focuses on{" "}
        <Link
          to="/foodtech-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         food quality assurance and shelf-life modeling
        </Link>{" "}
     strategies. It covers quality control systems, predictive modeling, packaging interactions, storage conditions, sensory evaluation, and data-driven approaches to optimize product stability, ensure compliance, reduce waste, and extend shelf life in food products.
      </>
    ),
  },

  {
    image: Standards,
    title: "Standards & Global Regulatory Compliance (FSSAI, FDA, EFSA)",
    description: (
      <>
 This track focuses on{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       standards and global regulatory compliance 
        </Link>{" "}
 across food systems. It covers frameworks and guidelines from FSSAI, FDA, and EFSA, addressing food safety, labeling, approvals, risk assessment, documentation, and strategies for navigating international regulatory requirements and market access.
      </>
    ),
  },

  {
    image: FoodFraud,
    title: "Food Fraud Detection & Analytical Technologies",
    description: (
      <>
       Examines {" "}
        <Link
          to="/about-foodtech-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        food fraud detection and advanced analytical technologies 
        </Link> used to ensure authenticity and integrity. It covers rapid testing, spectroscopy, chromatography, DNA-based methods, traceability tools, and data analytics to detect adulteration, verify origin, protect brands, and strengthen consumer trust.
      </>

    ),
  },

  {
    image: FoodProcessing1,
    title: "Food Processing & Green Technologies",
    description: (
      <>
 This track explores {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    food processing innovations aligned with green technologies.
        </Link>{" "}   It focuses on energy-efficient processes, waste valorization, water conservation, clean-label solutions, renewable inputs, and sustainable manufacturing strategies that reduce environmental impact while maintaining food quality, safety, and economic viability.
      
      </>
    ),
  },

  {
    image: FoodWaste,
    title: "Food Waste Reduction & Circular Food Systems",
    description: (
      <>
  This track addresses food waste reduction and circular food systems. It explores prevention strategies, by-product valorization, smart packaging, supply chain optimization, and policy frameworks that promote resource efficiency, sustainability, and the transition toward resilient, low-waste food ecosystems.{" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       plant–microbiome engineering
        </Link>  */}

        
      </>
    ),
  },

  {
    image: Smart,
    title: "Smart, Biodegradable & Edible Packaging",
    description: (
      <>
    Explores smart, biodegradable, and edible packaging innovations. It covers active and intelligent packaging, sustainable materials, biodegradability, food–package interactions, shelf-life extension, safety, and regulatory aspects driving eco-friendly packaging solutions for the  {" "}
        <Link
          to="/foodtech-conference-tracks/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        food industry.
        </Link> 
        
      </>
    ),
  },

  {
    image: climate,
    title: "Climate-Smart Food Systems & Life Cycle Assessment (LCA)",
    description: (
      <>
       This track focuses on {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        climate-smart food systems and Life Cycle Assessment 
        </Link> (LCA). It examines carbon footprinting, resource efficiency, sustainable sourcing, climate resilience, impact assessment tools, and data-driven strategies to reduce environmental impacts across food production, processing, and supply chains.
     
      </>
    ),
  },

  {
    image: iot1,
    title: "IoT, Automation & Smart Manufacturing",
    description: (
      <>
This track explores IoT, automation, and smart manufacturing in the food industry. It covers connected devices, sensors, robotics, real-time monitoring, data analytics, and process optimization to enhance efficiency, quality, traceability, and sustainability in modern food production systems. {" "}
        {/* <Link
          to="/about-foodtech-conclave" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          regenerative horticulture, agroforestry, and polyculture systems. 
        </Link> */}
</>
    ),
  },

  {
    image: DataAnalystic,
    title: "Data Analytics for Food Innovation",
    description: (
      <>
     This track focuses on {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          data analytics for food innovation,
        </Link> 
     covering big data, AI, machine learning, predictive modeling, and consumer insights. It highlights how data-driven approaches optimize product development, quality, supply chains, personalization, and sustainability in the evolving food industry.
      </>
    ),
  },
// Ethical

  {
    image: DigitalTwins,
    title: "Digital Twins, Predictive Modeling in Food Processing",
    description: (
      <>
     {" "}
        {/* <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbiome research 
        </Link>  */}
This track explores digital twins and predictive modeling in food processing. It covers virtual simulations, real-time monitoring, process optimization, quality control, and decision-support systems that enhance efficiency, reduce waste, ensure safety, and drive innovation in modern food manufacturing.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: Precison1,
    title: "Precision Fermentation",
    description: (
      <>
 This track focuses on   {" "}
        <Link
          to="/about-foodtech-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  precision fermentation,
        </Link>  highlighting advanced techniques for producing proteins, enzymes, and bioactive compounds with high efficiency and consistency. It explores applications in food innovation, sustainability, scalability, regulatory considerations, and the development of next-generation functional and alternative food products.
      </>
    ),
  },
  {
    image: Cold,
    title: "Cold Plasma Preservation",
    description: (
      <>
      Explores cold plasma preservation as an emerging non-thermal food processing technology. It covers microbial inactivation, shelf-life extension, nutrient retention, safety, scalability, and applications across fresh, minimally processed, and packaged foods, promoting innovative and sustainable preservation solutions. {" "}
        {/* <Link
          to="/foodtech-conference-tracks/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      certification frameworks for regenerative farming.
        </Link>{" "}  */}
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
