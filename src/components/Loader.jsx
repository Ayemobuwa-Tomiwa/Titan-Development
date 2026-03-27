// src/components/Loader.jsx
import React from 'react';
import './LogoLoader.css'; // The CSS we created earlier
import logoAsset from '../assets/icons/vulcoreicon.png'; 

const Loader = () => {
  return (
    /* fixed: pulls it out of the flow
       inset-0: stretches it to all 4 corners (top, bottom, left, right: 0)
       z-[9999]: ensures it stays above the Navbar (usually z-40 or z-50)
    */
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      
      {/* The animated logo container */}
      <div 
        className="logo-loader-wrapper drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]"
        style={{
          maskImage: `url(${logoAsset})`,
          WebkitMaskImage: `url(${logoAsset})`,
          width: '200px',  // Size of your logo
          height: '200px'
        }}
      >
        <div className="logo-liquid-fill"></div>
      </div>

    </div>
  );
};

export default Loader;