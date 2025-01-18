
import React from "react";

function About() {
  return (
    <section id="about" className=" min-h-screen py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          I am a passionate and dedicated <span className="text-teal-400">MERN Stack Developer</span> with a strong
          foundation in building scalable, user-friendly web applications. With experience in{" "}
          <span className="text-teal-400">React.js</span>, <span className="text-teal-400">Node.js</span>, and{" "}
          <span className="text-teal-400">MongoDB</span>, I focus on delivering high-quality, maintainable solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Core Skills</h3>
            <ul className="text-gray-300">
              <li>✔ React.js & Redux</li>
              <li>✔ Node.js & Express.js</li>
              <li>✔ MongoDB & SQL</li>
              <li>✔ HTML, CSS, JavaScript</li>
              <li>✔ Git, Docker, and CI/CD</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Values I Bring</h3>
            <p className="text-gray-300">
              I prioritize clean code, efficient solutions, and a collaborative work environment. My focus is always on
              creating value for end-users while continuously learning and improving my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
