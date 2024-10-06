import React from 'react';
import { AITool } from '../types';
import { ExternalLink } from 'lucide-react';

interface AIToolCardProps {
  tool: AITool;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={tool.imageUrl} alt={tool.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{tool.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tool.category}
          </span>
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            Visit <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIToolCard;