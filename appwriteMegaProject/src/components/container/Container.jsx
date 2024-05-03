import React from 'react';

function Container({children}) {
 
    return ( // till 7 mins

        <div className='w-full max-w-7xl mx-auto px-4'>
            {children}
        </div>
    
  );
}

export default Container;
