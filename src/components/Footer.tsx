import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 ">
              Let's create something
              <br />
              <span className="text-primary">extraordinary</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your ideas into exceptional digital
              experiences? Let's start a conversation about your next project.
            </p>

            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
              Start a Project
              <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 ">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={20} />
                  <span>hello@kasukabeabs.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 ">
                Services
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-2xl font-bold text-foreground mb-4 md:mb-0 ">
            Kasukabe Labs
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 Kasukabe Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
