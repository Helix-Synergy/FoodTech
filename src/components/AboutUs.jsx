import React from "react";
import about_img from "../assets/about_img.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">

      {/* Image Section */}
      {/* <div className="flex justify-center">
        <img
          src={about_img}
          alt="Dental Conference 2026"
          loading="lazy"
          className="h-[50%] md:max-h-[50%] w-auto md:w-[80vh] md:mx-16 rounded-2xl object-cover"
        />
      </div> */}
    <div className="flex justify-center">
        <img
          src={about_img}
          alt="FOODTECH"
className="h-[40vh] md:min-h-[50vh] max-h-[420px] w-auto md:max-w-[420px] mx-auto md:mx-16 rounded-xl object-contain"
loading="lazy"
        />
      </div>



      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Advancing Global Leadership  </span>{" "}
       in Future FoodTech
        </h1>
        <p className="text-base my-2">
        Welcome to the premier global platform for the  <Link to="/foodtech-orators"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">Future FoodTech Conference.</Link> Our international summits convene leading experts, innovators, and decision-makers shaping the next generation of food systems.
The Future FoodTech Conference brings together pioneers in food technology, alternative proteins, precision fermentation, cellular agriculture, sustainable nutrition, food processing, packaging innovation, and digital food systems. This global forum addresses the critical challenges and transformative opportunities redefining how the world produces, processes, distributes, and consumes food.{" "}
          <Link
            className="text-accent font-bold"
            target="_blank"
            to="https://helixconferences.com/blog.php"
          ></Link>{" "}
        </p>
<p>“Transforming Global Food Systems Through Future FoodTech Innovation”</p>
        <Link to="/about-foodtech-conclave" >
          <button className="flex bg-one text-white px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
