'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-white p-2 rounded-full cursor-pointer hover:text-gray-300 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 text-gray-200" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  );
}
