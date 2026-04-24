import React from 'react';

const Skills = ({ skills, personalSkills }) => {
  return (
    <section id="skills" style={{ backgroundColor: '#f1f5f9' }}>
      <h2>Skills & Proficiency</h2>
      <div className="grid grid-2">
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Technical Skills</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Languages</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {skills?.languages.map(skill => <span key={skill} style={skillBadgeStyle}>{skill}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Web Designing</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {skills?.webDesigning.map(skill => <span key={skill} style={skillBadgeStyle}>{skill}</span>)}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Databases</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {skills?.database.map(skill => <span key={skill} style={skillBadgeStyle}>{skill}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Personal Skills</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {personalSkills?.map(skill => (
              <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const skillBadgeStyle = {
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  fontSize: '0.9rem',
  fontWeight: '600',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0'
};

export default Skills;
