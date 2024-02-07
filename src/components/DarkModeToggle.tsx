import { ThemeContext, ThemeContextType } from '@/context/ThemeContext';
import clsx from 'clsx';
import { useContext, useState } from 'react';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      className="w-[42px] h-6 border-[1.5px] border-solid border-indigo-500 rounded-[30px] flex justify-between items-center relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className={clsx(
          'w-[15px] h-[15px] bg-indigo-500 rounded-full absolute',
          mode === 'light' ? 'left-[2px]' : 'right-[2px]'
        )}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
