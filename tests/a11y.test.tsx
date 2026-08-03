import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Button, Input, Switch } from "../src";

describe("accessibility", () => {
  it("has no detectable violations in basic controls", async () => {
    const { container } = render(
      <main>
        <Button>Сохранить</Button>
        <Input label="Email" />
        <Switch aria-label="Уведомления" />
      </main>,
    );
    expect(
      (await axe(container, { rules: { "color-contrast": { enabled: false } } })).violations,
    ).toEqual([]);
  });
});
