'use client';

import { H1_CLASSES } from '@/constants';
import { useState } from 'react';

const page = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleClickOnButton = () => {
    if (isDarkMode === true) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Botón tipo switch</h1>
      <button
        onClick={handleClickOnButton}
        className={'btn btn-outline'}
      >
        {isDarkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </>
  );
};

export default page;
