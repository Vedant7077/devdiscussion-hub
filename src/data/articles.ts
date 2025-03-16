
import { ArticleProps } from "@/components/ArticleCard";

// Sample article data
export const articles: ArticleProps[] = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's static typing to build more robust React applications with fewer runtime errors.",
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Tutorial",
    language: "TypeScript",
    date: "May 12, 2023",
    readTime: "8 min read",
    commentsCount: 24
  },
  {
    id: "2",
    title: "Introduction to Python's asyncio Library",
    excerpt: "Dive into asynchronous programming with Python's asyncio library. Learn how to write concurrent code that's both efficient and readable.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Tutorial",
    language: "Python",
    date: "Apr 28, 2023",
    readTime: "12 min read",
    commentsCount: 18
  },
  {
    id: "3",
    title: "The Future of Web Development: WASM and Edge Computing",
    excerpt: "Explore how WebAssembly and edge computing are changing the landscape of web development and enabling new possibilities.",
    coverImage: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "News",
    language: "",
    date: "May 5, 2023",
    readTime: "6 min read",
    commentsCount: 9
  },
  {
    id: "4",
    title: "Optimizing JavaScript Performance: Tips and Tricks",
    excerpt: "Discover practical techniques to boost your JavaScript performance and create lightning-fast web applications.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Tutorial",
    language: "JavaScript",
    date: "May 2, 2023",
    readTime: "10 min read",
    commentsCount: 15
  },
  {
    id: "5",
    title: "Creating REST APIs with Go and Gin",
    excerpt: "Learn how to build efficient and scalable REST APIs using Go and the Gin web framework.",
    coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Tutorial",
    language: "Go",
    date: "Apr 20, 2023",
    readTime: "15 min read",
    commentsCount: 7
  },
  {
    id: "6",
    title: "Rust Announced as Linux's Second Official Language",
    excerpt: "The Linux kernel developers have announced that Rust will join C as an official language for kernel development.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "News",
    language: "Rust",
    date: "May 10, 2023",
    readTime: "4 min read",
    commentsCount: 32
  },
  {
    id: "7",
    title: "Useful JavaScript Snippets for Everyday Development",
    excerpt: "A collection of practical JavaScript snippets that will help you solve common programming challenges.",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Snippet",
    language: "JavaScript",
    date: "Apr 15, 2023",
    readTime: "7 min read",
    commentsCount: 12
  },
  {
    id: "8",
    title: "Building Microservices with Java and Spring Boot",
    excerpt: "A comprehensive guide to developing scalable microservices architecture using Java and Spring Boot.",
    coverImage: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Tutorial",
    language: "Java",
    date: "May 8, 2023",
    readTime: "18 min read",
    commentsCount: 6
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "tutorial", name: "Tutorials" },
  { id: "news", name: "News" },
  { id: "snippet", name: "Snippets" }
];

// Function to filter articles by category
export const getArticlesByCategory = (categoryId: string): ArticleProps[] => {
  if (categoryId === 'all') {
    return articles;
  }
  return articles.filter(article => 
    article.category.toLowerCase() === categoryId.toLowerCase()
  );
};

// Function to filter articles by language
export const getArticlesByLanguage = (languageId: string): ArticleProps[] => {
  if (languageId === 'all') {
    return articles;
  }
  return articles.filter(article => 
    article.language.toLowerCase() === languageId.toLowerCase()
  );
};

// Function to search articles
export const searchArticles = (query: string): ArticleProps[] => {
  const searchTerm = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.category.toLowerCase().includes(searchTerm) ||
    article.language.toLowerCase().includes(searchTerm)
  );
};

// Function to get a single article by ID
export const getArticleById = (id: string): ArticleProps | undefined => {
  return articles.find(article => article.id === id);
};
