
const StudioSection = () => {
  return (
    <section id="studio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-[21/9] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 rounded-2xl mb-8 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/80 to-blue-600/80 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Studio</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Where creativity meets technology to craft exceptional digital experiences
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Studio</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We create experiences across all digital platforms. 
              From concept to launch, we work with brands that share our 
              passion for creating impactful, lasting impressions.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Research & Brand Strategy</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Brand Strategy</li>
                  <li>• User Research</li>
                  <li>• Market Analysis</li>
                  <li>• Competitive Audit</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Creative Direction & Design</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Visual Identity</li>
                  <li>• UI/UX Design</li>
                  <li>• Product Design</li>
                  <li>• Design Systems</li>
                  <li>• Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-400 leading-relaxed">
              We believe that it is possible to live in a world where every product or 
              service is designed with an easy-to-use experience in mind.
            </p>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Our Process</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Discovery & Research</span>
                  <span>Week 1-2</span>
                </div>
                <div className="flex justify-between">
                  <span>Strategy & Planning</span>
                  <span>Week 2-3</span>
                </div>
                <div className="flex justify-between">
                  <span>Design & Prototyping</span>
                  <span>Week 3-6</span>
                </div>
                <div className="flex justify-between">
                  <span>Development & Testing</span>
                  <span>Week 6-10</span>
                </div>
                <div className="flex justify-between">
                  <span>Launch & Optimization</span>
                  <span>Week 10-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
