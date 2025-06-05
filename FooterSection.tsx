const FooterSection = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              PRIMAL CORE FITNESS
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-4 tracking-wide">
                LOCATION
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Underground Level<br />
                Elite District<br />
                Champions Arena
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-4 tracking-wide">
                CONTACT
              </h4>
              <p className="text-gray-400 leading-relaxed">
                info@primalcore.fit<br />
                +1 (555) PRIMAL-1
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-4 tracking-wide">
                HOURS
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Mon - Fri: 5AM - 11PM<br />
                Weekends: 6AM - 10PM<br />
                Champions train 24/7
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 PRIMAL CORE FITNESS. WHERE LEGENDS ARE FORGED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
