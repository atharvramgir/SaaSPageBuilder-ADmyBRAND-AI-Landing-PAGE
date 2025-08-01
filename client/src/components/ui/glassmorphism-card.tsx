import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassmorphismCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export function GlassmorphismCard({ 
  children, 
  className, 
  variant = "dark",
  ...props
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        variant === "dark" ? "glass-morphism-dark" : "glass-morphism",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
