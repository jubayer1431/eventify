'use client';

import { useState } from 'react';

const Search = ({ placeholder }: any) => {
  const [query, setQuery] = useState('');

  return (
    <div
      className={
        'flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2'
      }
    >
      Search{placeholder}
    </div>
  );
};

export default Search;
