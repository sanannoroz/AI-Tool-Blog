import { AITool } from '../types';

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and text generation.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://chat.openai.com/',
    category: 'Language Model',
  },
  {
    id: '2',
    name: 'DALL-E',
    description: 'AI system that creates realistic images and art from natural language descriptions.',
    imageUrl: 'https://images.unsplash.com/photo-1686191128892-3b5a4bd4f8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://openai.com/dall-e-2/',
    category: 'Image Generation',
  },
  {
    id: '3',
    name: 'Midjourney',
    description: 'AI-powered tool that generates images from textual descriptions.',
    imageUrl: 'https://images.unsplash.com/photo-1678983601138-65c9c7b8d820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
    link: 'https://www.midjourney.com/',
    category: 'Image Generation',
  },
  {
    id: '4',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion tool that helps developers write code faster.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    link: 'https://github.com/features/copilot',
    category: 'Development',
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'AI writing assistant that helps create content for various purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://www.jasper.ai/',
    category: 'Writing',
  },
];