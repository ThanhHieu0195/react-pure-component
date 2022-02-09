import { ButtonWrapper } from "./StyledButton";

interface ButtonProps {
  label: string | React.ReactElement;
}

const Button = function ({ label }: ButtonProps) {
  return <ButtonWrapper>{label}</ButtonWrapper>;
};

export default Button;
