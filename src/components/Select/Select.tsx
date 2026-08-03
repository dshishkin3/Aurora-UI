import type { SelectHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}
export function Select({ options, className, ...props }: SelectProps) {
  return (
    <select className={cn("ui-select", className)} {...props}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}
