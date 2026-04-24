import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer style={{
      backgroundColor: 'var(--dark)',
      color: 'white',
      padding: '3rem 2rem',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>{name}</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Full Stack Web Developer creating digital magic.</p>
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
