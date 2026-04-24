const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const profileData = {
    name: "Patel Prince Sanjaykumar",
    address: "156, Prathna Vihar Society, Ambaji Neliyu, Santiniketan School pase, Patan, Gujarat 384265",
    email: "patelprince23906@gmail.com",
    contact: "9726472828",
    careerObjective: "With a strong technical skill-set, attention to detail. I want to Work as a \"Full Stack Web Developer\" where I could create digital magic and elevate user experience to the next level.",
    skills: {
      languages: ["C", "C++"],
      database: ["Oracle", "MySQL", "MongoDB"],
      operatingSystems: ["Windows"],
      webDesigning: ["HTML", "CSS", "JavaScript", "PHP", "React (Beginner)"]
    },
    education: [
      {
        degree: "10th Board",
        year: "2022",
        institute: "Sheth B.M. High School, Patan",
        board: "Gujarat state secondary education board",
        percentage: "82.33"
      },
      {
        degree: "12th Board",
        year: "2024",
        institute: "Shree K.V. Patel High School, Patan",
        board: "Gujarat state secondary education board",
        percentage: "89"
      },
      {
        degree: "B.Tech (C.E.)",
        year: "2024-2026",
        institute: "Chandubhai S. Patel Institute of Technology (Changa)",
        board: "Charotar University",
        percentage: "7.7 SGPA(Up to Sem 3)"
      }
    ],
    personalSkills: [
      "Problem-Solving Ability",
      "Quick Learner",
      "Team Collaboration",
      "Time Management"
    ],
    achievements: [
      "Certified-Courses :- Algorithm Design: Mastering Computational Problem Solving (Coursera)",
      "Certified-Courses :- Building Web Applications in PHP (Coursera)",
      "Certified-Courses :- Data Analysis with Python (Coursera)",
      "Work Shop :- Develop Generative AI Applications",
      "Hackathon :- Markup Mania"
    ],
    personalProfile: {
      nationality: "Indian",
      gender: "Male",
      dob: "23 September 2006",
      languages: ["Gujarati", "Hindi", "English"]
    }
  };
  res.json(profileData);
});

module.exports = router;
