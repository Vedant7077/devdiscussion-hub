
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // We're now using the search functionality directly in the Index component
    // This will filter posts without redirecting to another page
    window.scrollTo({
      top: document.querySelector('.py-16')?.offsetTop || 0,
      behavior: 'smooth'
    });
    
    // Trigger the global search through a custom event
    window.dispatchEvent(new CustomEvent('global-search', { detail: query }));
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
          <Button variant="outline" className="rounded-full group">
            <span>Tutorials</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="rounded-full group">
            <span>News</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="rounded-full group">
            <span>Code Snippets</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
