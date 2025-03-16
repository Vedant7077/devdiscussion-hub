import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { LanguageFilter } from "@/components/LanguageFilter";
import { SearchBar } from "@/components/SearchBar";
import { categories, getArticlesByCategory, getArticlesByLanguage, searchArticles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [displayedArticles, setDisplayedArticles] = useState(getArticlesByCategory("all"));
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLanguage, setActiveLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (searchQuery) {
      const searchResults = searchArticles(searchQuery);
      setDisplayedArticles(
        categoryId === "all"
          ? searchResults
          : searchResults.filter(article => article.category.toLowerCase() === categoryId.toLowerCase())
      );
    } else if (activeLanguage !== "all") {
      const languageFiltered = getArticlesByLanguage(activeLanguage);
      setDisplayedArticles(
        categoryId === "all"
          ? languageFiltered
          : languageFiltered.filter(article => article.category.toLowerCase() === categoryId.toLowerCase())
      );
    } else {
      setDisplayedArticles(getArticlesByCategory(categoryId));
    }
  };

  const handleLanguageSelect = (languageId: string) => {
    setActiveLanguage(languageId);
    if (searchQuery) {
      const searchResults = searchArticles(searchQuery);
      setDisplayedArticles(
        languageId === "all"
          ? searchResults
          : searchResults.filter(article => article.language.toLowerCase() === languageId.toLowerCase())
      );
    } else if (activeCategory !== "all") {
      const categoryFiltered = getArticlesByCategory(activeCategory);
      setDisplayedArticles(
        languageId === "all"
          ? categoryFiltered
          : categoryFiltered.filter(article => article.language.toLowerCase() === languageId.toLowerCase())
      );
    } else {
      setDisplayedArticles(getArticlesByLanguage(languageId));
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      let results = searchArticles(query);
      
      if (activeCategory !== "all") {
        results = results.filter(article => article.category.toLowerCase() === activeCategory.toLowerCase());
      }
      
      if (activeLanguage !== "all") {
        results = results.filter(article => article.language.toLowerCase() === activeLanguage.toLowerCase());
      }
      
      setDisplayedArticles(results);
    } else {
      let articles = getArticlesByCategory(activeCategory);
      
      if (activeLanguage !== "all") {
        articles = articles.filter(article => article.language.toLowerCase() === activeLanguage.toLowerCase());
      }
      
      setDisplayedArticles(articles);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight">Browse Articles</h2>
                <div className="flex items-center gap-3">
                  <SearchBar onSearch={handleSearch} />
                  <LanguageFilter onFilterChange={handleLanguageSelect} />
                </div>
              </div>
              
              <CategoryTabs categories={categories} onSelect={handleCategorySelect} />
            </div>
            
            {displayedArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
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

export default Index;
