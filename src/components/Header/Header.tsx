import styled from "styled-components";
import { Facebook, Instagram, Logo } from "../../assets";
import { device } from "../../constants";
import { Title } from "../ui-kit";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  color: #fff;
  position: relative;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  padding: 2% 5%;

  @media ${device.mobile} {
    & div:last-child {
      display: none;
    }
  }

  & div {
    display: flex;
    align-items: center;
    gap: 20px;

    & h3 {
      max-width: 300px;

      @media ${device.laptop} {
        max-width: 350px;
      }
    }
  }

  @media ${device.mobile} {
    padding: 2% 5%;
  }
`;

const StyledPhone = styled.a`
  color: #fff;
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 15px;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <div>
          <Logo />
          <Title
            type="h3"
            text="Разрабатываем фирменные стили с 2009 года"
          />
        </div>
        <div>
          <StyledPhone href="tel:+74951563911">8 (495) 156-39-11</StyledPhone>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </StyledHeader>
    </StyledContainer>
  );
};
