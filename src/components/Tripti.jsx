import { data } from '@/constants/data';
import React from 'react';

const Tripti = () => {
  
  return (
    <div>
      {data.map((item) => (
        <div key={item.index}>
          {item.heading}
        </div>
      ))}
    </div>
  );
};

export default Tripti;
