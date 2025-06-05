import { useState, useEffect, useRef } from 'react';

const ProgramsSection = () => {
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      id: "strength",
      title: "STRENGTH",
      subtitle: "Raw Power",
      description: "Heavy iron. Serious gains. Maximum strength.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "hiit",
      title: "HIIT",
      subtitle: "Burn Protocol",
      description: "High intensity. Zero mercy. Pure fire.",
      image: "https://images.unsplash.com/photo-1571019613540-996a1ca02b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "boxing",
      title: "BOXING",
      subtitle: "Fight Ready",
      description: "Strike hard. Move fast. Fight like a champion.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "shred",
      title: "WOMEN'S SHRED",
      subtitle: "Elite Conditioning",
      description: "Sculpted. Strong. Unstoppable.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            CHOOSE YOUR
            <span className="block text-primary">WEAPON</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredProgram === program.id 
                    ? 'bg-gradient-to-t from-black via-black/70 to-primary/20' 
                    : 'bg-gradient-to-t from-black via-black/50 to-transparent'
                }`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className={`transition-all duration-500 ${
                    hoveredProgram === program.id ? 'transform translate-y-0' : 'transform translate-y-2'
                  }`}>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1 tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-3 tracking-wider">
                      {program.subtitle}
                    </p>
                    <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 ${
                      hoveredProgram === program.id 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}>
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 border-2 border-primary transition-opacity duration-300 ${
                  hoveredProgram === program.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;