'use client';

import { BTN_CLASSES, H1_CLASSES, INPUT_CLASSES } from '@/constants';
import { CirclePlus, Trash } from 'lucide-react';
import { useState } from 'react';

type Field = {
  key: string;
  value: string;
};

const page = () => {
  const [fields, setFields] = useState<Field[]>([]);

  const handleAddField = () => {
    setFields([...fields, { key: '', value: '' }]);
  };

  const handleKeyChange = (index: number, newKey: string) => {
    const fieldsCopy = [...fields];
    fieldsCopy.splice(index, 1, { key: newKey, value: fields[index].value });
    setFields(fieldsCopy);
  };

  const handleValueChange = (index: number, newValue: string) => {
    const fieldsCopy = [...fields];
    fieldsCopy.splice(index, 1, { key: fields[index].key, value: newValue });
    setFields(fieldsCopy);
  };

  const handleRemoveField = (index: number) => {
    const fieldsCopy = [...fields];
    fieldsCopy.splice(index, 1);
    setFields(fieldsCopy);
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Formulario dinámico</h1>

      {fields.map((field, index) => (
        <div
          key={index}
          className='flex flex-row gap-2'
        >
          {/* Input para el nombre del campo */}
          <input
            type='text'
            placeholder='Nombre del campo'
            value={field.key}
            onChange={(e) => handleKeyChange(index, e.target.value)}
            className={`${INPUT_CLASSES} h-full`}
          />

          {/* Input para el valor del campo */}
          <input
            type='text'
            placeholder='Valor del campo'
            value={field.value}
            onChange={(e) => handleValueChange(index, e.target.value)}
            className={`${INPUT_CLASSES} h-full`}
          />

          {/* Botón para borrar campo actual */}
          <button
            onClick={() => handleRemoveField(index)}
            className='btn btn-error'
          >
            <Trash />
          </button>
        </div>
      ))}

      {/* Botón para añadir nuevo campo */}
      <button
        onClick={handleAddField}
        className={BTN_CLASSES}
      >
        <CirclePlus />
      </button>

      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "fields":</span>
        <pre className='text-sm'>{JSON.stringify(fields, null, 2)}</pre>
      </div>
    </>
  );
};

export default page;
