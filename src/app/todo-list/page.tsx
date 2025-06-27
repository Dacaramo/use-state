'use client';

import { BTN_CLASSES, H1_CLASSES, INPUT_CLASSES } from '@/constants';
import { PlusCircle, Trash } from 'lucide-react';
import { useState } from 'react';

const page = () => {
  const [itemToAdd, setItemToAdd] = useState<string>('');
  const [items, setItems] = useState<Array<string>>([]);

  const handleClickOnAddButton = () => {
    setItems([...items, itemToAdd]);
    setItemToAdd('');
  };

  const handleClickOnRemoveButton = (indexToRemove: number) => {
    const itemsCopy = [...items];
    itemsCopy.splice(indexToRemove, 1);
    setItems(itemsCopy);
  };

  const handleChangeOnItem = (indexToUpdate: number, newValue: string) => {
    const itemsCopy = [...items];
    itemsCopy.splice(indexToUpdate, 1, newValue);
    setItems(itemsCopy);
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Lista de tareas</h1>

      <div className='flex flex-row gap-2'>
        {/* Input de la nueva tarea */}
        <input
          type='text'
          name='name'
          value={itemToAdd}
          onChange={(e) => setItemToAdd(e.target.value)}
          placeholder='Escribe una nueva tarea'
          className={`${INPUT_CLASSES} h-full`}
        />

        {/* Botón para añadir la nueva tarea */}
        <button
          onClick={handleClickOnAddButton}
          className={BTN_CLASSES}
        >
          <PlusCircle />
        </button>
      </div>

      {/* Lista de tareas creadas */}
      <ul className='flex flex-col gap-2'>
        {items.map((_, i) => {
          return (
            <li
              key={i}
              className='flex-1 flex flex-row gap-2'
            >
              <input
                type='text'
                name='name'
                value={items[i]}
                onChange={(e) => handleChangeOnItem(i, e.target.value)}
                placeholder='Escribe una nueva tarea'
                className={`${INPUT_CLASSES} h-full`}
              />
              <button
                onClick={() => handleClickOnRemoveButton(i)}
                className={`btn btn-error`}
              >
                <Trash />
              </button>
            </li>
          );
        })}
      </ul>

      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "itemToAdd":</span>
        <pre>{JSON.stringify(itemToAdd, null, 2)}</pre>
        <span className='font-semibold'>Variable de estado "items":</span>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    </>
  );
};

export default page;
