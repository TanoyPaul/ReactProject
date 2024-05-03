import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams();
  return (
   <>
   <div className='bg-orange-400 text-white text-3xl rounded-md p-4 mx-8' >User : {userId}</div>
   </>
  );
}

export default User;
