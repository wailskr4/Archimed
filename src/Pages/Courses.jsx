import React, { useState } from 'react';
import { motion ,AnimatePresence} from "framer-motion";
import { 
  FiCode, 
  FiLayers, 
  FiDatabase, 
  FiSmartphone,
  FiShield,
  FiCloud
} from 'react-icons/fi';
import CourseCard from  "../Conponents/CourseCard/CourseCard";
import './Styles/Courses.css';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data
  const coursesArray = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description:
        "Build dynamic websites from scratch using HTML, CSS, JavaScript, and frameworks like React. Perfect for launching your developer career.",
      duration: "12 Weeks",
      category : "web",
      level: "Beginner to Advanced",
      icon: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Comptabilité",
      description:
        "Understand financial statements, budgeting, and accounting principles to manage business finances effectively.",
        category:"Comptabilité",
      duration: "92 Weeks",
      level: "Intermediate",
      icon: "https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Gestion des Ressources Humaines",
      description:
        "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
        category: "GRH",
        duration: "92 Weeks",   
           level: "Beginner",
      icon: "https://images.pexels.com/photos/5862284/pexels-photo-5862284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
        category:"Graphic Design",
      duration: "92 Weeks",
      level: "Beginner",
      icon: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Administration",
      description:
        "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
        category : "Administration",
      duration: "10 Weeks",
      level: "Beginner",
      icon: "https://images.unsplash.com/photo-1679395561581-9d9bc2584047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Cybersecurity",

      description:
        "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
        category:"cyber",
      duration: "10 Weeks",
      level: "Beginner",
      icon: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Data Science",

      description:
        "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
        category:"data",
      duration: "10 Weeks",
      level: "Beginner",
      icon: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Filter courses based on category and search
  const filteredCourses = coursesArray.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'Comptabilité', name: 'Comptabilité' },
    { id: 'data', name: 'Data Science' },
    { id: 'GRH', name: 'GRH' },
    { id: 'Administration', name: 'Administration' },
    { id: 'cyber', name: 'Cybersecurity' },
    { id: 'Graphic Design', name: 'Graphic Design' }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industry-relevant courses taught by experts
          </motion.p>
        </div>
      </section>

      {/* Courses Filter */}
      <section className="courses-filter">
        <div className="container">
     

          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.id === 'web' && <FiCode />}
                {category.id === 'design' && <FiLayers />}
                {category.id === 'data' && <FiDatabase />}
                {category.id === 'mobile' && <FiSmartphone />}
                {category.id === 'cyber' && <FiShield />}
                {category.id === 'cloud' && <FiCloud />}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">

        <div className="container">

          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course, index) => (
      
             
          <CourseCard key={course.id} {...course} />
          
                    ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="container">
          <h2>Can't find what you're looking for?</h2>
          <p>We're constantly adding new courses. Join our mailing list to stay updated.</p>
          <button className="cta-button">Notify Me About New Courses</button>
        </div>
      </section>
    </div>
  );
};

export default Courses;