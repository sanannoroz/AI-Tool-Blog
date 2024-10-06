import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Moon, Sun, Newspaper } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot size={32} />
          <h1 className="text-2xl font-bold">AI Tools Blog</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/news" className="hover:text-blue-200 flex items-center"><Newspaper size={16} className="mr-1" /> News</Link></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
            <li><a href="#" className="hover:text-blue-200">Contact</a></li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;