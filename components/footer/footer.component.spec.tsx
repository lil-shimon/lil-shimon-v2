import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from "./footer.component";
import { ThemeProvider } from "@/theme";

test("should render", () => {
  const { asFragment } = render(<Footer />, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
  });

  expect(asFragment()).toMatchSnapshot();
});
