import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AIToolGrid from './components/AIToolGrid';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import AINewsPage from './components/AINewsPage';
import { aiTools } from './data/aiTools';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  const categories = useMemo(() => {
    return ['All', ...new Set(aiTools.map((tool) => tool.category))];
  }, []);

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="mb-8 space-y-4">
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    <CategoryFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                    />
                  </div>
                  <AIToolGrid tools={filteredTools} />
                </>
              } />
              <Route path="/news" element={<AINewsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;