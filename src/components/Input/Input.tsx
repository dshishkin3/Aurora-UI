import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <label className="ui-field">
      {label && <span className="ui-field-label">{label}</span>}
      <input
        id={inputId}
        className={cn("ui-input", error && "ui-input--error", className)}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <span className="ui-field-error" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
