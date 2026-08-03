import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Статус" },
} satisfies Meta<typeof Badge>;
export default meta;
export const Neutral: StoryObj<typeof meta> = {};
export const Success: StoryObj<typeof meta> = { args: { variant: "success", children: "Активен" } };
