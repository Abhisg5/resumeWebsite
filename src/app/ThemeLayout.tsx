"use client";
import { useState, createContext, ReactNode } from "react";

export const ThemeContext = createContext({ theme: "blue", setTheme: (t: string) => {} });

export default function ThemeLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("blue");
  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
} 