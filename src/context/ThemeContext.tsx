'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ColorScheme = 'blue' | 'purple' | 'green' | 'red' | 'orange';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme and colorScheme with a default value.
  // The actual value from localStorage will be set in useEffect.
  const [theme, setTheme] = useState<Theme>('light');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');
  const [isDark, setIsDark] = useState(false);

  // Effect to load theme and color scheme from localStorage after initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme as Theme);
      }
      const savedColorScheme = localStorage.getItem('colorScheme');
      if (savedColorScheme) {
        setColorScheme(savedColorScheme as ColorScheme);
      }
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    const updateTheme = () => {
      let shouldBeDark = false;

      // Ensure window is defined before accessing matchMedia
      if (typeof window !== 'undefined') {
        if (theme === 'dark') {
          shouldBeDark = true;
        } else if (theme === 'system') {
          shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        setIsDark(shouldBeDark);

        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        // Update CSS custom properties for color scheme
        const root = document.documentElement;
        const colors = {
          blue: { primary: '59 130 246', secondary: '147 197 253' },
          purple: { primary: '147 51 234', secondary: '196 181 253' },
          green: { primary: '34 197 94', secondary: '134 239 172' },
          red: { primary: '239 68 68', secondary: '252 165 165' },
          orange: { primary: '249 115 22', secondary: '253 186 116' },
        };

        const selectedColor = colors[colorScheme];
        root.style.setProperty('--color-primary', selectedColor.primary);
        root.style.setProperty('--color-primary-light', selectedColor.secondary);

        // Save current theme and colorScheme to localStorage
        localStorage.setItem('theme', theme);
        localStorage.setItem('colorScheme', colorScheme);
      }
    };

    updateTheme(); // Call once on mount and theme/colorScheme change

    // Add and clean up event listener for system theme changes
    if (theme === 'system' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateTheme);
      return () => mediaQuery.removeEventListener('change', updateTheme);
    }
  }, [theme, colorScheme]); // Dependencies ensure this effect re-runs when theme or colorScheme changes

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, setColorScheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};