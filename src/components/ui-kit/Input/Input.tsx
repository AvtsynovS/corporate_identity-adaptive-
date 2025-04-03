import styled from "styled-components";

type InputProps = {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent) => void;
  value?: string;
  className?: string;
};

const StyledInput = styled.input`
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #7f7d7d;
`;

export const Input = ({
  placeholder,
  value,
  className,
  onChange,
}: InputProps) => {
  return (
    <StyledInput
      className={className}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
