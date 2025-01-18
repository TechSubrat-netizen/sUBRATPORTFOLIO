function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I'm always open to discussing new opportunities, exciting projects, or collaborations. Let’s get in touch!
        </p>

        {/* Contact Information */}
        <div className="mb-8">
          <p className="text-lg text-gray-300">
            <strong>Email:</strong> 
            <a href="mailto:subrat.sahoo@example.com" className="text-teal-400 hover:underline">
              subrat.sahoo@example.com
            </a>
          </p>
          <p className="text-lg text-gray-300 mt-4">
            <strong>Phone:</strong> 
            <a href="tel:+1234567890" className="text-teal-400 hover:underline">
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Email CTA */}
        <a
          href="mailto:subrat.sahoo@example.com"
          className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105 mb-8 inline-block"
        >
          Send an Email
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-teal-400 text-2xl hover:text-teal-500"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-teal-400 text-2xl hover:text-teal-500"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-teal-400 text-2xl hover:text-teal-500"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
