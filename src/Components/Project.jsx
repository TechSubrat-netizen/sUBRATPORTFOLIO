

function Project() {
  const projectList = [
    {
      title: "E-Commerce Platform  (Ongoing)",
      description:
        "A fully functional e-commerce platform with product listings, user authentication, cart management, and secure payment integration using the Stripe API. Developed using the MERN stack." ,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.j"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience. Built with React.js and Tailwind CSS for a modern and responsive design.",
      technologies: ["React.js", "Tailwind CSS"],
      link: "https://subratportfolio007.netlify.app/",
    },
    {
      title: "Crypto App",
      description:
        "A cryptocurrency tracking application that provides real-time price updates, market trends, and historical data using external APIs.",
      technologies: ["React.js", "Axios", "CoinGecko API"],
      link: "https://cryptovisualize.netlify.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic Tic-Tac-Toe game built using React.js with interactive UI and player vs. AI mode.",
      technologies: ["React.js"],
      link: "https://ttiic-tac.netlify.app/",
    },
    {
      title: "Image Slider",
      description:
        "A dynamic image slider component that allows users to navigate through images smoothly using buttons or autoplay.",
      technologies: ["React.js", "CSS"],
      link: "https://imageslid.netlify.app/",
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list app that allows users to add, edit, and delete tasks. Data persistence is managed using local storage.",
      technologies: ["React.js", "Local Storage"],
      link: "https://moonlit-zuccutto-f7f9d0.netlify.app/",
    },
    {
      title: "Bubble Selector",
      description:
        "An interactive bubble selection game where users pop bubbles based on a specific sequence, testing their reflexes.",
      technologies: ["React.js", "JavaScript"],
      link: "https://bubblles.netlify.app/",
    },
    {
      title: "Random Password Generator",
      description:
        "A password generator that creates strong, randomized passwords based on user preferences (length, special characters, numbers, etc.).",
      technologies: ["React.js", "JavaScript"],
      link: "https://passgeneratorss.netlify.app/",
    },
    {
      title: "Calculator",
      description:
        "A fully functional calculator that performs basic arithmetic operations with a sleek and user-friendly interface.",
      technologies: ["React.js", "CSS"],
      link: "https://calc089.netlify.app/",
    },
    {
      title: "Background Changer",
      description:
        "A simple web app that allows users to change the background color of the webpage dynamically.",
      technologies: ["React.js", "JavaScript"],
      link: "https://bgchanger07.netlify.app/",
    },
    {
      title: "Stopwatch",
      description:
        "A stopwatch application with start, stop, and reset functionalities. Displays elapsed time in a precise format.",
      technologies: ["React.js", "JavaScript"],
      link: "#",
    },
    {
      title: "Digital Clock",
      description:
        "A real-time digital clock displaying the current time with hours, minutes, and seconds. Updated dynamically every second.",
      technologies: ["React.js", "JavaScript"],
      link: "https://dg-cloc0k.netlify.app/",
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
