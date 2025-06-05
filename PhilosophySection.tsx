import { useState, useEffect, useRef } from 'react';

const PhilosophySection = () => {
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

  const values = [
    {
      title: "DISCIPLINE",
      description: "Every rep counts. Every second matters.",
      image: "https://images.unsplash.com/photo-1571019613540-996a1ca02b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "INTENSITY",
      description: "Push beyond what you thought possible.",
      image: "https://images.unsplash.com/photo-1583500178690-f7d24219ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "RESILIENCE",
      description: "Rise stronger. Fall harder. Repeat.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            FORGED IN
            <span className="block text-primary">INTENSITY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don't just build bodies. We forge warriors. Every session is a battle against mediocrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative overflow-hidden rounded-lg transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-3xl font-bold text-white mb-3 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
