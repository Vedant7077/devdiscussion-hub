
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MessageSquare } from "lucide-react";

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  language: string;
  date: string;
  readTime: string;
  commentsCount: number;
}

export function ArticleCard({ article }: { article: ArticleProps }) {
  return (
    <div className="glass-card overflow-hidden group animate-enter hover-scale">
      <Link to={`/article/${article.id}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-2 py-0.5 text-xs">
            {article.category}
          </Badge>
          {article.language && (
            <Badge variant="outline" className="px-2 py-0.5 text-xs">
              {article.language}
            </Badge>
          )}
        </div>
        
        <Link to={`/article/${article.id}`} className="block">
          <h3 className="text-xl font-medium leading-tight group-hover:text-primary transition-colors duration-200">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            {article.commentsCount}
          </span>
        </div>
      </div>
    </div>
  );
}
