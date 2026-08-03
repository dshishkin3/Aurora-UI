import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Alert,
  Avatar,
  Pagination,
  Select,
  Skeleton,
  Spinner,
  Switch,
  Table,
  Textarea,
} from "../src";
describe("extra components", () => {
  it("renders accessible primitives", () => {
    render(
      <>
        <Alert>Ошибка</Alert>
        <Textarea aria-label="Комментарий" />
        <Select aria-label="Выбор" options={["A", "B"]} />
        <Spinner />
        <Skeleton />
        <Avatar fallback="AB" />
        <Switch />
        <Pagination page={1} pages={2} onChange={() => {}} />
        <Table headers={["Имя"]} rows={[["Ada"]]} />
      </>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
