import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1 role="heading" className="text-4xl font-bold tracking-tight sm:text-6xl">404 - Not found</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">We cannot find what you are looking for</p>
    </div>
  );
};

export default NotFound;
