
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-start justify-start px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
          Product Design
          <br />
          <span className="text-primary">
            Experience
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
          We craft digital experiences that push boundaries, tell stories, and 
          create lasting impressions. Every project is a journey of innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
            View Our Work
            <ArrowRight size={20} />
          </button>
          
          <button className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
