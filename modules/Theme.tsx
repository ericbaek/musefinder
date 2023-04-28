import React, { useEffect, useState } from 'react';
import InterfaceIcon from '@/stories/InterfaceIcon';

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
        <InterfaceIcon Icon={mode}/>
        <style jsx>{`
            .Theme {
                position: fixed;
                bottom: var(--padding-activity);
                right: var(--padding-activity);
                z-index: 1000;
        `}</style>
    </div>
    
  );
};

export default Theme;