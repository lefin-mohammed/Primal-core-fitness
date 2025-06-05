import { useState, useEffect, useRef } from 'react';

const TransformationSection = () => {
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

  const testimonials = [
    {
      quote: "I became who I was afraid to be.",
      name: "Marcus",
      transformation: "Lost 45lbs, Gained Confidence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      quote: "Every scar tells a story of victory.",
      name: "Sarah",
      transformation: "From Burnout to Beast Mode",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      quote: "The pain was temporary. The pride is forever.",
      name: "David",
      transformation: "Deadlifted 500lbs at 45",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            HUMAN
            <span className="block text-primary">EVOLUTION</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Witness the metamorphosis. These are the faces of transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-square">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <blockquote className="text-white text-xl font-medium mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-white font-display text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-sm font-medium tracking-wide">
                        {testimonial.transformation}
                      </p>
                    </div>
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

export default TransformationSection;
