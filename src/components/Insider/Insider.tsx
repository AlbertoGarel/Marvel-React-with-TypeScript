import { Grid, Header, Image, Button } from "semantic-ui-react";
import ImageInsider from "../../img/insider.jpeg";
import "./Insider.scss";
import useBlurListenerID from "../../hooks/useBlurListenerID";

export default function Insider() {
  useBlurListenerID("click", "insiderButton");

  return (
    <div className="container-insider">
      <Grid container columns="2">
        <Grid.Column>
          <Image src={ImageInsider} alt="Image Insider" />
        </Grid.Column>
        <Grid.Column>
          <Header size="large" color="red" as="h1">
            Mira, Gana y Canjea
          </Header>
          <Header size="large" as="h3">
            Consigue puntuación haciendo lo que más te gusta
          </Header>
          <div className="container-insider-content-button">
            <Button
              id="insiderButton"
              href="https://www.marvel.com/insider"
              target="_blank"
            >
              Únete ahora
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
