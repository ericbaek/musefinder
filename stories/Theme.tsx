import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

export const Theme = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsDarkMode(event.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);


  const mode = isDarkMode ? '' : '';
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode || isDarkMode === null) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  function handleToggle() {
    setIsDarkMode(prev => !prev);
  }
  return (
    <div>
      <div className={`Icon ${styles.Icon}`} onClick={handleToggle}>{ mode }</div>
    </div>
  );
};

export default Theme;