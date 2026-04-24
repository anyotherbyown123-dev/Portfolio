import React from 'react';

const About = ({ profile }) => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="grid grid-2">
        <div>
          <h3 style={{ color: 'var(--primary)' }}>Career Objective</h3>
          <p style={{ fontSize: '1.1rem' }}>{profile.careerObjective}</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Personal Profile</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>Nationality:</strong> {profile.personalProfile.nationality}</li>
            <li><strong>Gender:</strong> {profile.personalProfile.gender}</li>
            <li><strong>DOB:</strong> {profile.personalProfile.dob}</li>
            <li><strong>Languages:</strong> {profile.personalProfile.languages.join(', ')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
