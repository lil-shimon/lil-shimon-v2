import { render } from "@testing-library/react";
import { Avatar } from "./avatar.component";
import { expect } from "vitest";
import { ThemeProvider } from "@/theme";

describe("Avatar", () => {
  it("should render", () => {
    const { asFragment } = render(<Avatar />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
