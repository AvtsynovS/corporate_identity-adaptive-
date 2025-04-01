import styled from "styled-components";
import { Title } from "../ui-kit";
import guideline from "../../assets/images/guideline.png";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 30px;

  & img {
    max-width: 50%;
    border-radius: 0.3em;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.8em;

    & h2 {
      margin: 0;
    }

    & p {
      text-align: justify;
      margin-top: 0;
      line-height: 1.5;
    }
  }
`;
const StyledParagraph = styled.div`
  color: #fff;
  background-color: #2a58c0;
  padding: 0.8em;
  border-radius: 0.3em;
`;

export const Guideline = () => {
  return (
    <StyledWrapper>
      <div>
        <Title
          type="h2"
          text="Гайдлайны в подарок"
        />
        <StyledContainer>
          <img
            src={guideline}
            alt="guideline"
          />
          <div>
            <StyledParagraph>
              <Title
                type="h2"
                text="Что такое гайдлайн и зачем он нужен?"
              />
              <p>
                А теперь об обещанном бонусе: заказывая фирменный стиль в нашем
                агентстве вы получаете минимальный гайдлайн в подарок, это
                позволит вам уже быть на шаг впереди ваших конкурентов!
              </p>
            </StyledParagraph>
            <p>
              Гайдлайн – это свод правил по воспроизведению фирменного стиля на
              носителях. Если коротко, то в гайдлайне описано, как должен
              выглядеть каждый элемент корпоративного стиля и какие правила его
              использования. Гайдлайн помогает вашему бизнесу экономить время и
              деньги, помогать масштабироваться, а также тиражировать ваш бизнес
              посредством франшизы.
            </p>
          </div>
        </StyledContainer>
      </div>
    </StyledWrapper>
  );
};
