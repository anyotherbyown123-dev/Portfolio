import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ profile }) => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="grid grid-2">
        <div>
          <h3>Contact Information</h3>
          <p style={{ marginBottom: '2rem' }}>Feel free to reach out to me for collaborations or any inquiries.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={contactItemStyle}>
              <div style={iconBoxStyle}><Mail size={20} /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Email</p>
                <p style={{ fontWeight: '600' }}>{profile.email}</p>
              </div>
            </div>
            <div style={contactItemStyle}>
              <div style={iconBoxStyle}><Phone size={20} /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Phone</p>
                <p style={{ fontWeight: '600' }}>{profile.contact}</p>
              </div>
            </div>
            <div style={contactItemStyle}>
              <div style={iconBoxStyle}><MapPin size={20} /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Address</p>
                <p style={{ fontWeight: '600' }}>{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Name</label>
            <input type="text" style={inputStyle} placeholder="Your Name" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Email</label>
            <input type="email" style={inputStyle} placeholder="Your Email" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Message</label>
            <textarea style={{ ...inputStyle, height: '150px' }} placeholder="Your Message"></textarea>
          </div>
          <button type="button" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const iconBoxStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#eff6ff',
  color: 'var(--primary)',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #e2e8f0',
  outline: 'none'
};

export default Contact;
