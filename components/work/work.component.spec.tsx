import { Work } from "./work.component";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { render } from "@testing-library/react";
import { expect } from "vitest";

describe("Work", () => {
  it("should render", () => {
    const { asFragment } = render(<Work />, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
