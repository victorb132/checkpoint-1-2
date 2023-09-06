import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 300px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Body = styled.Text`
  font-size: 16px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const ContainerButtons = styled.View`
  margin: 10px 0 0 0;
  flex-direction: row;
  width: 50px;
  justify-content: space-between;
  align-items: center;
`;