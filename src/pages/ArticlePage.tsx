
import { useParams } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { fetchPostById } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { marked } from "marked";
import DOMPurify from "dompurify";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const { data: article, isLoading, error } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchPostById(id || ""),
    enabled: !!id,
  });

  // Function to safely render markdown content
  const renderMarkdown = (content: string) => {
    // Parse markdown to HTML
    const rawHtml = marked.parse(content);
    // Sanitize HTML to prevent XSS attacks
    const cleanHtml = DOMPurify.sanitize(rawHtml);
    return cleanHtml;
  };

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load the article. Please try again later.",
      variant: "destructive",
    });
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold">Article not found</h1>
            <p className="mt-4 text-gray-500">The article you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 py-16 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>{new Date(article.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}</span>
              <span>•</span>
              <span>{article.read_time}</span>
              {article.language && (
                <>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{article.language}</span>
                </>
              )}
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{article.category}</span>
            </div>
          </header>
          
          <div className="mb-8 aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={article.cover_image} 
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:rounded prose-code:px-1 prose-pre:bg-gray-800 prose-pre:text-gray-100 dark:prose-pre:bg-gray-900 dark:prose-pre:text-gray-200 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-img:rounded-lg prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-700" 
            dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }} 
          />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
