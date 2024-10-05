import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Text = styled.span`
  font-size: 1.25rem;
`;
