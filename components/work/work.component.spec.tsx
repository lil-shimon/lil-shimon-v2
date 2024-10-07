import { ThemeProvider } from "@/theme";
import { Work } from "./work.component";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("Work", () => {
  it("should render", () => {
    const { asFragment } = render(<Work />, {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Work");
    expect(
      screen.getByText(
        "新卒でエンジニアになり、2年間正社員エンジニアを経験しました。その後はフリーランスとして活動しています。 正社員の時はWebフロントエンド、バックエンド、インフラ、Windowsアプリ、モバイルアプリ、スマートウォッチアプリ等、領域問わず開発に携わりました。 その時にプロジェクトマネージャや開発責任者の役割も経験しています。 独立してからは主にWebフロントエンドに特化しています。直近ではNext.jsをメインで使っています。"
      )
    );
  });
});
