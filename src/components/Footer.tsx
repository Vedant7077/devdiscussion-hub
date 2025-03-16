import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm py-10 px-4 md:px-6">
      {/* Centered Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Branding and Description */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">DevHeart</h3>
          <p className="text-sm text-muted-foreground">
            A modern platform for developers to share and discover coding knowledge.
          </p>
        </div>

        {/* Social Links */}
        {/* <div className="flex space-x-4">
          <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div> */}
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DevHeart. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Made with ❤️ by 2.devs
        </p>
      </div>
    </footer>
  );
}
