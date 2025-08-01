import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export function GlassmorphismCard({ 
  children, 
  className, 
  variant = "dark" 
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variant === "dark" ? "glass-morphism-dark" : "glass-morphism",
        className
      )}
    >
      {children}
    </div>
  );
}
