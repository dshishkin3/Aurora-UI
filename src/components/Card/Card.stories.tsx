import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
const meta = { title: "Components/Card", component: Card } satisfies Meta<typeof Card>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader>
        <CardTitle>Профиль</CardTitle>
      </CardHeader>
      <CardContent>Информация пользователя</CardContent>
    </Card>
  ),
};
