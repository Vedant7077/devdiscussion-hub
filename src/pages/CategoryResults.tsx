
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { LanguageFilter } from "@/components/LanguageFilter";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchAllPosts } from "@/services/postService";
import { mapPostToArticleProps, PostData } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useParams, useNavigate } from "react-router-dom";

const CategoryResults = () => {
  const { toast } = useToast();
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState(categoryId || "all");
  const [activeLanguage, setActiveLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([
    { id: "all", name: "All" }
  ]);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load articles. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  // Extract categories from posts
  useEffect(() => {
    if (!posts) return;
    
    // Extract unique categories from posts
    const uniqueCategories = Array.from(
      new Set(posts.map(post => post.category.toLowerCase()))
    ).map(category => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1) // Capitalize first letter
    }));
    
    // Add "All" category at the beginning
    setCategories([{ id: "all", name: "All" }, ...uniqueCategories]);
    
    // Set active category based on route param
    if (categoryId) {
      setActiveCategory(categoryId.toLowerCase());
    }
  }, [posts, categoryId]);

  useEffect(() => {
    if (!posts) return;
    
    let filtered = [...posts];
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Filter by language
    if (activeLanguage !== "all") {
      filtered = filtered.filter(
        (post) => 
          post.language && 
          post.language.toLowerCase() === activeLanguage.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          (post.language && post.language.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(filtered);
  }, [posts, activeCategory, activeLanguage, searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/category/${categoryId}`);
  };

  const handleLanguageSelect = (languageId: string) => {
    setActiveLanguage(languageId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  // Extract unique languages from posts for the language filter
  const languages = posts 
    ? Array.from(new Set(posts.filter(post => post.language).map(post => post.language)))
        .filter(Boolean)
        .map(lang => ({ id: lang as string, name: lang as string }))
    : [];
  
  // Add "All" option to languages
  const allLanguages = [{ id: "all", name: "All" }, ...languages];

  // Get the display name of the current category for the heading
  const categoryName = categoryId 
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
    : 'All Posts';

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  {categoryName} Articles
                </h2>
                <div className="flex items-center gap-3">
                  <SearchBar onSearch={handleSearch} />
                  <LanguageFilter 
                    languages={allLanguages}
                    onFilterChange={handleLanguageSelect} 
                  />
                </div>
              </div>
              
              <CategoryTabs categories={categories} onSelect={handleCategorySelect} />
            </div>
            
            {isLoading ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium">Loading articles...</h3>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <ArticleCard 
                    key={post.id} 
                    article={mapPostToArticleProps(post)} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium">No articles found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
              </div>
            )}
            
            <div className="text-center pt-6">
              <Button className="group">
                <span>Load More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryResults;
