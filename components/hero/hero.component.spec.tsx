import { render } from "@testing-library/react";
import { Hero } from "./hero.component";
import { expect } from "vitest";
import { ThemeProvider } from "@/theme";

describe("Hero", () => {
  it("should render", () => {
    const { asFragment } = render(<Hero />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
