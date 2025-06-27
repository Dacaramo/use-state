'use client';

import { BTN_CLASSES, H1_CLASSES, INPUT_CLASSES } from '@/constants';
import { useState, ChangeEvent } from 'react';

const page = () => {
  const [name, setName] = useState<string>('');

  const handleChangeOnInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Formulario de un solo campo</h1>
      <form className='flex flex-col gap-2'>
        {/* Input del nombre */}
        <input
          type='text'
          value={name}
          onChange={handleChangeOnInput}
          placeholder='Ingresa tu nombre'
          className={INPUT_CLASSES}
        />

        {/* Botón para enviar el formulario */}
        <button
          type='submit'
          className={BTN_CLASSES}
          disabled={true}
        >
          Enviar el formulario
        </button>
      </form>

      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "name":</span>
        <pre>{name}</pre>
      </div>
    </>
  );
};

export default page;
