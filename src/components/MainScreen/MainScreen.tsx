import styled from "styled-components";
import milk from "../../assets/images/milk_bg.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ContactForm } from "../ContactForm";
import { Modal, Title, Button } from "../ui-kit";
import { device } from "../../constants";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImgBox = styled.div`
  display: flex;

  & img {
    width: 100%;
    height: 100vh;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10%;

  @media ${device.mobile} {
    gap: 10px;

    & button {
      padding: 0.8em;
    }
  }
`;

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 40%;
  padding: 0 5%;

  @media ${device.mobile} {
    max-width: 50%;
    top: 25%;

    & h2 {
      font-size: 14px;
    }
  }

  & h1 {
    margin-bottom: 0;

    @media ${device.mobile} {
      font-size: 18px;
    }
  }
`;

export const MainScreen = () => {
  const navigate = useNavigate();
  const [isModalActive, setModalActive] = useState(false);

  const onPortfolio = () => {
    navigate("projects");
  };

  const handleModalOpen = () => {
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <StyledWrapper>
      <StyledArticle>
        <Title
          type="h1"
          text="Вам нужен фирменный стиль или ребрендинг?"
        />
        <Title
          type="h2"
          text="Разработаем в срок от 10-ти дней"
        />
        <ButtonWrapper>
          <Button
            view="secondary"
            label="Портфолио"
            onClick={onPortfolio}
          />
          <Button
            view="secondary"
            label="Оставить заявку"
            onClick={handleModalOpen}
          />
        </ButtonWrapper>
      </StyledArticle>
      <StyledImgBox>
        <img
          src={milk}
          alt="milk"
        />
      </StyledImgBox>
      {isModalActive && (
        <Modal onClose={handleModalClose}>
          <ContactForm
            title="Оставить заявку"
            vertical
          />
        </Modal>
      )}
    </StyledWrapper>
  );
};
