'use client';

import { BTN_CLASSES, H1_CLASSES, H2_CLASSES } from '@/constants';
import { useState } from 'react';

const page = () => {
  const [nClicks, setNclicks] = useState<number>(0);
  // let nClicks = 0;

  const handleClickOnButton = () => {
    setNclicks(nClicks + 1);
    // nClicks += 1;
  };

  console.log('RENDERIZANDO...');

  return (
    <>
      <h1 className={H1_CLASSES}>Variable de estado VS variable normal</h1>
      <button
        className={BTN_CLASSES}
        onClick={handleClickOnButton}
      >
        Me han clickeado {nClicks} veces
      </button>
    </>
  );
};

export default page;
