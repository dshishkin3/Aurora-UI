import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
const meta = {
  title: "Components/Switch",
  component: Switch,
  args: { "aria-label": "Уведомления" },
} satisfies Meta<typeof Switch>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
