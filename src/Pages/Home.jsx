import React ,{useState , useEffect} from 'react'
import  "../Pages/Styles/Home.modules.css";
import CourseCard from '../Conponents/CourseCard/CourseCard';
import { motion } from 'framer-motion';
import Instructors from '../Conponents/Instructors/Instructors';
import { FaChalkboardTeacher, FaPaperPlane } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import videobackground from "../assets/videobackground.mp4"
import Footer from '../Conponents/Footer/Footer';
 const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log('Submitted email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

    const courses = [
        {
          id: 1,
          title: "Web Development Bootcamp",
          description:
            "Build dynamic websites from scratch using HTML, CSS, JavaScript, and frameworks like React. Perfect for launching your developer career.",
          duration: "12 Weeks",
          level: "Beginner to Advanced",
          icon: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
        },
        {
          id: 2,
          title: "Comptabilité",
          description:
            "Understand financial statements, budgeting, and accounting principles to manage business finances effectively.",
          duration: "8 Weeks",
          level: "Intermediate",
          icon: "https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
        },
        {
          id: 3,
          title: "Gestion des Ressources Humaines",
          description:
            "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
          duration: "10 Weeks",
          level: "Beginner",
          icon: "https://images.pexels.com/photos/5862284/pexels-photo-5862284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 4,
          title: "Graphic Design",
          description:
            "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
          duration: "10 Weeks",
          level: "Beginner",
          icon: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 5,
          title: "Administration",
          description:
            "Learn the fundamentals of HR management, including recruitment, employee relations, and organizational development.",
          duration: "10 Weeks",
          level: "Beginner",
          icon: "https://images.unsplash.com/photo-1679395561581-9d9bc2584047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      
      const [offsetY, setOffsetY] = useState(0);


      useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.pageYOffset);
        };
    
        // Use passive scroll listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <>
            <section className="banner-home"
                style={{ backgroundPositionY: `${offsetY * 0.05}px` }}

            >
      <div className="content-home">
        <motion.h1
        
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        viewport={{once:true}}


        >
      Welcome to Bright Future Institute
        </motion.h1>
        <motion.p
                initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.75}}
        viewport={{once:true}}
        >
        Empowering students to reach their full potential through quality education.
        </motion.p>
        <motion.button type='reset'  className="ctaButtonbanner"
                  initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.75, delay:0.95}}
    
        viewport={{once:true}}

        >
        GET STARTED NOW

        </motion.button>
      </div>
    </section>



    <section className="who-we-are">
      <div className="who-we-are__container">
        <div className="who-we-are__content">
          <h2 className="who-we-are__title">Who We Are</h2>
          <motion.p className="who-we-are__subtitle"
                 initial={{ opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.75, delay:0.5}}
        viewport={{once:true}}
          >
          At our core, we are educators, innovators, and industry experts dedicated to transforming education.
        Our team designs immersive learning experiences that focus on practical skills, personalized mentorship,
        and real-world projects. We believe that every learner deserves access to quality training that leads to
        meaningful careers in tech and business.levant training.
          </motion.p>
          
          <div className="who-we-are__stats">
            <motion.div className="who-we-are__stat-item"
        initial={{ opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.95, delay:0.5}}
        viewport={{once:true}}
            >
              <span className="who-we-are__stat-number">10+</span>
              <span className="who-we-are__stat-label">Years of Experience</span>
            </motion.div>
            <motion.div className="who-we-are__stat-item"
        initial={{ opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1, delay:0.75}}
        viewport={{once:true}}
            >              <span className="who-we-are__stat-number">5,000+</span>
              <span className="who-we-are__stat-label">Students Trained</span>
            </motion.div>
            <motion.div className="who-we-are__stat-item"
        initial={{ opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.1, delay:0.95}}
        viewport={{once:true}}
            >              <span className="who-we-are__stat-number">50+</span>
              <span className="who-we-are__stat-label">Industry Partners</span>
            </motion.div>
          </div>

   
        </div>

        <motion.div className="who-we-are__image"
                      initial={{ opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1.25, delay:0.95}}
        viewport={{once:true}}
        ></motion.div>
      </div>
    </section>




















    <section className="courses-section">
      <h2 className="section-title">Our Courses</h2>
      <Swiper className="courses-swiper"
       pagination={{
        clickable: true,
        type:'bullets'

       }}
       modules={[Pagination]}
      spaceBetween={30}
      breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }}
      >
      
      
        {courses.map((course) => (
          <SwiperSlide className='course-slide'>
          <CourseCard key={course.id} {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>










<Instructors></Instructors>

<section className="apply-section">
      {/* Background Video with Overlay */}
      <div className="video-overlay"></div>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="background-video"
      >
        <source src={videobackground} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Content */}
      <motion.div 
        className="apply-content"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="apply-icon">
          <FaChalkboardTeacher size={60} />
        </div>
        <h2>Become an Instructor at Archimed</h2>
        <p>
          Share your expertise with the next generation of tech professionals.
          Join our team of industry experts and help shape future talent.
        </p>
        <motion.button
          className="apply-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane className='paperplane'/> Apply Now
        </motion.button>
      </motion.div>
    </section>

    <section className='newsletter-section'
    
    style={{ backgroundPositionY: `${offsetY * 0.25}px` }}

    >
      <div className="newsletter-container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
   
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for course updates, tech insights, and special offers.</p>
          
          {subscribed ? (
            <motion.div
              className="success-message"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              Thank you for subscribing!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                />
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend /> Subscribe
                </motion.button>
              </div>
            </form>
          )}
          
          <p className="privacy-note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
</>

  )
}
export default Home;