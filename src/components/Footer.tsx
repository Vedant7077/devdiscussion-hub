
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">DevPost</h3>
          <p className="text-sm text-muted-foreground">
            A modern platform for developers to share and discover coding knowledge.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                News
              </Link>
            </li>
            <li>
              <Link to="/snippets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Code Snippets
              </Link>
            </li>
            <li>
              <Link to="/forum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forum
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DevPost. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
