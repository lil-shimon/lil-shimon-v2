import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./header.component";
import { ThemeProvider } from "@/theme";

test("should render", () => {
  const { asFragment } = render(<Header />, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
  });

  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("Shimosawa Kenta")).toHaveAttribute("href", "/");
  expect(screen.getByText("ソースコード")).toHaveAttribute(
    "href",
    "https://github.com/lil-shimon/lil_shimon"
  );
});
