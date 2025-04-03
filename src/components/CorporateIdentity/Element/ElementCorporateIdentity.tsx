import styled from "styled-components";
import { Title } from "../../ui-kit";
import { device } from "../../../constants";

type ElementCorporateIdentityProps = {
  titleText: string;
  text: string;
};

const StyledElement = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 25%;
  border: 1px solid rgba(122, 122, 122, 0.2);
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media ${device.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 4em;
  margin: 0.2em 0;
`;

export const ElementCorporateIdentity = ({
  titleText,
  text,
}: ElementCorporateIdentityProps) => {
  return (
    <StyledElement>
      <StyledTitle
        type="h2"
        text={titleText}
      />
      <p>{text}</p>
    </StyledElement>
  );
};
