// src/hooks/use-theme.js
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Verifica o tema preferido do usuário ou usa 'light' como padrão
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Aplica o tema ao elemento html
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return [theme, toggleTheme]; // Retorna um array com theme e toggleTheme
}