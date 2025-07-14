
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Product Design
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We craft digital experiences that push boundaries, tell stories, and 
          create lasting impressions. Every project is a journey of innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            View Our Work
            <ArrowRight size={20} />
          </button>
          
          <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-white transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
