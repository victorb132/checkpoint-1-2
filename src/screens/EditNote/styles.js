import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #12044a;
  padding-top: 20px;
  padding: 20px;
  justify-content: center;
`;

export const InputTitle = styled.TextInput`
  font-size: 20px;
  background-color: aliceblue;
  border-radius: 10px;
`;

export const InputBody = styled.TextInput`
  font-size: 20px;
  background-color: aliceblue;
  height: 200px;
  margin: 10px 0 0 0;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin: 10px 0 0 0;
  background-color: orange;
  width: 200px;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;