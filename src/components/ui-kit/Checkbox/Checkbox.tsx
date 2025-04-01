import styled from "styled-components";

type CheckboxProps = {
  label: any;
  checked?: boolean;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & input {
    margin-left: 10px;
  }
`;

export const Checkbox = ({
  className,
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  return (
    <StyledCheckbox className={className}>
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox">{label}</label>
    </StyledCheckbox>
  );
};
