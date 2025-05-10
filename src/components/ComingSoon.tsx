import React, { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import logoImage from '../assets/logo.png';
import backgroundImage from '../assets/BAKGRUND.jpg';

const ComingSoon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before starting animations to ensure smooth mounting
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const ContactIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#493c3c] transition-transform transition-colors duration-200 ease-out hover:scale-105 hover:bg-white will-change-transform">
      <div className="h-6 w-6 text-white transition-colors duration-200 ease-out group-hover:text-[#493c3c]">
        {icon}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" 
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-8">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              className="flex w-full flex-col items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <header className="mb-8 text-center">
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <img 
                    src={logoImage} 
                    alt="MY EVENT" 
                    className="mx-auto h-auto w-[550px] md:w-[650px] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </motion.div>
              </header>

              <motion.div 
                className="mb-8 mt-12 text-center"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="mb-10 font-sans text-5xl font-black uppercase tracking-wide text-black md:text-6xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_10%)]">
                  SNART FINNS VI HÄR!
                </h2>
              </motion.div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <SocialIcons />
              </motion.div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <p className="font-sans text-lg text-[#493c3c] mb-6 text-center">
                  Kom i kontakt med oss
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center space-x-6">
                    <ContactIcon icon={<Mail />} />
                    <a href="mailto:info@myevent.se" className="font-sans text-lg text-[#493c3c] hover:text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                      info@myevent.se
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <ContactIcon icon={<Phone />} />
                    <a href="tel:+46703757326" className="font-sans text-lg text-[#493c3c] hover:text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                      +46 70 375 73 26
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComingSoon;