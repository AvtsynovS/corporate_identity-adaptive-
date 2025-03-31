import styled from "styled-components";
import { ContactForm } from "../ContactForm";
import { Title } from "../Title";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  gap: 100px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 70px 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <ContactForm
          title="Связаться с нами"
          vertical
        />
      </div>
      <div>
        <Title
          type="h2"
          text="Контакты"
        />
        <div>
          <StyledLink href="tel:+74951563911">8 (495) 156-39-11</StyledLink>
        </div>
        <div>
          <StyledLink href="mailto:brand@free-creative.com">
            brand@free-creative.com
          </StyledLink>
        </div>
        <div>Москва, Садовническая улица 69</div>
      </div>
    </StyledFooter>
  );
};
