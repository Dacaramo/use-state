'use client';

import { useState, ChangeEvent } from 'react';
import { BTN_CLASSES, H1_CLASSES, INPUT_CLASSES } from '@/constants';

const page = () => {
  const [data, setData] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });

  const handleChangeOnInput = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Formulario de varios campos</h1>
      <form className='flex flex-col gap-2'>
        {/* Input del nombre */}
        <input
          type='text'
          name='name'
          value={data.name}
          onChange={handleChangeOnInput}
          placeholder='Tu nombre'
          className={INPUT_CLASSES}
        />

        {/* Input del email */}
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={handleChangeOnInput}
          placeholder='Tu email'
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
        <span className='font-semibold'>Variable de estado "data":</span>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};

export default page;
