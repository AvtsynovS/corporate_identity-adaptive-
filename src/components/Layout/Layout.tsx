import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 5% 70px;
`;

const StyledSecondaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(224, 224, 224, 0.3);
  padding: 0 5%;

  & div {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Layout = ({ children }: PropsWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export const SecondaryLayout = ({ children }: PropsWithChildren) => {
  return <StyledSecondaryLayout>{children}</StyledSecondaryLayout>;
};
