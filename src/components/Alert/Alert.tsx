import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
export function Alert({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="alert" className={cn("ui-alert", className)} {...props} />;
}
