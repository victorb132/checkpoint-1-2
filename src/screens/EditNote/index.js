import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import {
  Container,
  InputTitle,
  InputBody,
  Button,
  ButtonText
} from "./styles";

export default function EditNote({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dataComing = route.params;

  useEffect(() => {
    setTitle(dataComing.title);
    setBody(dataComing.body);
    console.log(dataComing);
  }, [])

  async function saveNote() {
    const note = {
      title,
      body
    }

    const data = await AsyncStorage.getItem('note');
    const currentData = data ? JSON.parse(data) : [];

    currentData[dataComing.index] = note;

    const formattedData = [
      ...currentData
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
        <ButtonText>Salvar nota</ButtonText>
      </Button>
    </Container>
  );
}