'use client';

import { TextInput } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
const Search = () => {
  return (
    <div
      className="
      w-full 
      cursor-pointer 
      rounded-full 
      border-[1px] 
      py-2 
      shadow-sm 
      transition 
      hover:shadow-md 
      md:w-auto"
    >
      <div
        className="
        flex 
        flex-row 
        items-center 
        justify-between"
      >
        <div
          className="
            px-6 
            text-sm
            font-bold"
        >
          Any crib
        </div>
        <div
          className="
            hidden
            flex-1
            border-x-[1px]
            px-6
            text-center
            text-sm
            font-bold
            sm:block"
        >
          Any room
        </div>
        <div
          className="
            text-grey-500
            flex
            flex-row
            items-center
            gap-3
            pl-6
            pr-2
            text-sm
            "
        >
          <div className="hidden sm:block"> How much monei</div>
          <div
            className="
              rounded-full
              bg-rose-300
              p-2
              text-white
              "
          >
            <BiSearch size={20}></BiSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
