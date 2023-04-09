import styled from "styled-components/native";

interface Props {
  color: string;

}

export const LargeTitleText = styled.Text<Props>`
  font-family: ${(props) => props.theme.fonts.headline.family};
  font-size: ${(props) => props.theme.fonts.largeTitle.size};
  color: ${(props) => props.color};
`;

export const BodyText = styled.Text<Props>`
  font-family: ${(props) => props.theme.fonts.body.family};
  font-size: ${(props) => props.theme.fonts.body.size};
  color: ${(props) => props.color};
  text-align: center;
 
`;

export const HeadlineText = styled.Text<Props>`
  font-family: ${(props) => props.theme.fonts.headline.family};
  font-size: ${(props) => props.theme.fonts.body.size};
  color: ${(props) => props.color};
  text-align: center;
`;

