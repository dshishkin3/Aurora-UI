import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
const meta = {
  title: "Components/Input",
  component: Input,
  args: { label: "Email", placeholder: "you@example.com" },
} satisfies Meta<typeof Input>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const Error: StoryObj<typeof meta> = { args: { error: "Введите корректный email" } };
