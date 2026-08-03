import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
export function DatePicker({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="date" className={cn("ui-input", className)} {...props} />;
}
