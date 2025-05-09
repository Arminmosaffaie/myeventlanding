import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcons: React.FC = () => {
  const iconContainerStyle = "group flex h-12 w-12 items-center justify-center rounded-full bg-[#493c3c] hover:bg-white";
  const iconStyle = "h-6 w-6 text-white group-hover:text-[#493c3c]";
  
  return (
    <div className="flex items-center justify-center space-x-6">
      <motion.a 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer"
        className={iconContainerStyle}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Instagram className={iconStyle} />
      </motion.a>
      
      <motion.a 
        href="https://facebook.com" 
        target="_blank"
        rel="noopener noreferrer"
        className={iconContainerStyle}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Facebook className={iconStyle} />
      </motion.a>
    </div>
  );
};

export default SocialIcons;