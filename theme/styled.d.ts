import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mediaQuery: {
      sp: string;
      tablet: string;
      laptop: string;
    };
  }
}
