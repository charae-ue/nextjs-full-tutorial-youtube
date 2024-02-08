'use client';

import React, { createContext, useState } from 'react';

export enum Mode {
  Dark = 'dark',
  Light = 'light',
}

export interface ThemeContextType {
  mode: Mode;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>(Mode.Dark);

  const toggle = () => {
    setMode((prev) => (prev === Mode.Dark ? Mode.Light : Mode.Dark));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div
        className={`theme ${
          // mode === Mode.Dark ? 'bg-black text-white' : 'bg-white text-gray-950'
          mode
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
