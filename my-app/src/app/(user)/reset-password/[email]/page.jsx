'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const setUpPassword = () => {
  const searchParams = useSearchParams();

  console.log(searchParams.get('id'));
  console.log(searchParams.get('name'));

  return (
    <div>
      setUpPassword
      {searchParams}
    </div>
  );
};

export default setUpPassword;
