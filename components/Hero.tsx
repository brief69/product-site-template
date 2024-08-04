import Image from 'next/image';

const Hero = () => (
  <section id="hero-top" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Remix AI</h1>
      <p className="text-xl mb-8">Revolutionize your workflow with our AI solutions</p>
      <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;
