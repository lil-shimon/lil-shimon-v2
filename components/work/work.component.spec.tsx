import { ThemeProvider } from "@/theme";
import { Work } from "./work.component";
import { render } from "@testing-library/react";
import { expect } from "vitest";

describe("Work", () => {
  it("should render", () => {
    const { asFragment } = render(<Work />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
