import { motion } from "framer-motion";
import styles from "./CourseCard.module.css";
import { useNavigate } from "react-router";

const CourseCard = ({ id , title, description, duration, level, icon }) => {
 var nav = useNavigate()
  return (
<motion.div 
  initial={{ opacity: 0, y: 55 }}
  whileInView={{ 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, delay: 0.05 * id } 
  }}
  viewport={{ once: true }}
  whileHover={{ 
    scale: 1.02, 
    y: -6, 
    transition: { 
      type: "spring",  // ✅ Corrected: "spring" as a string
      stiffness: 1000, 
      damping: 100,
      duration: 0.2 
    } 
  }}
  whileTap={{ scale: 0.95 }}
  className={styles.card}
>
      <div className={styles.icon}>
        <img src={icon}></img>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.details}>
        <span>⏱️ {duration}</span>
        <span>📚 {level}</span>
      </div>
      <button className={styles.learnMoreBtn} onClick={()=>{
        nav("/CourseDetail")
        window.scrollTo(0,0)
      }}>
      Learn more
      </button>
    </motion.div>
  );
};

export default CourseCard;