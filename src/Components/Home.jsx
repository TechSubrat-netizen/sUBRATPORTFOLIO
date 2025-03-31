
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import pdf from '../assets/SUBRAT_SAHOO.pdf'

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-teal-400">Subrat Sahoo</span>
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl">
          A Passionate <span className="text-teal-400">MERN Stack Developer</span> crafting modern web applications with intuitive user experiences.
        </p>
        <div className="flex space-x-6 mt-6">
          {/* <a
            href="#projects"
            className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
          >
            View My Work
          </a> */}
          <a
            href="#contact"
            className= "bg-teal-400 hover:bg-teal-500border border-teal-400 px-6 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition-transform transform hover:scale-105  text-gray-900"
          >
            Contact Me
          </a>
         
          <a href={pdf} target="_blank" type="media" rel="alternate" media="print"  className="border border-teal-400 px-6 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition-transform transform hover:scale-105" download="SUBRAT.pdf">View my Resume</a>
        </div>
        <div className="flex space-x-4 mt-8">
          <a href="https://github.com/TechSubrat-netizen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-teal-400 transition" />
          </a>
          <a href="http://www.linkedin.com/in/subrat-sahoo-b72337261" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-teal-400 transition" />
          </a>
          <a href="https://x.com/kh173952700?t=rbjzEGHsWmFlXnBQf59HwQ&s=08" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-teal-400 transition" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 text-center">
          I am a skilled software developer specializing in the MERN stack. My passion lies in building scalable and user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB. I&apos;m always eager to learn new tools and techniques to enhance my skill set and deliver top-quality work.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3", "Git","DSA","Bootstrap","Tailwind","Python","Netify","Git"  ,"Github","Oracle Sql"].map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 px-6 py-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <p className="text-teal-400 text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-teal-400 transition"
            >
              <h3 className="text-teal-400 text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-300">
                A brief description of this project. It showcases my skills in MERN stack and problem-solving abilities.
              </p>
              <a
                href="#"
                className="text-teal-400 mt-4 inline-block hover:underline hover:text-teal-500"
              >
                View Details <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Have a project in mind? I&apos;d love to collaborate and bring your ideas to life.
        </p>
        <a
          href="mailto:subratsahoo3883@example.com"
          className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        © 2025 Subrat Sahoo. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;