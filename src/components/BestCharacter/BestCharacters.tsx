import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container";
import marvelImage from "../../img/marvel.png";

import "./BestCharacters.scss";

export default function BestCharacters() {
  return (
    <Container>
      <Grid columns={2} divided="vertically">
        <Grid.Column>
          <div className="best-characters">
            <Header as="h1">
              los mejores personajes de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido</Header>
            <Button>Ver todos los personajes</Button>
          </div>
        </Grid.Column>
        <Grid.Column className="image-container" style={{display: 'flex'}}>
          <img src={marvelImage} alt="Marvel App" className="responsive-img" style={{alignSelf: 'center'}}/>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
