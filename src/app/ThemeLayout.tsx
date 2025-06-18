"use client";
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "blue",
  setTheme: () => {},
});

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
