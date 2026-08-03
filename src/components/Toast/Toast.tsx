import type { ReactNode } from "react";
export function Toast({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="ui-toast">
      {children}
    </div>
  );
}
