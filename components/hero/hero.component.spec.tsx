import { render, screen } from "@testing-library/react";
import { Hero } from "./hero.component";
import { expect } from "vitest";
import { ThemeProvider } from "@/theme";

describe("Hero", () => {
  it("should render", () => {
    const { asFragment } = render(<Hero />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("下澤 健太")).toBeInTheDocument();
    expect(screen.getByText("フリーランスエンジニア")).toBeInTheDocument();
  });
});
