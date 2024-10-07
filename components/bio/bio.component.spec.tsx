import { render } from "@testing-library/react";
import { Bio } from "./bio.component";
import { ThemeProvider } from "@/theme";
import { expect } from "vitest";

describe("Bio", () => {
  it("should render", () => {
    const { asFragment } = render(<Bio />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
