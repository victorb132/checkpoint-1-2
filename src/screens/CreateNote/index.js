import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  InputTitle,
  InputBody,
  Button,
  ButtonText
} from "./styles";

export default function CreateNote({ navigation }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function saveNote() {
    if (title == '' || body == '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const note = {
      title,
      body
    }

    const data = await AsyncStorage.getItem('note');
    const currentData = data ? JSON.parse(data) : [];
    const formattedData = [
      ...currentData,
      note
    ];

    await AsyncStorage.setItem('note', JSON.stringify(formattedData));
    navigation.pop();
  }

  return (
    <Container>
      <InputTitle placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <InputBody placeholder="Descrição da nota"
        editable
        multiline
        numberOfLines={6}
        value={body}
        onChangeText={setBody}
      />
      <Button onPress={() => saveNote()}>
        <ButtonText>Criar nota</ButtonText>
      </Button>
    </Container>
  );
}