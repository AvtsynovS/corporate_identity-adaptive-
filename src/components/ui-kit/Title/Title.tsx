import styled from "styled-components";

type H2Props = {
  type: "h1" | "h2" | "h3";
  text: string;
  className?: string;
};

const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 55px;
`;

const StyledH2 = styled.h2`
  font-weight: 400;
  font-size: 30px;
  margin: 0.4em 0;
  line-height: 110%;
`;

const StyledH3 = styled.h3`
  font-weight: 400;
  line-height: 110%;
`;

export const Title = ({ text, type, className }: H2Props) => {
  switch (type) {
    case "h1":
      return <StyledH1 className={className}>{text}</StyledH1>;
    case "h2":
      return <StyledH2 className={className}>{text}</StyledH2>;
    case "h3":
      return <StyledH3 className={className}>{text}</StyledH3>;
    default:
      return <h4>{text}</h4>;
  }
};
