"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, RefreshCw } from "lucide-react";

interface IdType {
  id: string;
  name: string;
  description: string;
  generator: () => string;
}

interface IdCardProps {
  type: IdType;
  generatedId: string;
  isGenerating: boolean;
  onRegenerate: (type: IdType) => void;
  onCopy: (id: string, typeName: string) => void;
}

export function IdCard({
  type,
  generatedId,
  isGenerating,
  onRegenerate,
  onCopy,
}: IdCardProps) {
  return (
    <Card className="relative">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{type.name}</CardTitle>
            <CardDescription className="text-sm mt-1">
              {type.description}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onRegenerate(type)}
            disabled={isGenerating}
            className="shrink-0"
          >
            <RefreshCw
              className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-3 min-h-[60px] flex items-center">
          {generatedId ? (
            <code className="text-sm font-mono break-all text-foreground">
              {generatedId}
            </code>
          ) : (
            <div className="text-muted-foreground text-sm">Generating...</div>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => onCopy(generatedId || "", type.name)}
            disabled={!generatedId}
            className="flex-1"
          >
            <Copy className="h-3 w-3 mr-1" />
            Copy
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onRegenerate(type)}
            disabled={isGenerating}
            className="flex-1"
          >
            <RefreshCw
              className={`h-3 w-3 mr-1 ${isGenerating ? "animate-spin" : ""}`}
            />
            Generate
          </Button>
        </div>

        {generatedId && (
          <div className="text-xs text-muted-foreground space-y-1">
            <div>Length: {generatedId.length} characters</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
