function CodingProfiles() {
    return (
      <section id="profiles" className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-teal-400">Coding Profiles</h2>
          <p className="text-lg text-gray-300 mb-12">
            Here are my profiles on various coding platforms where I showcase my problem-solving skills.
          </p>
  
          {/* Coding Platform Links */}
          <div className="flex justify-center mb-12 space-x-8">
            <a
              href="https://www.hackerrank.com/profile/subratsahoo3883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              HackerRank
            </a>
            <a
              href="https://leetcode.com/u/Subratsahoo6372/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/user_06p6v828wdq/e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              GeeksforGeeks
            </a>
          </div>
  
          {/* Certifications Box */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
            <h3 className="text-3xl font-semibold text-teal-400 mb-4">My Certifications</h3>
            <div className="h-48 overflow-y-auto">
              <ul className="space-y-4 text-lg text-gray-300">
                <li>✔ HackerRank: JavaScript (Basic)</li>
                <li>✔ HackerRank: Problem Solving (Intermediate)</li>
                <li>✔ HackerRank: SQL (Basic)</li>
                <li>✔ HackerRank: Python (Advanced)</li>
                <li>✔ LeetCode: Data Structures and Algorithms</li>
                <li>✔ GeeksforGeeks: Full Stack Development</li>
                {/* Add more certifications as needed */}
              </ul>
            </div>
          </div>
  
          {/* Contact Button */}
          <a
            href="mailto:subrat.sahoo@example.com"
            className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105 mb-8 inline-block"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  
  export default CodingProfiles;
  