
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass-card backdrop-blur-lg bg-background/80 py-3 px-4 md:px-6 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-xl font-semibold tracking-tight transition-all duration-300 hover:text-primary"
          >
            DevPost
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/tutorials" className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary">
              Tutorials
            </Link>
            <Link to="/news" className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary">
              News
            </Link>
            <Link to="/snippets" className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary">
              Snippets
            </Link>
            <Link to="/forum" className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary">
              Forum
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />
          
          <Button 
            variant="default"
            className="hidden md:flex"
          >
            Sign In
          </Button>
          
          <Button 
            className="md:hidden"
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card backdrop-blur-lg bg-background/90 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/tutorials" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/snippets" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Snippets
            </Link>
            <Link 
              to="/forum" 
              className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Forum
            </Link>
            <div className="pt-2">
              <Button 
                variant="default"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
