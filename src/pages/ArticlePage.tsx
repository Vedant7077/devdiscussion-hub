
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { getArticleById, articles } from "@/data/articles";
import { ArticleProps } from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MessageSquare, Share2, BookmarkPlus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate loading delay
      setIsLoading(true);
      
      setTimeout(() => {
        const foundArticle = getArticleById(id);
        
        if (foundArticle) {
          setArticle(foundArticle);
          
          // Get related articles (same category or language)
          const related = articles
            .filter(a => 
              a.id !== id && 
              (a.category === foundArticle.category || a.language === foundArticle.language)
            )
            .slice(0, 3);
          
          setRelatedArticles(related);
        }
        
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-secondary rounded w-56 mb-4"></div>
            <div className="h-4 bg-secondary rounded w-32"></div>
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
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to articles
          </Link>
          
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-2.5 py-0.5">
                {article.category}
              </Badge>
              {article.language && (
                <Badge variant="outline" className="px-2.5 py-0.5">
                  {article.language}
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                {article.commentsCount} comments
              </span>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                {article.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
              </p>
              
              <h2>Getting Started</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="code-block">
                <pre><code>{`function example() {
  const value = "Hello World";
  console.log(value);
  return value;
}`}</code></pre>
              </div>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2>Advanced Techniques</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <ul>
                <li>First important concept</li>
                <li>Second important concept</li>
                <li>Third important concept with additional details and explanation</li>
              </ul>
              
              <div className="code-block">
                <pre><code>{`class Example {
  constructor() {
    this.value = "Hello World";
  }
  
  getValue() {
    return this.value;
  }
}`}</code></pre>
              </div>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-10">
            <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id} 
                  to={`/article/${relatedArticle.id}`}
                  className="glass-card p-4 hover-scale"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-md mb-3">
                    <img 
                      src={relatedArticle.coverImage}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium line-clamp-2">{relatedArticle.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      {relatedArticle.category}
                    </Badge>
                    {relatedArticle.language && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        {relatedArticle.language}
                      </Badge>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
