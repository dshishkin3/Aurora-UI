import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../src";

describe("Dialog", () => {
  it("opens accessibly and closes with its close button", () => {
    render(
      <Dialog>
        <DialogTrigger>Открыть</DialogTrigger>
        <DialogContent>
          <DialogTitle>Настройки</DialogTitle>
          <DialogDescription>Описание окна</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Открыть" }));
    expect(screen.getByRole("dialog", { name: "Настройки" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Закрыть" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
