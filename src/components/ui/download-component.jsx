import React from 'react';

const DownloadComponent = () => {
  
  const pdfPath = "/curriculo.pdf";
  const handleDownloadError = () => {
    alert('O currículo não pôde ser baixado. Por favor, entre em contato diretamente.');
  };
  
  return (
    <div>
      <a 
        href={pdfPath} 
        download={'Curriculo Luiz Santos.pdf'}
        onClick={(e) => {
          if (!pdfPath) {
            e.preventDefault();
            handleDownloadError();
          }
        }}
        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadComponent;