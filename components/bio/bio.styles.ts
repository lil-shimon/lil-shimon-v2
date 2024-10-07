import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Title = styled.h1`
  padding-bottom: 0.5em;
  border-bottom: #333 1px dotted;
`;

export const BioContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 4fr;
  align-items: center;
  gap: 1em;
`;

export const Year = styled.span`
  font-weight: bold;
`;
