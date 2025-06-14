import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="text-center py-6">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">
          Super Unique ID Generator
        </h1>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/yuzu-juice/super-unique-id-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </header>
  );
}
