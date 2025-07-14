import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-foreground ">
            Kasukabe Labs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 justify-center items-center">
            <a href="/#work" className="text-white transition-colors">
              Work
            </a>
            <a href="/#studio" className="text-white transition-colors">
              Studio
            </a>
            <a href="/#contact" className="text-white transition-colors">
              Contact
            </a>
            <button className="bg-primary rounded-xl text-black font-semibold px-4 py-1 transition-colors hover:bg-primary/90">
              <a href="/freeAudit">Get Free Audit</a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90">
              <a
                href="/#work"
                className="block px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Work
              </a>
              <a
                href="/#studio"
                className="block px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Studio
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
