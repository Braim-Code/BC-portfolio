import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a detail-oriented full-stack web developer skilled in both frontend and backend development.
         My core tech stack includes React, Next.js, TypeScri pt, Tailwind CSS, Node.js, Express, MongoDB, and Firebase.
          I also have hands-on experience with authentication systems, API development, RESTful services, and deploying production-ready applications.
          I thrive in building scalable, maintainable applications with a focus on clean code, performance, and responsive design.
          I value collaboration, version control (Git), and agile development practices.
          I'm committed to continuous learning and staying up-to-date with evolving web technologies.
          I'm currently open to remote developer roles, freelance gigs, and team collaborations.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
