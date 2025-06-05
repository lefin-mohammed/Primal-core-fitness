import { useState, useEffect, useRef } from 'react';

const SpaceSection = () => {
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

  const spaces = [
    {
      title: "THE ARENA",
      description: "Where champions are forged",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "THE FORGE",
      description: "Steel meets sweat",
      image: "https://images.unsplash.com/photo-1571019613540-996a1ca02b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "THE SANCTUARY",
      description: "Recovery and renewal",
      image: "https://images.unsplash.com/photo-1506629905607-45c944ea7c14?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            WHERE WARRIORS
            <span className="block text-primary">ARE MADE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Step into a world designed for transformation. Every corner built for performance.
          </p>
        </div>

        <div className="space-y-16">
          {spaces.map((space, index) => (
            <div
              key={space.title}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    {space.title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {space.description}
                  </p>
                  <div className="w-24 h-1 bg-primary"></div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg group-hover:transform group-hover:scale-105 transition-transform duration-700">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;