import styled from "styled-components";
import { Title } from "../ui-kit";
import guideline from "../../assets/images/guideline.png";
import { device } from "../../constants";

const StyledParagraph = styled.div`
  color: #fff;
  background-color: #2a58c0;
  padding: 0.8em;
  border-radius: 0.3em;
`;

const StyledWrapper = styled.div`
  display: grid;
  gap: 0 3em;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "title title title title"
    "picture picture main main"
    "picture picture main main";

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    grid-template-areas:
      "title"
      "picture"
      "main";

    & div > img {
      margin-bottom: 1em;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    grid-template-areas:
      "title"
      "picture"
      "main";

    & div > img {
      margin-bottom: 1em;
    }
  }
`;

const StyledTitle = styled(Title)`
  grid-area: title;
  align-self: end;
  margin-bottom: 0.3em;
`;

const StyledContent = styled.div`
  grid-area: main;

  & p {
    margin-bottom: 30px;
  }
`;

const StyledPicture = styled.div`
  grid-area: picture;

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.3em;
  }
`;

export const Guideline = () => {
  return (
    <StyledWrapper>
      <StyledTitle
        type="h2"
        text="Гайдлайны в подарок"
      />
      <StyledContent>
        <StyledParagraph>
          <Title
            type="h2"
            text="Что такое гайдлайн и зачем он нужен?"
          />
          <p>
            А теперь об обещанном бонусе: заказывая фирменный стиль в нашем
            агентстве вы получаете минимальный гайдлайн в подарок, это позволит
            вам уже быть на шаг впереди ваших конкурентов!
          </p>
        </StyledParagraph>
        <p>
          Гайдлайн – это свод правил по воспроизведению фирменного стиля на
          носителях. Если коротко, то в гайдлайне описано, как должен выглядеть
          каждый элемент корпоративного стиля и какие правила его использования.
          Гайдлайн помогает вашему бизнесу экономить время и деньги, помогать
          масштабироваться, а также тиражировать ваш бизнес посредством
          франшизы.
        </p>
      </StyledContent>

      <StyledPicture>
        <img
          src={guideline}
          alt="guideline"
        />
      </StyledPicture>
    </StyledWrapper>
  );
};
