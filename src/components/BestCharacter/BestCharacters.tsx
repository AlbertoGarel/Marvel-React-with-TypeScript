import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container";
import marvelImage from "../../img/marvel.png";
import useBlurListenerID from "../../hooks/useBlurListenerID";

import "./BestCharacters.scss";

interface BestCharactersProps {
  handlerViewCharacters: () => void;
  viewCharacters: boolean;
}

export default function BestCharacters({
  handlerViewCharacters,
  viewCharacters,
}: BestCharactersProps) {
  const toogleWord: string = viewCharacters ? "eventos" : "personajes";
  useBlurListenerID("click", "eventsButton");

  return (
    <Container>
      <Grid divided="vertically" className="ui stackable two column grid">
        <Grid.Column>
          <div className="best-characters">
            <Header as="h1">
              los mejores {toogleWord} de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido</Header>
            <Button id="eventsButton" onClick={handlerViewCharacters}>
              Ver todos los {toogleWord}
            </Button>
          </div>
        </Grid.Column>
        <Grid.Column className="image-container" style={{ display: "flex" }}>
          <Image
            src={marvelImage}
            alt="Marvel App"
            className="responsive-img"
            style={{ alignSelf: "center" }}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
