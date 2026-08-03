import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
const meta = { title: "Components/Popover", component: Popover } satisfies Meta<typeof Popover>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Открыть</Button>
      </PopoverTrigger>
      <PopoverContent>Контент popover</PopoverContent>
    </Popover>
  ),
};
