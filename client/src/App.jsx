import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, projectsRes] = await Promise.all([
          axios.get('/api/profile'),
          axios.get('/api/projects')
        ]);
        setProfile(profileRes.data);
        setProjects(projectsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <Navbar name={profile?.name} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={profile?.skills} personalSkills={profile?.personalSkills} />
      <Projects projects={projects} />
      <Education education={profile?.education} />
      <Contact profile={profile} />
      <Footer name={profile?.name} />
    </div>
  );
}

export default App;
