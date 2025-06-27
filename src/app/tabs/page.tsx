'use client';

import { BTN_CLASSES, H1_CLASSES } from '@/constants';
import { useState } from 'react';

type Tab = 'home' | 'stats' | 'profile';

const page = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>('home');

  return (
    <>
      <h1 className={H1_CLASSES}>Tabs</h1>
      <div className='flex flex-row gap-2'>
        {/* Tab de home */}
        <button
          onClick={() => setSelectedTab('home')}
          className={BTN_CLASSES}
          style={{
            opacity: selectedTab === 'home' ? 1 : 0.5,
          }}
        >
          Home
        </button>

        {/* Tab de estadísticas */}
        <button
          onClick={() => setSelectedTab('stats')}
          className={BTN_CLASSES}
          style={{
            opacity: selectedTab === 'stats' ? 1 : 0.5,
          }}
        >
          Estadísticas
        </button>

        {/* Tab de perfil */}
        <button
          onClick={() => setSelectedTab('profile')}
          className={BTN_CLASSES}
          style={{
            opacity: selectedTab === 'profile' ? 1 : 0.5,
          }}
        >
          Perfil
        </button>
      </div>

      {/* Se muestra contenido distinto dependiendo del tab seleccionado */}
      {selectedTab === 'home' && <span>Esta es el tab de home!</span>}
      {selectedTab === 'stats' && (
        <div className='flex flex-col gap-1'>
          <span>Ventas totales: 50</span>
          <span>Ingresos totales: 500$</span>
          <span>Numero de impresiones: 235</span>
        </div>
      )}
      {selectedTab === 'profile' && (
        <div className='flex flex-col gap-1'>
          <span>Nombre: Ramzeis</span>
          <span>País: Colombia 🇨🇴</span>
        </div>
      )}
    </>
  );
};

export default page;
