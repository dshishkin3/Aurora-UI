import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../src";

describe("Button", () => {
  it("renders content and variant classes", () => {
    render(<Button variant="secondary">Сохранить</Button>);
    const button = screen.getByRole("button", { name: "Сохранить" });
    expect(button).toHaveClass("ui-button--secondary", "ui-button--md");
  });

  it("supports disabled state", () => {
    render(<Button disabled>Недоступно</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
