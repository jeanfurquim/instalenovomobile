import styled from "styled-components/native";

interface Props{
  background: string;
}

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props=>props.background};
  height:50px;
  width:100%;
  border-radius:100px;
`;

export const IconWrapper = styled.View`
margin-right:${(props) => props.theme.spaces.space2}
`;

export const Wrapper = styled.View`
flex: 1;
flex-direction: row;
justify-content: center;
align-items: center;

`;
