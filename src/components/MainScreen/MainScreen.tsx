import styled from "styled-components";
import milk from "../../assets/images/milk_bg.png";
import { Button } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "../Modal";
import { Title } from "../Title";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: url(${milk}) no-repeat center center/cover;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  padding: 0 5%;
`;

const StyledArticle = styled.div`
  margin: 270px 0 340px;
  max-width: 560px;

  & h1 {
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 65px;
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
    <StyledContainer>
      <StyledWrapper>
        <StyledArticle>
          <div>
            <Title
              type="h1"
              text="Вам нужен фирменный стиль или ребрендинг?"
            />
            <Title
              type="h2"
              text="Разработаем в срок от 10-ти дней"
            />
          </div>
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
      </StyledWrapper>
      {isModalActive && (
        <Modal
          title="Оставить заявку"
          onClose={handleModalClose}
        />
      )}
    </StyledContainer>
  );
};
