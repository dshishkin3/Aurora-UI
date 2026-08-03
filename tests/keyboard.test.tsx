import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Switch,
} from "../src";

describe("keyboard interaction", () => {
  it("closes a dialog with Escape", () => {
    render(
      <Dialog defaultOpen>
        <DialogTrigger>Открыть</DialogTrigger>
        <DialogContent>
          <DialogTitle>Настройки</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("toggles Switch with Space", () => {
    render(<Switch aria-label="Уведомления" />);
    const control = screen.getByRole("switch");
    control.focus();
    fireEvent.keyDown(control, { key: " " });
    fireEvent.keyUp(control, { key: " " });
    fireEvent.click(control);
    expect(control).toHaveAttribute("aria-checked", "true");
  });

  it("opens a dropdown and focuses the first menu item", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Действия</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Редактировать</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    fireEvent.keyDown(screen.getByRole("button", { name: "Действия" }), { key: "ArrowDown" });
    expect(screen.getByRole("menuitem", { name: "Редактировать" })).toHaveFocus();
  });
});
