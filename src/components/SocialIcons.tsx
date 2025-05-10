import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialIcons: React.FC = () => {
  const iconClass =
    "h-6 w-6 text-white transition-colors duration-200 ease-out group-hover:text-[#493c3c]";
  const wrapperClass =
    "group flex h-12 w-12 items-center justify-center rounded-full bg-[#493c3c] transition-transform transition-colors duration-200 ease-out hover:scale-105 hover:bg-white will-change-transform";

  return (
    <div className="flex items-center justify-center space-x-6">
      <a
        href="https://www.instagram.com/myevent.wermland/"
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        <span className={iconClass}>
          <Instagram />
        </span>
      </a>
      <a
        href="https://www.facebook.com/myeventwermland"
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        <span className={iconClass}>
          <Facebook />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;