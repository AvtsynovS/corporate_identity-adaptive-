import styled from "styled-components";
import { Button } from "../Button";
import { Title } from "../Title";
import { projects } from "./constants";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "./types";
import { useNavigate } from "react-router";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  & > div {
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em 0;

  & div > img {
    width: 100%;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
`;

const StyledDescription = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 1em;

  & div > p {
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  min-width: 160px;
`;

const StyleList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
            <Button
              view="ghost"
              withPadding
              label="Смотреть проект"
              onClick={() => onOpenProject(projects[0].id)}
            />
          </StyledDescription>
          <div>
            <img
              src={projects[0].img}
              alt={projects[0].img}
            />
          </div>
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
                      <Button
                        view="ghost"
                        withPadding
                        label="Смотреть проект"
                        onClick={() => onOpenProject(id)}
                      />
                    </StyledDescription>
                    <div>
                      <img
                        src={img}
                        alt={img}
                      />
                    </div>
                  </StyledWrapper>
                );
              })}
          </div>
        </StyleList>
      </div>
      <StyledButton
        view="primary"
        label={isOpen ? "Свернуть" : "Развернуть"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </StyledContainer>
  );
};
