import { Container, Title, Body } from "./styles";

export default function Details({ route }) {
  const { title, body } = route.params;

  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
}