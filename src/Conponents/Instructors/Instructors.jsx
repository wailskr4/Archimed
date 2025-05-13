import React from 'react';
import './instructors.css';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const instructorsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Web Developer",
    bio: "10+ years experience building scalable web applications with React and Node.js",
    image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    social: [
      { platform: 'twitter', icon: <FaTwitter />, url: '#' },
      { platform: 'linkedin', icon: <FaLinkedin />, url: '#' },
      { platform: 'GitHub', icon: <FaGithub />, url: '#' }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UI/UX Specialist",
    bio: "Former design lead at Google, expert in Figma and user experience design",
    image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    social: [
      { platform: 'twitter', icon: <FaTwitter />, url: '#' },
      { platform: 'linkedin', icon: <FaLinkedin />, url: '#' },
      { platform: 'GitHub', icon: <FaGithub />, url: '#' }
    ]
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Data Science Instructor",
    bio: "PhD in Machine Learning, specializes in Python and TensorFlow",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    social: [
      { platform: 'twitter', icon: <FaTwitter />, url: '#' },
      { platform: 'linkedin', icon: <FaLinkedin />, url: '#' },
      { platform: 'GitHub', icon: <FaGithub />, url: '#' }
    ]
  }
];

const Instructors = () => {
  return (
    <section className="instructors">
      <h2>Meet Our Expert Instructors</h2>
      <div className="instructors-grid">
        {instructorsData.map((instructor) => (
          <motion.div
            key={instructor.id}
            className="instructor-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, type: "tween", delay: instructor.id * 0.1 }
            }}
            whileHover={{
              y: -10,
              scale: 1.05,  // Subtle zoom effect on hover for more depth
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="instructor-image"
            />
            <h3 className="instructor-name">{instructor.name}</h3>
            <p className="instructor-role">{instructor.role}</p>
            <p className="instructor-bio">{instructor.bio}</p>
            <div className="social-links">
              {instructor.social.map((socialItem) => (
                <motion.a
                  key={socialItem.platform}
                  href={socialItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${socialItem.platform} profile`}
                  whileHover={{
                    y: -3,
                    color: "#FF6B35",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="socialitem"
                >
                  {socialItem.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="view-all-btn"
        whileHover={{
          scale: 1.05,
          background: "#1E4B8C"  // Slight darkening on hover for depth
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, y: 50 }}
        whileInView={{
          scale: 1,
          y: 0,
          transition: { duration: 0.75, delay: 0.5, type: "tween" }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        View All Instructors
      </motion.button>
    </section>
  );
};

export default Instructors;
