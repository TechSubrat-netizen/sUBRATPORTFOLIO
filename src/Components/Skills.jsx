import React from "react";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaBootstrap 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiPostman, SiNetlify, SiVercel, SiJsonwebtokens 
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
        { name: "ES6+", icon: <FaJsSquare />, color: "text-yellow-500" },
        { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
        { name: "RESTful API", icon: <SiJsonwebtokens />, color: "text-green-500" },
        { name: "HTTP", icon: <SiJsonwebtokens />, color: "text-gray-300" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "text-red-500" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "SQL", icon: <SiMysql />, color: "text-gray-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
        { name: "Vercel", icon: <SiVercel />, color: "text-black" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Title with custom color */}
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">My Skills</h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          A showcase of the technologies and tools I use to build scalable, modern web applications.
        </p>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400 underline">{category.title}</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-transparent 
                             hover:border-cyan-400 hover:shadow-cyan-500/50 hover:shadow-md transform hover:scale-105 
                             transition duration-300"
                >
                  <div className={`text-6xl ${skill.color} mb-4`}>{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
