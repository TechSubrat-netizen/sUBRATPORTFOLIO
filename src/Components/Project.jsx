

function Project() {
  const projectList = [
    {
      title: "E-Commerce Platform",
      description:
        "A scalable e-commerce platform with product listings, cart functionality, and payment integration using MERN stack.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing my projects, skills, and contact information with a responsive design.",
      technologies: ["React.js", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Blogging Platform",
      description:
        "A multi-user blogging platform with rich-text editing, user authentication, and comments functionality.",
      technologies: ["Express.js", "MongoDB", "React.js"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-400 transition"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-teal-300 text-sm mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                className="text-teal-400 hover:text-teal-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
