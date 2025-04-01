import styled from "styled-components";
import { Link } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { Title, Button, Input, Checkbox } from "../ui-kit";

type ContactFormProps = {
  title: string;
  subTitle?: string;
  vertical?: boolean;
};

type FormType = {
  fullName: string;
  phone: string;
  privacyPolicy: boolean;
};

const StyledForm = styled.form<{ vertical: boolean }>`
  display: grid;
  align-items: center;
  gap: 15px;
  grid-template-columns: ${({ vertical }) =>
    vertical ? "repeat(2, 1fr)" : "repeat(5, 1fr)"};
  grid-template-areas: ${({ vertical }) =>
    vertical
      ? `"fullName fullName"
        "phone phone"
        "policy policy"
        "button button"`
      : `"fullName fullName phone phone button"
        "fullName fullName phone phone button"
        "policy policy . . ."`};
`;

const StyledFullNameField = styled(Input)`
  grid-area: fullName;
`;

const StyledPhoneField = styled(Input)`
  grid-area: phone;
`;

const StyledPolicyField = styled(Checkbox)`
  grid-area: policy;
  margin: 10px 0 30px 0;
`;

const StyledButton = styled(Button)`
  grid-area: button;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: blue;
  font-weight: bold;
  text-decoration: none;
`;

const StyledLabel = styled.div`
  font-size: 16px;
`;

const StyledWrapper = styled.div<{ vertical: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ vertical }) => (vertical ? 0 : "70px 0")};
`;
export const ContactForm = ({
  title,
  subTitle,
  vertical = false,
}: ContactFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = (data: FormType) => {
    console.log("submit data: ", data);
  };

  return (
    <StyledWrapper vertical={vertical}>
      <Title
        type="h2"
        text={title}
      />
      {subTitle && (
        <Title
          type="h3"
          text={subTitle}
        />
      )}

      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        vertical={vertical}
      >
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => (
            <StyledFullNameField
              placeholder="Введите ФИО"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <StyledPhoneField
              placeholder="Введите телефон"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="privacyPolicy"
          render={({ field: { onChange, value } }) => (
            <StyledPolicyField
              label={
                <StyledLabel>
                  Я принимаю{" "}
                  <StyledLink to="privacy-policy">
                    условия передачи персональных данных
                  </StyledLink>
                </StyledLabel>
              }
              checked={value}
              onChange={onChange}
            />
          )}
        />
        <StyledButton
          type="submit"
          view="primary"
          label="Оставить заявку"
        />
      </StyledForm>
    </StyledWrapper>
  );
};
