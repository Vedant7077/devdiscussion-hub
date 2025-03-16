
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">DevBlog</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <Link to="/new">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              <span>New Post</span>
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
