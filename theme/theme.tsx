import { ReactNode } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";

import { DefaultTheme } from "styled-components";

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const theme: DefaultTheme = {
  mediaQuery: {
    sp: customMediaQuery(576),
    tablet: customMediaQuery(768),
    laptop: customMediaQuery(992),
  },
};

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledComponentThemeProvider theme={theme}>
      {children}
    </StyledComponentThemeProvider>
  );
};
