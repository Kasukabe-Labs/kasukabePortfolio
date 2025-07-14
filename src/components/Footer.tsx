
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's create something
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                extraordinary
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Ready to transform your ideas into exceptional digital experiences? 
              Let's start a conversation about your next project.
            </p>
            
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
              Start a Project
              <ArrowUpRight size={20} />
            </button>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={20} />
                  <span>hello@kasukabeabs.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={20} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <div>Product Design</div>
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>Brand Strategy</div>
                <div>UI/UX Design</div>
                <div>Consulting</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Kasukabe Labs
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 Kasukabe Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
