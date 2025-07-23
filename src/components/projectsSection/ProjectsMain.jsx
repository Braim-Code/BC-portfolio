import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Project list
const projects = [
  {
    name: "Omoceb Venture",
    year: "Mar 2025",
    align: "right",
    image: "/images/website-img-1.jpg", // ✅ Correct public path
    link: "https://braim-code.github.io/omoceb/",
  },
  {
    name: "BandHitz",
    year: "Sept 2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://bandhit.onrender.com", // You can update this later with a real URL
  },
  {
    name: "Tia Medical",
    year: "Jan 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: " https://braim-code.github.io/tia-med/",
  },
  {
    name: "Calculator",
    year: "May 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: " https://braim-code.github.io/calculator/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      {/* Section Title */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Passing link here
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
