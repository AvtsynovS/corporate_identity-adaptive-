import styled from "styled-components";
import { Title } from "../ui-kit";
import vilata from "../../assets/images/vilata.png";
import aq_lifecare from "../../assets/images/aq_lifecare.png";
import { ElementCorporateIdentity, elements } from "./Element";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 100px 0;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 30px;

  & img {
    max-width: 50%;
    border-radius: 0.3em;
  }

  & div > p {
    text-align: justify;
    margin-top: 0;
  }
`;

const StyledElementsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledPriceArticle = styled.div`
  display: grid;
  gap: 0 3em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    ". . title title"
    "main main picture picture"
    "main main picture picture";
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
    height: 100%;
    object-fit: cover;
    border-radius: 0.3em;
  }
`;

const StyledParagraph = styled.p`
  color: #fff;
  background-color: #2a58c0;
  padding: 1em 0.8em;
  border-radius: 0.3em;
`;

export const CorporateIdentity = () => {
  return (
    <StyledWrapper>
      <div>
        <Title
          type="h2"
          text="Что такое фирменный стиль"
        />
        <StyledContainer>
          <img
            src={vilata}
            alt="vilata"
          />
          <div>
            <p>
              Это набор тех уникальных «признаков», по которым клиент отличит
              вас от других компаний. Фирменный стиль отражает миссию бренда,
              ценности, является способом его идентификации, формирует
              определённое восприятие в коммуникации с потребителями.
            </p>
            <p>
              В идеале разработка корпоративного стиля должна происходить
              одновременно с созданием бизнеса и формированием его
              фундаментальных идей. Есть и второй вариант: бизнес существует
              определенное время и ему нужен перезапуск - это называется
              редизайн или ребрендинг: в мире жёсткой конкуренции важно быть «в
              тренде», успевать за изменениями в поведениях покупателя и
              “говорить” с ним на одном языке.
            </p>
          </div>
        </StyledContainer>
      </div>
      <div>
        <Title
          type="h2"
          text="Название и логотип – важные составляющие фирменного стиля, но на этом всё только начинается. Ниже основные элементы:"
        />
        <p>
          Этот набор варьируется в зависимости от нужд и потребностей компании:
          визитные карточки, фирменные бланки и прочая деловая документация,
          упаковка, сувенирная продукция, брендинг автотранспорта.
        </p>
        <StyledElementsWrapper>
          {elements.map(({ title, text }) => (
            <ElementCorporateIdentity
              key={title}
              titleText={title}
              text={text}
            />
          ))}
        </StyledElementsWrapper>
      </div>
      <StyledPriceArticle>
        <StyledTitle
          type="h2"
          text="Сколько стоит фирменный стиль?"
        />
        <StyledContent>
          <p>
            Каждая задача по разработке фирменного стиля уникальна для нас — это
            новый вызов и новые эмоции. Мы принципиально не предлагаем вам
            стандартизированные пакеты “эконом”, “стандрат”, или “премиум”, мы
            не штампуем, мы - создаем.
          </p>
          <p>
            Стоимость разработки фирменного стиля в нашем агентстве начинается
            от 120 000 руб., финальную планку без брифинга определить невозможно
            - давайте созвонимся и обсудим ваш проект!{" "}
          </p>
          <StyledParagraph>
            Каждый клиент нашего агентства получает приятный бонус на финише
            проекта, о котором мы расскажем ниже ▼
          </StyledParagraph>
        </StyledContent>

        <StyledPicture>
          <img
            src={aq_lifecare}
            alt="aq_lifecare"
          />
        </StyledPicture>
      </StyledPriceArticle>
    </StyledWrapper>
  );
};
