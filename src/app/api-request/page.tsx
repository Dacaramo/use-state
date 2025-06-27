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
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const { data } = await axios.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    setUser(data);
  };

  return (
    <>
      <h1 className={H1_CLASSES}>Solicitud HTTP</h1>
      <button
        onClick={getUser}
        className={BTN_CLASSES}
      >
        Obtener datos del usuario
      </button>
      <div className='p-2 bg-base-200 rounded-lg'>
        <span className='font-semibold'>Variable de estado "user":</span>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
};

export default page;
