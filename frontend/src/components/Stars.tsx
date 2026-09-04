import { Star } from "lucide-react";

export default function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? "fill-primary text-primary" : "text-muted-foreground/40"}
        />
      ))}
    </div>
  );
}
