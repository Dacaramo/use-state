'use client';

import { BTN_CLASSES, H1_CLASSES } from '@/constants';
import { useState } from 'react';
import axios from '@/axiosClient';

const page = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleClickOnButton = async () => {
    try {
      const { data } = await axios.get(
        'https://www.algo-que-no-existe.com/datos'
      );
    } catch (e) {
      setErrorMsg(`Ha habido un error: ${e}`);
    }
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Alerta</h1>
      <button
        onClick={handleClickOnButton}
        className={BTN_CLASSES}
      >
        Enviar solicitud
      </button>
      {errorMsg && <div className='alert alert-error'>{errorMsg}</div>}
    </>
  );
};

export default page;
