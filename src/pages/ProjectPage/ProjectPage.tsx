import { useParams } from "react-router";

export const ProjectPage = () => {
  const { id } = useParams();

  return <div>ProjectPage {id}</div>;
};
