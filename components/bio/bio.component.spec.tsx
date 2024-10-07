import { render, screen } from "@testing-library/react";
import { Bio } from "./bio.component";
import { ThemeProvider } from "@/theme";
import { expect } from "vitest";

describe("Bio", () => {
  it("should render", () => {
    const { asFragment } = render(<Bio />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Bio");
    expect(screen.getByText("2019")).toBeInTheDocument();
    expect(screen.getByText("カナダ カルガリー留学")).toBeInTheDocument();
    expect(screen.getAllByText("2021")[0]).toBeInTheDocument();
    expect(screen.getAllByText("2021")[1]).toBeInTheDocument();
    expect(
      screen.getByText("日本大学 経済学部経済学科国際コース 卒業")
    ).toBeInTheDocument();
    expect(
      screen.getByText("クェスタ株式会社 プログラマー 入社")
    ).toBeInTheDocument();
    expect(screen.getByText("2023-現在")).toBeInTheDocument();
    expect(screen.getByText("フリーランスエンジニア")).toBeInTheDocument();
  });
});
