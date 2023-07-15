'use client';

import { HiMenu } from 'react-icons/hi';
import Avatar from './Avatar';
const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            cursor-pointer
            rounded-full
            px-4
            py-3
            text-sm
            font-semibold
            transition
            hover:bg-slate-300
            md:block"
        >
          AYYO mister white
        </div>
        <div
          onClick={() => {}}
          className="
            flex
            cursor-pointer
            flex-row
            items-center 
            gap-3 
            rounded-full 
            border-[1px] 
            border-neutral-200 
            p-4 
            transition 
            hover:shadow-md 
            md:px-2 
            md:py-1
            "
        >
          <HiMenu></HiMenu>
        </div>
        <div className="hidden md:block">
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
