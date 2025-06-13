"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { IdCard } from "@/components/IdCard";
import { Header } from "@/components/Header";
import { idTypes, IdType } from "@/data/idTypes";

export default function Home() {
  const [generatedIds, setGeneratedIds] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initialIds: Record<string, string> = {};
    idTypes.forEach((type) => {
      initialIds[type.id] = type.generator();
    });
    setGeneratedIds(initialIds);
  }, []);

  const regenerateId = async (type: IdType) => {
    setIsGenerating((prev) => ({ ...prev, [type.id]: true }));

    await new Promise((resolve) => setTimeout(resolve, 300));

    setGeneratedIds((prev) => ({
      ...prev,
      [type.id]: type.generator(),
    }));

    setIsGenerating((prev) => ({ ...prev, [type.id]: false }));
  };

  const copyToClipboard = async (id: string, typeName: string) => {
    try {
      await navigator.clipboard.writeText(id);
      toast(`${typeName} copied to clipboard!`, {
        description: id,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="container mx-auto max-w-6xl">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {idTypes.map((type) => (
            <IdCard
              key={type.id}
              type={type}
              generatedId={generatedIds[type.id] || ""}
              isGenerating={isGenerating[type.id] || false}
              onRegenerate={regenerateId}
              onCopy={copyToClipboard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
