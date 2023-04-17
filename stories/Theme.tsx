import React, { useEffect, useState } from 'react';
import styles from './Icon.module.css';

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
    <div className='Theme' onClick={handleToggle}>
        <div className={styles.Icon}>{mode}</div>
    <style jsx>{`
        .Theme {
            position: fixed;
            bottom: var(--padding-activity);
            right: var(--padding-activity);
            border-radius: var(--radius-box);
            background: var(--bg-color);
            padding: calc(var(--padding-activity) / 2);
            cursor: pointer;
            transition: var(--transition-bg);
            z-index: 3000;
            border: .5px solid var(--border-color);
        }

          .Theme:hover {
            background: var(--bg-hover-color);
          }
    `}</style>
    </div>
    
  );
};

export default Theme;