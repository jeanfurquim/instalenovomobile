import { View, Text, ButtonProps } from "react-native";
import React, { ReactNode } from "react";

import { Container, IconWrapper, Wrapper } from "./styles";
import Headline from "../texts/Headline";
import useTheme from "../../hooks/useThemes";


interface Props extends ButtonProps {
  title: string;
  background: string;
  icon?: ReactNode;
}

const Button = ({ title, icon, background, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Container background={background} {...rest}>
      <Wrapper>
        {!!icon && <IconWrapper>{icon}</IconWrapper>}
        <Headline color={theme.colors.text.high}>{title}</Headline>
      </Wrapper>
    </Container>
  );
};

export default Button;