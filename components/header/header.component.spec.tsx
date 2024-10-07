import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Header } from "./header.component";
import { ThemeProvider } from "@/theme";

test("should render", () => {
  const { asFragment } = render(<Header />, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
  });

  expect(asFragment()).toMatchSnapshot();
});
