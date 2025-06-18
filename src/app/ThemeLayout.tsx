"use client";
import { useState, createContext, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "blue",
  setTheme: () => {},
});

export default function ThemeLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("blue");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
