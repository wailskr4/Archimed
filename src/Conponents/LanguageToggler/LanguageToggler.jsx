import React, { useState } from 'react';
import styles from './LanguageToggler.module.css';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
const LanguageToggler = ({ onLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }, // Saudi Arabia flag for Arabic
    { code: 'en', name: 'English', flag: '🇬🇧' }, // UK flag for English
    { code: 'fr', name: 'Français', flag: '🇫🇷' }, // France flag
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
  };

  const currentLangObj = languages.find(lang => lang.code === currentLanguage);

  const renderLanguageIndicator = (langCode) => {
    switch(langCode) {
      case 'ar': return '🇸🇦';
      case 'en': return '🇬🇧';
      case 'fr': return '🇫🇷';
      default: return langCode.toUpperCase();
    }
  };

  return (
    <div className={styles.languageToggler}>
      <button 
        className={styles.toggleButton}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className={styles.langIndicator}>
          {renderLanguageIndicator(currentLanguage)}
        </span>
        <span className={styles.languageName}>{currentLangObj?.name}</span>
        <span className={styles.arrowIcon}>{isOpen ? <FiArrowUp size={10} /> : <FiArrowDown size={10} />}</span>
      </button>
      
      {isOpen && (
        <ul className={styles.languageDropdown}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`${styles.languageOption} ${currentLanguage === lang.code ? styles.active : ''}`}
                onClick={() => selectLanguage(lang.code)}
              >
                <span className={styles.langIndicator}>
                  {renderLanguageIndicator(lang.code)}
                </span>
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageToggler;