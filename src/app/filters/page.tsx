'use client';

import { H1_CLASSES, INPUT_CLASSES, SELECT_CLASSES } from '@/constants';
import { useState, ChangeEvent } from 'react';

type Filters = {
  search: string;
  category: 'cualquiera' | 'ropa' | 'muebles';
  color: 'cualquiera' | 'rojo' | 'verde' | 'azul';
};

const page = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: 'cualquiera',
    color: 'cualquiera',
  });

  const handleFilterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Filtros</h1>

      {/* Filtro de búsqueda */}
      <input
        type='text'
        name='search'
        value={filters.search}
        onChange={handleFilterChange}
        placeholder='Busca por nombre'
        className={INPUT_CLASSES}
      />

      {/* Filtro de categoría */}
      <select
        name='category'
        value={filters.category}
        onChange={handleFilterChange}
        className={SELECT_CLASSES}
      >
        <option value='cualquiera'>Cualquier categoría</option>
        <option value='ropa'>Ropa</option>
        <option value='muebles'>Muebles</option>
      </select>

      {/* Filtro de color */}
      <select
        name='color'
        value={filters.color}
        onChange={handleFilterChange}
        className={SELECT_CLASSES}
      >
        <option value='cualquiera'>Cualquier color</option>
        <option value='rojo'>rojo</option>
        <option value='verde'>verde</option>
        <option value='azul'>azul</option>
      </select>

      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "filters":</span>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
        <span className='font-semibold'>Url al que se hará la solicitud:</span>
        <pre>{`https://www.algo-que-no-existe.com/datos?${new URLSearchParams(
          filters
        )}`}</pre>
      </div>
    </>
  );
};

export default page;
