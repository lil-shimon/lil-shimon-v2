import { HEADER_HEIGHT } from "@/theme";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  ${(props) => props.theme.mediaQuery.tablet} {
    margin: 0 auto;
    max-width: 768px;
  }
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;
