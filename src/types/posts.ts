
import { Database } from "@/integrations/supabase/types";

// Type for article/post data that matches our Supabase schema
export interface PostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  language: string | null;
  read_time: string;
  comments_count: number;
  created_at: string;
}

// Map the ArticleProps from the existing ArticleCard component to our PostData
export const mapPostToArticleProps = (post: PostData) => {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.cover_image,
    category: post.category,
    language: post.language || "",
    date: new Date(post.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: post.read_time,
    commentsCount: post.comments_count,
  };
};
