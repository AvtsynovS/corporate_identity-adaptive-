import styled from "styled-components";
import { Title, Button } from "../ui-kit";
import { projects } from "./constants";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "./types";
import { useNavigate } from "react-router";
import { device } from "../../constants";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 70px;

  @media ${device.mobile} {
    margin-top: 40px;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 15px;
  grid-template-areas:
    "description description description description button"
    "picture picture picture picture picture";
  margin-top: 40px;

  @media ${device.mobile} {
    gap: 5px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "description"
      "picture"
      "button";
  }

  @media ${device.tablet} {
    gap: 5px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "description"
      "picture"
      "button";
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
`;

const StyledDescription = styled.div`
  grid-area: description;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 1em;

  & div > p {
    margin: 0;
  }
`;

const StyledShowButton = styled(Button)`
  min-width: 160px;
`;

const StyledButton = styled(Button)`
  grid-area: button;

  @media ${device.mobile} {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

const StyledPicture = styled.div`
  grid-area: picture;

  & img {
    width: 100%;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const StyleList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-bottom: 40px;
`;

export const Projects = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const itemRef = useRef<HTMLDivElement>(null);

  const onOpenProject = (id: string) => {
    navigate(`/projects/${id}`);
  };
  // Моковый вариант, тут можно получать проекты с бэка
  useEffect(() => {
    if (projects) {
      setProjectList(projects.slice(1));
    }
  }, []);

  return (
    <StyledContainer>
      <div>
        <Title
          type="h2"
          text="Примеры работ"
        />
        <StyledWrapper key={projects[0].id}>
          <StyledDescription>
            <div>
              <StyledTitle
                type="h2"
                text={projects[0].title}
              />
              <p>{projects[0].description}</p>
            </div>
          </StyledDescription>
          <StyledButton
            view="ghost"
            withPadding
            label="Смотреть проект"
            onClick={() => onOpenProject(projects[0].id)}
          />
          <StyledPicture>
            <img
              src={projects[0].img}
              alt={projects[0].img}
            />
          </StyledPicture>
        </StyledWrapper>
        <StyleList isOpen={isOpen}>
          <div ref={itemRef}>
            {isOpen &&
              projectList.map(({ id, title, description, img }) => {
                return (
                  <StyledWrapper key={id}>
                    <StyledDescription>
                      <div>
                        <StyledTitle
                          type="h2"
                          text={title}
                        />
                        <p>{description}</p>
                      </div>
                    </StyledDescription>
                    <StyledButton
                      view="ghost"
                      withPadding
                      label="Смотреть проект"
                      onClick={() => onOpenProject(id)}
                    />
                    <StyledPicture>
                      <img
                        src={img}
                        alt={img}
                      />
                    </StyledPicture>
                  </StyledWrapper>
                );
              })}
          </div>
        </StyleList>
      </div>
      <StyledShowButton
        view="primary"
        label={isOpen ? "Свернуть" : "Развернуть"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </StyledContainer>
  );
};
