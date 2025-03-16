
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { id: "all", name: "All Languages" },
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "csharp", name: "C#" },
  { id: "go", name: "Go" },
  { id: "rust", name: "Rust" },
  { id: "ruby", name: "Ruby" },
  { id: "php", name: "PHP" },
];

interface LanguageFilterProps {
  onFilterChange: (language: string) => void;
}

export function LanguageFilter({ onFilterChange }: LanguageFilterProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    onFilterChange(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-background">
          <span className="text-sm font-medium">
            {LANGUAGES.find(lang => lang.id === selectedLanguage)?.name || "All Languages"}
          </span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-[calc(100vh-100px)] overflow-auto" align="end">
        <DropdownMenuLabel>Filter by Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((language) => (
          <DropdownMenuCheckboxItem
            key={language.id}
            checked={selectedLanguage === language.id}
            onCheckedChange={() => handleLanguageSelect(language.id)}
          >
            <span className="flex items-center gap-2">
              {language.name}
              {selectedLanguage === language.id && <Check className="h-4 w-4 ml-auto" />}
            </span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
