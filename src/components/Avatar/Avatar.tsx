import { cn } from "../../lib/utils";
export function Avatar({
  src,
  alt = "",
  fallback,
  className,
}: {
  src?: string;
  alt?: string;
  fallback: string;
  className?: string;
}) {
  return (
    <span className={cn("ui-avatar", className)}>
      {src ? <img src={src} alt={alt} /> : fallback}
    </span>
  );
}
