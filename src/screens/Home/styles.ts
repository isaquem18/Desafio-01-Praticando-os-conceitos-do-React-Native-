import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.gray_600};
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;
