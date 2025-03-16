
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  // Fetch categories from database
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("category")
        .order("category");
      
      if (error) {
        console.error("Error fetching categories:", error);
        return;
      }

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.map(post => post.category))
      );
      
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${encodeURIComponent(category.toLowerCase())}`);
  };

  return (
    <section className="relative px-4 py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          Discover. Learn. Code.
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
          The Developer's <span className="text-primary">Knowledge Hub</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore tutorials, news, and code snippets from the developer community. 
          Learn, share, and grow your programming skills.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <SearchBar onSearch={handleSearch} placeholder="Search for tutorials, languages, or topics..." />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {categories.map((category) => (
            <Button 
              key={category}
              variant="outline" 
              className="rounded-full group"
              onClick={() => handleCategoryClick(category)}
            >
              <span>{category}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
