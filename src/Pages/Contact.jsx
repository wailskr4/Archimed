import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock , FiArrowRight, FiDownload} from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Email invalide';
    if (!formData.subject.trim()) newErrors.subject = 'Sujet requis';
    if (!formData.message.trim()) newErrors.message = 'Message requis';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Merci pour votre message ! Nous vous contacterons bientôt.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const position = [51.505, -0.09]; // à changer selon l'école

  return (
    <div className="contact-page">
      {/* === Bandeau d’introduction === */}
      <section className="contact-banner">
        <div className="contact-overlay"></div>
        <motion.div className="contact-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2>Contactez l'équipe Archimed</h2>
          <p>Vous avez des questions sur nos formations ? Nous sommes là pour vous aider !</p>
          <motion.button className="ctaButtonbanner" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Nous Contacter
          </motion.button>
        </motion.div>
      </section>

      {/* === Section principale === */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Formulaire */}
          <motion.div className="contact-form-container" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2>Envoyez-nous un message</h2>
            <p>Remplissez ce formulaire pour toute demande de renseignement, collaboration ou inscription.</p>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Sujet du message" value={formData.subject} onChange={handleChange} required />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Votre message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
              <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <FiSend className="send-icon" /> Envoyer
              </motion.button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div className="contact-info-container" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3>Coordonnées</h3>
            <div className="contact-info-item"><div className="info-icon"><FiMapPin /></div><div><h4>Adresse</h4><p>123 Rue de l’Innovation, TechVille</p></div></div>
            <div className="contact-info-item"><div className="info-icon"><FiPhone /></div><div><h4>Téléphone</h4><p>+213 555 12 34 56</p></div></div>
            <div className="contact-info-item"><div className="info-icon"><FiMail /></div><div><h4>Email</h4><p>contact@archimed.edu</p></div></div>
            <div className="contact-info-item"><div className="info-icon"><FiClock /></div><div><h4>Horaires</h4><p>Lun - Ven : 9h - 17h</p></div></div>

            {/* Réseaux sociaux */}
            <div className="social-links">
              <motion.a href="#"><FaTwitter /></motion.a>
              <motion.a href="#"><FaLinkedin /></motion.a>
              <motion.a href="#"><FaInstagram /></motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Carte === */}
      <div className="map-section">
        <h2>Notre emplacement</h2>
        <div className="map-container">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Nous sommes ici !</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* === Section FAQ ou support pédagogique === */}
{/* === Enhanced FAQ & Pedagogical Support Section === */}
<section className="faq-section">
  <div className="faq-container">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="faq-header"
    >
      <h3>Support Pédagogique</h3>
      <p className="subtitle">Nous sommes ici pour vous accompagner à chaque étape de votre formation</p>
    </motion.div>

    <div className="faq-grid">
      {/* FAQ Item 1 */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="faq-card"
      >
        <div className="faq-icon">📚</div>
        <h4>Inscriptions aux formations</h4>
        <p>Procédures, prérequis et modalités d'inscription pour toutes nos formations professionnelles.</p>
        <button className="faq-link">
          Voir les détails <FiArrowRight />
        </button>
      </motion.div>

      {/* FAQ Item 2 */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="faq-card"
      >
        <div className="faq-icon">🎓</div>
        <h4>Certifications & Diplômes</h4>
        <p>Informations sur les certifications, équivalences et validation des acquis professionnels.</p>
        <button className="faq-link">
          En savoir plus <FiArrowRight />
        </button>
      </motion.div>

      {/* FAQ Item 3 */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="faq-card"
      >
        <div className="faq-icon">💼</div>
        <h4>Stages & Partenariats</h4>
        <p>Accédez à notre réseau d'entreprises partenaires et trouvez des opportunités de stage.</p>
        <button className="faq-link">
          Explorer <FiArrowRight />
        </button>
      </motion.div>

      {/* FAQ Item 4 */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="faq-card"
      >
        <div className="faq-icon">📅</div>
        <h4>Calendrier Pédagogique</h4>
        <p>Consultez les dates importantes, sessions de formation et échéances administratives.</p>
        <button className="faq-link">
          Télécharger <FiDownload />
        </button>
      </motion.div>
    </div>


  </div>
</section>
    </div>
  );
}

export default Contact;
