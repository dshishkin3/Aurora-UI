import { cn } from "../../lib/utils";
export function Spinner({ className }: { className?: string }) {
  return <span role="status" aria-label="Загрузка" className={cn("ui-spinner", className)} />;
}
