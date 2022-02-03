import React from 'react';
function Footer() {
    let year = new Date().getFullYear();
  return (
    
      <footer className='container'>
        Copyright {year}
      </footer>
  );
}
export default Footer;
