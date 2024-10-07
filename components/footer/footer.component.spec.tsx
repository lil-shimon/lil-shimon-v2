import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from "./footer.component";
import { ThemeProvider } from "@/theme";

test("should render", () => {
  const { asFragment } = render(<Footer />, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
  });

  expect(asFragment()).toMatchSnapshot();
  expect(
    screen.getByText("© 2024 Shimosawa Kenta. All rights reserved.")
  ).toBeInTheDocument();
});
