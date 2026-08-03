import * as R from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cn } from "../../lib/utils";
export const TooltipProvider = R.Provider;
export const Tooltip = R.Root;
export const TooltipTrigger = R.Trigger;
export const TooltipContent = forwardRef<
  ElementRef<typeof R.Content>,
  ComponentPropsWithoutRef<typeof R.Content>
>(({ className, ...props }, ref) => (
  <R.Portal>
    <R.Content ref={ref} className={cn("ui-tooltip", className)} {...props} />
  </R.Portal>
));
