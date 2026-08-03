import type { ReactNode } from "react";
export function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="ui-field">
      <span className="ui-field-label">{label}</span>
      {children}
      {error && (
        <span role="alert" className="ui-field-error">
          {error}
        </span>
      )}
    </label>
  );
}
