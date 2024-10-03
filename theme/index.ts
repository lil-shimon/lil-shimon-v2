import { DefaultTheme } from "styled-components";

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const theme: DefaultTheme = {
  mediaQuery: {
    sp: customMediaQuery(576),
    tablet: customMediaQuery(768),
    laptop: customMediaQuery(992),
  },
};
