import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" style={{ backgroundColor: '#f8fafc' }}>
      <h2>Academic Qualifications</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {education?.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            position: 'relative',
            paddingLeft: '2rem',
            borderLeft: '2px solid var(--primary)'
          }}>
            <div style={{
              position: 'absolute',
              left: '-9px',
              top: '0',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '2px solid var(--primary)'
            }}></div>
            <div style={{ flex: '0 0 100px', fontWeight: 'bold', color: 'var(--primary)' }}>
              {item.year}
            </div>
            <div>
              <h3 style={{ marginBottom: '0.25rem' }}>{item.degree}</h3>
              <p style={{ fontWeight: '600' }}>{item.institute}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>{item.board}</p>
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{item.percentage}% / CGPA</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
