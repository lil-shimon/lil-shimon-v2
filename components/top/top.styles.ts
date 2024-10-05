import { HEADER_HEIGHT } from "@/theme/const";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  padding-top: ${HEADER_HEIGHT + 30}px;

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 auto;
    max-width: 768px;
  }
`;
