
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse-slow opacity-30" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-2000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="hero-text font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 text-shadow-xl">
            PRIMAL
            <br />
            <span className="text-primary">CORE</span>
            <br />
            FITNESS
          </h1>
        </div>

        <div className={`transition-all duration-2000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300 mb-12 max-w-3xl mx-auto">
            UNLEASH YOUR INNER BEAST
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-2000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-display font-semibold text-lg px-12 py-6 glow-effect transition-all duration-300 transform hover:scale-105"
          >
            JOIN THE CORE
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-black font-display font-semibold text-lg px-12 py-6 transition-all duration-300 transform hover:scale-105"
          >
            FREE TRIAL
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
