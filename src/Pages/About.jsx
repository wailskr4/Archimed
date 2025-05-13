import React from 'react';
import { motion } from 'framer-motion';
import Founder from "../assets/Founder.jpg"
import { FaHome, FaUsers, FaTrophy, FaHandshake } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import '../Pages/Styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Tech Professionals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Since 2015, Archimed has been transforming careers through cutting-edge technical education.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}

      <section className="our-story">
        <div className="container">
          <motion.div className="story-content"
          
                    
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        viewport={{once:true}}

          >
            <h2>Our Story</h2>
            <p>
            Founded in 2005 by John Smith, Archimed began as a small, ambitious training institute with a vision to transform professional education. What started as a single-classroom setup has evolved into one of the region’s most respected centers for practical, industry-focused learning.
            </p>
            <p>
            Over the years, Archimed has empowered thousands of learners with job-ready skills in programming, human resources management (GRH), and emerging technologies. Our commitment to quality training, transparency, and real-world relevance has earned us not only accolades, but—more importantly—the trust of students and employers alike. Today, Archimed continues to grow as a hub of knowledge, preparing the workforce of tomorrow with passion and purpose.
            </p>
          </motion.div>
          <motion.div className="story-image"
                  initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:1 ,delay:.25}}
          >
            <img src="https://images.pexels.com/photos/13277934/pexels-photo-13277934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our team working together" />
          </motion.div>
        </div>
      </section>



      {/* Values Section */}


      <section className="our-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <motion.div className="value-card"
                 initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:1 ,delay:.25}}
          
          >
            <FaHome className="value-icon" />
            <h3>Client-Centric Approach</h3>
            <p>We listen first, understand your needs, and then deliver solutions tailored to you.</p>
          </motion.div>

          <motion.div className="value-card"
                 initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:1 ,delay:.5}}
          >
            <MdSecurity className="value-icon" />
            <h3>Integrity</h3>
            <p>Honest advice and transparent dealings form the foundation of every transaction.</p>
          </motion.div>
          <motion.div className="value-card"
                 initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:1 ,delay:.75}}
          >
            <FaTrophy className="value-icon" />
            <h3>Excellence</h3>
            <p>We strive for perfection in every aspect of our service delivery.</p>
          </motion.div>
          <motion.div className="value-card"
          
          initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:1 ,delay:1}}
        >
            <FaHandshake className="value-icon" />
            <h3>Community</h3>
            <p>We're committed to building stronger neighborhoods through responsible real estate.</p>
          </motion.div>
        </div>
      </section>


      {/* Meet the Founder */}
      <section className="meet-founder">
        <div className="container">
          <motion.div className="founder-image"
          initial={{scale:0, opacity:0}}
          whileInView={{scale : 1, opacity:1}}
          transition={{duration:2.25 , delay:.25}}

        viewport={{once:true}}

          >
            <img src={Founder} alt="John Smith, Founder" />
          </motion.div>
          <motion.div className="founder-content"
                    initial={{scale:0, opacity:0}}
          whileInView={{scale : 1, opacity:1}}
          transition={{duration:1.75 , delay:.75}}

        viewport={{once:true}}
          
          >
            <h2>Meet Our Founder</h2>
            <p className="founder-name">John Smith</p>
            <p className="founder-title">CEO & Principal Broker</p>
            <p>
              With over 25 years of experience in the real estate industry, John founded Dream Homes 
              Realty with a simple philosophy: treat every client like family. His visionary leadership 
              and deep market knowledge continue to guide our company's growth and success.
            </p>
            <p>
              "Real estate isn't just about properties it's about people's lives, dreams, and futures. 
              That's why we take our responsibility so seriously."
            </p>
          </motion.div>
        </div>
      </section>
























      {/* Team Section */}


      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Career?</h2>
          <div className="cta-buttons">
            <button className="primary-btn">Browse Courses</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;