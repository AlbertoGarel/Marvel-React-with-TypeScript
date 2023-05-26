import { Image, Header, Grid } from "semantic-ui-react";
import Container from "../Container/Container";
import lokiImage from "../../img/loki_error.png";
import './FetchError.scss';

interface FetchErrorProps {
  error: string;
}
export default function FetchError({ error }: FetchErrorProps) {
  return (
    <Container>
      <Grid divided="vertically" className="grid-container-error ui stackable two column divided grid container">
      <Grid.Column  id="error-text">
          <Header as="h3" block color="red">
            {error}
          </Header>
          <Header as="h4" block>
            Estamos comprobando si "Loki" tiene algo que ver...
          </Header>
        </Grid.Column>
      <Grid.Column  id="image-text">
          <Image src={lokiImage} alt="error en conexión" />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
