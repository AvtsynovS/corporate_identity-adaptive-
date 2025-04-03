import styled from "styled-components";
import { device } from "../../../constants";

type ButtonType = "button" | "submit" | "reset";
type ViewType = "primary" | "secondary" | "ghost" | "icon" | "link";

type ButtonProps = {
  view: ViewType;
  type?: ButtonType;
  label?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  withPadding?: boolean;
  className?: string;
};

const StyledButton = styled.button<{
  view: ViewType;
  withPadding?: boolean;
}>`
  cursor: pointer;
  font-size: 0.9em;
  padding: ${({ view }) => {
    switch (view) {
      case "primary":
      case "secondary":
      case "ghost":
        return "1em";
      case "icon":
      case "link":
      default:
        return 0;
    }
  }};
  background-color: ${({ view }) => {
    switch (view) {
      case "primary":
        return "#2B59C3";
      case "secondary":
        return "#fff";
      case "link":
      case "ghost":
        return "transparent";
      default:
        return "transparent";
    }
  }};
  color: ${({ view }) => {
    switch (view) {
      case "secondary":
      case "ghost":
        return "#000";
      case "link":
        return "blue";
      case "primary":
      default:
        return "#fff";
    }
  }};
  border-radius: ${({ view }) => (view === "ghost" ? "15px" : "40px")};
  border: ${({ view, withPadding }) =>
    view === "ghost"
      ? "1px solid #fff"
      : withPadding
      ? "1px solid #181818"
      : "none"};
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media ${device.tablet} {
    font-size: 0.7em;
  }

  @media ${device.mobile} {
    font-size: 0.7em;
  }
`;

export const Button = ({
  view,
  type = "button",
  label,
  icon,
  withPadding,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type={type}
      view={view}
      withPadding={withPadding}
      onClick={onClick}
    >
      {icon ? icon : label}
    </StyledButton>
  );
};
