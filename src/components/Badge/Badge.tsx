import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
const badgeVariants = cva("ui-badge", {
  variants: {
    variant: {
      primary: "ui-badge--primary",
      success: "ui-badge--success",
      warning: "ui-badge--warning",
      neutral: "ui-badge--neutral",
    },
  },
  defaultVariants: { variant: "neutral" },
});
export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
