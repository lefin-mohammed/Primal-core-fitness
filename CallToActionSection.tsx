import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583500178690-f7d24219ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent rounded-full animate-float" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
            BECOME A
            <span className="block text-primary">MEMBER</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the elite. Train with champions. Transform your limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-display font-semibold text-lg px-12 py-6 glow-effect transition-all duration-300 transform hover:scale-105"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-display font-semibold text-lg px-12 py-6 transition-all duration-300 transform hover:scale-105"
            >
              TRAIN WITH US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
