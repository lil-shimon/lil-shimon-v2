import { render } from "@testing-library/react";
import { Hero } from "./hero.component";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { expect } from "vitest";

describe("Hero", () => {
  it("should render", () => {
    const { asFragment } = render(<Hero />, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
