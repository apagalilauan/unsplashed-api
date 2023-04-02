import React from 'react';

const SearchInput = ({ searchTerm, handleInputChange }) => {
  return (
    <div className='w-auto flex mx-10 sm:mx-20 md:mx-30 lg:mx-40'>
      <input
        type='text'
        placeholder='Search anything'
        value={searchTerm}
        onChange={handleInputChange}
        className='bg-white text-sm rounded-md h-10 px-6 w-full'
      />
    </div>
  );
};

export default SearchInput;
