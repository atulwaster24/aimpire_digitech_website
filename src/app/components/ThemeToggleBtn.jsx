'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SwitchTheme from './ToggleBtn';

const ThemeToggleButton = ({theme, setTheme}) => {

  // Load the theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Add/remove the 'dark' class to/from `html`
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <SwitchTheme toggleTheme={toggleTheme} theme={theme} />
  );
};

export default ThemeToggleButton;
