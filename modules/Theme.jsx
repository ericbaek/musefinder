import React, { useEffect, useState } from 'react';
import Theme from '@/stories/Theme';

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  function handleToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <Theme Icon={darkMode ? '' : ''} onClick={handleToggle}/>
    </div>
  );
}

export default Darkmode;