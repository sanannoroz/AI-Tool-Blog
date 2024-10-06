import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI Releases GPT-4 with Multimodal Capabilities',
    summary: 'OpenAI has announced the release of GPT-4, a large multimodal model capable of accepting image and text inputs to produce text outputs.',
    date: '2023-03-14',
    url: 'https://openai.com/research/gpt-4',
  },
  {
    id: '2',
    title: 'Google Introduces Bard, an AI-Powered Chatbot',
    summary: 'Google has launched Bard, an AI chatbot powered by LaMDA, to compete with ChatGPT in the conversational AI space.',
    date: '2023-03-21',
    url: 'https://blog.google/technology/ai/bard-google-ai-search-updates/',
  },
  {
    id: '3',
    title: 'Meta Releases Segment Anything Model (SAM) for Computer Vision',
    summary: 'Meta AI has open-sourced SAM, a new AI model that can identify and segment any object in an image or video based on a variety of prompts.',
    date: '2023-04-05',
    url: 'https://ai.facebook.com/blog/segment-anything-foundation-model-image-segmentation/',
  },
];

const AINewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center dark:text-white">
        <Newspaper className="mr-2" />
        AI News
      </h2>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                {item.title}
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{item.summary}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AINewsPage;