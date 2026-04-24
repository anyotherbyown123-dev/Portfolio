import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="grid grid-3">
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{project.category}</span>
              <h3 style={{ marginTop: '0.5rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem', height: '100px', overflow: 'hidden' }}>{project.description}</p>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Technologies</h4>
                <p style={{ fontSize: '0.85rem' }}>{project.languages}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>My Role</h4>
                <p style={{ fontSize: '0.85rem' }}>{project.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
