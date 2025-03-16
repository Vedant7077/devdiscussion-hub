
import { supabase } from "@/integrations/supabase/client";
import { PostData } from "@/types/posts";

export const fetchAllPosts = async (): Promise<PostData[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }

  return data || [];
};

export const fetchPostById = async (id: string): Promise<PostData | null> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Error fetching post:", error);
    throw error;
  }

  return data;
};

export const createPost = async (post: Omit<PostData, "id" | "created_at" | "comments_count">): Promise<PostData> => {
  const { data, error } = await supabase
    .from("posts")
    .insert([{
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      cover_image: post.cover_image,
      category: post.category,
      language: post.language,
      read_time: post.read_time,
    }])
    .select()
    .single();

  if (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  return data;
};
