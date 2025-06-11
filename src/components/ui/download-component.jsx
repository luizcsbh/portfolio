import React from 'react';

const DownloadComponent = () => {
  return (
    <div>
      <a 
        href="/dist/curriculo.pdf" 
        download="Currículo Luiz Santos.pdf"
      >
        Download CV
      </a>
      
    </div>
  );
};

export default DownloadComponent;