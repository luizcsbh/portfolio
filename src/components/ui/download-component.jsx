import React from 'react';

const DownloadComponent = () => {
  return (
    <div>
      <a 
        href="/public/curriculo.pdf" 
        download="Currículo Luiz Santos.pdf"
      >
        Download CV
      </a>
      
    </div>
  );
};

export default DownloadComponent;