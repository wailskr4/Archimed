import React, { useState } from 'react';

import "./Styles/courseDetail.css"

const CourseDetail = () => {

    const [showModal, setShowModal] = useState(false);
const [submitted, setSubmitted] = useState(false);


  const course = {
    title: "Full Stack Web Development",
    shortDescription: "Learn to build modern web apps with HTML, CSS, JavaScript, and backend technologies.",
    category: "Web Development",
    level: "Beginner",
    duration: "92 Weeks",
    language: "English",
    instructor: {
      name: "Sakhri Wail",
      bio: "Junior Web Developer with +3 years of experience.",
      photo: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    schedule: "Sun-thir, 6PM - 8PM",
    included: ["Video Lessons", "Assignments", "Live Support", "Certificate"],
    price: "$299",
    outcomes: [
      "Build responsive websites",
      "Create full-stack applications",
      "Deploy your projects online",
    ],
  };

  return (
    <>
      <div className="course-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">{course.title}</h1>
          <p className="banner-subtitle">{course.shortDescription}</p>
        </div>
      </div>

      <div className="course-detail-container">

        <div className='course-detail-image animated-section'>
          <img
            src='https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1'
            alt={course.title} loading='lazy'
          />
        </div>

        <div className='course-detail'>

          <section className="instructor animated-section">
            <img src={course.instructor.photo} alt={course.instructor.name} className="instructor-photo" />
            <div>
              <h2> Instructor : {course.instructor.name}</h2>
              <p>{course.instructor.bio}</p>
            </div>
          </section>

          <header className="course-header animated-section">
            <h1>{course.title}</h1>
            <p className="short-description">{course.shortDescription}</p>
            <p className="meta">
              {course.category} | {course.level} | {course.duration} | {course.language}
            </p>
          </header>

          <section className="section animated-section">
            <h3>What You'll Learn</h3>
            <ul>
              {course.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section animated-section">
            <h3>Technologies Covered</h3>
            <div className="tags">
              {course.tools.map((tool, i) => (
                <span key={i} className="tag">{tool}</span>
              ))}
            </div>
          </section>

          <section className="section-schedule animated-section">
            <h3>Schedule & Format</h3>
            <p>{course.schedule}</p>
          </section>

          <section className="section animated-section">
            <h3>What’s Included</h3>
            <ul>
              {course.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="section animated-section">
            <h3>Price</h3>
            <p className="price">{course.price}</p>
            <button className="enroll-button" onClick={() => setShowModal(true)}>Enroll Now</button>

          </section>

        </div>
      </div>
      {showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Pré-inscription au cours</h2>
      
      <form className="pre-inscription-form" onSubmit={(e) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => {
    setSubmitted(false);
    setShowModal(false);
  }, 3000); // Cache la modal après 3 secondes
}}
>
        <input type="text" name="nom" placeholder="Nom" required />
        <input type="text" name="prenom" placeholder="Prénom" required />
        <input type="email" name="mail" placeholder="email" required />
        
        <select name="niveau" required>
          <option value="">-- Niveau scolaire --</option>
          <option value="3as">3AS</option>
          <option value="universitaire">Universitaire</option>
        </select>
        
        <input type="date" name="naissance" required />
        <input type="tel" name="telephone" placeholder="Numéro de téléphone" pattern="^(\+213|0)(5|6|7)[0-9]{8}$" required />
        
        <button type="submit" className="enroll-button">Envoyer</button>
        <button type="button" className="close-button" onClick={() => setShowModal(false)}>Annuler</button>
       
        {submitted && <p className="success-message">✅ Pré-inscription envoyée avec succès !</p>}
      </form>
     
    </div>
  </div>
)}

    </>
  );
}

export default CourseDetail;
