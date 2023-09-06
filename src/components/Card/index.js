import { Container, Title, Body, ContainerButtons, ButtonIcon } from './styles';
import Icon from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export default function Card({ title, body, index }) {
  const navigation = useNavigation();

  async function removeNote() {
    Alert.alert('Remover nota', 'Deseja remover a nota?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          const data = await AsyncStorage.getItem('note');
          const currentData = data ? JSON.parse(data) : [];

          currentData.splice(index, 1);

          await AsyncStorage.setItem('note', JSON.stringify(currentData));
        }
      }
    ])
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <ContainerButtons>
        <ButtonIcon onPress={() => removeNote()}>
          <Icon name="trash" size={20} />
        </ButtonIcon>
        <ButtonIcon onPress={() => navigation.navigate('EditNote', {
          title,
          body,
          index
        })}>
          <Icon name="pencil" size={20} />
        </ButtonIcon>
      </ContainerButtons>
    </Container>
  );
}