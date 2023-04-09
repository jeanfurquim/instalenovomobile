import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";

export const text = StyleSheet.create({
  title: {
    fontFamily: "Poppins_700Bold",
  },
});

export const Container = styled.SafeAreaView`
  flex:1
  align-items: center;

  background: ${(props) => props.theme.colors.background.primary};
`;

export const TitleWrapper = styled.View`
  margin-top: ${(props) => props.theme.spaces.space3};
`;

export const CarouselWrapper = styled.View`
  flex-shrink: 1;
`;

export const ImageHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DotsWrapper = styled.TouchableOpacity`
  flex-direction: row;
 

`;
interface DotsProps {
  active: boolean;
}
export const Dot = styled.TouchableOpacity<DotsProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0px ${(props) => props.theme.spaces.space1};
  background: ${(props) =>
    props.active
      ? props.theme.colors.background.secondary
      : props.theme.colors.background.tertiary};
`;

interface CarouselSlidesProps {
  width: number;
}
export const CarouselSlide = styled.View<CarouselSlidesProps>`

  padding: 0px ${(props) => props.theme.spaces.space5};
  width: ${(props) => props.width}px;
`;

export const FooterWrapper = styled.View`
  padding: ${(props) => props.theme.spaces.space2}
    ${(props) => props.theme.spaces.space5};
  
  
`;
