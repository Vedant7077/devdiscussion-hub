
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
}

export function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelect(categoryId);
  };

  return (
    <div className="flex overflow-x-auto scrollbar-none pb-2 gap-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary hover:bg-secondary/80 text-foreground"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
