import { render } from "@testing-library/react";
import { Avatar } from "./avatar.component";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { expect } from "vitest";

describe("Avatar", () => {
  it("should render", () => {
    const { asFragment } = render(<Avatar />, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
