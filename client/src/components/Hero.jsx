import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Hero = ({ profile }) => {
  return (
    <header style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--dark)',
      color: 'white',
      padding: '0 2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>{profile.name}</h1>
      <p style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '2rem' }}>Full Stack Web Developer</p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={20} /> {profile.email}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Phone size={20} /> {profile.contact}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={20} /> Patan, Gujarat
        </span>
      </div>
      <a href="#projects" className="btn btn-primary" style={{ marginTop: '3rem' }}>View My Work</a>
    </header>
  );
};

export default Hero;
