import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from '../../components/Card';

import { Container, ContainerCard, CardButton, EmptyNotes } from './styles';

export default function Home({ navigation }) {
  const [notes, setNotes] = useState([]);

  async function getNote() {
    const data = await AsyncStorage.getItem('note');
    const currentData = data ? JSON.parse(data) : [];
    setNotes(currentData);
  }

  useEffect(() => {
    getNote();
  }, [notes]);

  function handleNavigateToDetails(item) {
    navigation.navigate('Details', item);
  }

  return (
    <Container>
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          renderItem={({ item, index }) => (
            <CardButton onPress={() => handleNavigateToDetails(item)}>
              <ContainerCard>
                <Card title={item.title} body={item.body} index={index} />
              </ContainerCard>
            </CardButton>
          )}
        />
      ) : <EmptyNotes>Nenhuma nota cadastrada</EmptyNotes>}
    </Container>
  );
}