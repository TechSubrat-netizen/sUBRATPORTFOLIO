function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Hello! I am Subrat Sahoo, a passionate and skilled software developer currently working as a <span className="text-teal-500">React Native Developer</span>. I specialize in building cross-platform mobile applications and have hands-on experience with the <span className="text-teal-500">MERN stack</span> (MongoDB, Express.js, React, Node.js) to develop scalable and dynamic web applications.
          <br /><br />
          With a background in <span className="text-teal-500">MCA</span> (Master of Computer Applications), I possess a strong foundation in programming, and I’ve grown through real-world experience during internships and projects involving <span className="text-teal-500">JavaScript, HTML, CSS, SQL</span>, and modern UI design principles.
          <br /><br />
          I'm deeply passionate about crafting both the logic and the look — blending clean backend structures with engaging front-end interfaces. Whether it's designing seamless mobile experiences or full-stack web platforms, I aim to deliver applications that are intuitive, performant, and user-focused.
          <br /><br />
          Outside of coding, I enjoy exploring new tools, keeping up with tech trends, and continuously leveling up my skill set.
          <br /><br />
          Let’s build something impactful together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Core Skills</h3>
            <ul className="text-gray-300">
              <li>✔ React Native & React.js</li>
              <li>✔ Node.js & Express.js</li>
              <li>✔ MongoDB & SQL</li>
              <li>✔ HTML, CSS, JavaScript</li>
              <li>✔ Git & GitHub</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Values I Bring</h3>
            <p className="text-gray-300">
              I prioritize clean code, practical solutions, and a collaborative mindset. My goal is to create meaningful user experiences while continuously improving as a full-stack and mobile developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
