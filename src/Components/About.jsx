
function About() {
  return (
    <section id="about" className=" min-h-screen py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
        Hello! I am Subrat Sahoo, an enthusiastic and motivated fresher passionate about software development. Currently, I am immersing myself in learning the <span className="text-teal-500"> MERN stack</span> (MongoDB, Express.js, React, Node.js) to build dynamic, scalable, and modern web applications.

With a background in <span className="text-teal-500"> MCA</span> (Master of Computer Applications), I have a solid understanding of programming fundamentals and a keen interest in frontend and backend development. My journey has also been enriched by hands-on experience through internships, where I honed my skills in <span className="text-teal-500">JavaScript, HTML, CSS, and SQL.</span>

I enjoy creating solutions that are not only functional but also user-friendly and visually appealing. My goal is to continuously learn and grow as a developer while contributing to impactful projects.

When I’m not coding, I like exploring new technologies and staying updated with industry trends to further refine my skills.

Let’s create something amazing together! 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Core Skills</h3>
            <ul className="text-gray-300">
              <li>✔ React.js & Redux</li>
              <li>✔ Node.js & Express.js</li>
              <li>✔ MongoDB & SQL</li>
              <li>✔ HTML, CSS, JavaScript</li>
              <li>✔ Git, Github</li>
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
