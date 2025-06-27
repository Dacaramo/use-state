'use client';

import { useState } from 'react';
import axios from '@/axiosClient';
import { BTN_CLASSES, H1_CLASSES } from '@/constants';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const page = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getNextUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${users.length + 1}`
      );
      setUsers([...users, data]);
      setIsLoading(false);
    } catch (e) {
      setErrorMsg(`Ha habido un error: ${e}`);
    }
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Lista dinámica + Solicitud HTTP + Alerta</h1>

      {/* Botón para añadir el siguente usuario */}
      <button
        onClick={getNextUser}
        className={`${BTN_CLASSES} min-w-[219px]`}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className='loading loading-spinner loading-xs' />
        ) : (
          <span>Agregar datos del usuario {users.length + 1}</span>
        )}
      </button>

      {/* Lista de usuarios añadidos */}
      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "users":</span>
        <ul className='flex flex-col gap-1'>
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className='flex flex-col gap-1 p-2 bg-base-300 rounded-lg'
              >
                <span>
                  <strong>Nombre</strong>: {user.name}
                </span>
                <span>
                  <strong>Email</strong>: {user.email}
                </span>
                <span>
                  <strong>Phone</strong>: {user.phone}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Alerta en caso de error */}
      {errorMsg && <div className='alert alert-error'>{errorMsg}</div>}

      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "isLoading":</span>
        <pre className='text-sm'>{JSON.stringify(isLoading, null, 2)}</pre>
        <span className='font-semibold'>Variable de estado "errorMsg":</span>
        <pre className='text-sm'>{JSON.stringify(errorMsg, null, 2)}</pre>
      </div>
    </>
  );
};

export default page;
