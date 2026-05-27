function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Hello! I am Subrat Sahoo, currently working at{" "}
          <span className="text-teal-500">
            Aarna Digital India Pvt Ltd
          </span>{" "}
          as an{" "}
          <span className="text-teal-500">
            L1 Level Network Engineer
          </span>.
          My role involves monitoring network systems, troubleshooting network
          and connectivity issues, configuring network devices, and providing
          technical support to ensure smooth IT infrastructure operations.
          <br /><br />

          I have a strong interest in technology and problem-solving, with
          knowledge of{" "}
          <span className="text-teal-500">
            JavaScript, HTML, CSS, SQL, React Native
          </span>{" "}
          and modern application development.
          <br /><br />

          With a background in{" "}
          <span className="text-teal-500">
            MCA
          </span>{" "}
          (Master of Computer Applications), I continuously work on improving my
          technical skills and learning new technologies.
          <br /><br />

          Outside of work, I enjoy exploring new tools, staying updated with
          technology trends, and enhancing my knowledge in networking and
          software development.
          <br /><br />

          Let’s build something impactful together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Core Skills
            </h3>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Network Monitoring & Troubleshooting</li>
              <li>✔ Router & Switch Configuration</li>
              <li>✔ Technical Support</li>
              <li>✔ React Native</li>
              <li>✔ HTML, CSS & JavaScript</li>
              <li>✔ SQL & GitHub</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Values I Bring
            </h3>

            <p className="text-gray-300">
              I value continuous learning, teamwork, and practical
              problem-solving. I always aim to deliver reliable solutions and
              improve my technical expertise every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;