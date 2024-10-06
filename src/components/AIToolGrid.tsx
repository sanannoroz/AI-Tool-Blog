import React from 'react';
import { AITool } from '../types';
import AIToolCard from './AIToolCard';

interface AIToolGridProps {
  tools: AITool[];
}

const AIToolGrid: React.FC<AIToolGridProps> = ({ tools }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <AIToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default AIToolGrid;