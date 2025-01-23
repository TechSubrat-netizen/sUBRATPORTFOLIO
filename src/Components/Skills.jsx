import React from "react";

function Skills() {
  const skills = [
    { name: "React.js", icon: "⚛️", color: "text-blue-400" },
    { name: "Node.js", icon: "🌳", color: "text-green-400" },
    { name: "Express.js", icon: "🚀", color: "text-gray-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "JavaScript", icon: "💛", color: "text-yellow-400" },
    { name: "HTML5", icon: "🔶", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-500" },
    { name: "Git & GitHub", icon: "🐙", color: "text-gray-500" },
          { name: "SQL", icon: "💛", color: "text-gray-500" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          A showcase of the technologies and tools I use to build scalable, modern web applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className={`text-4xl ${skill.color} mb-4`}>{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
