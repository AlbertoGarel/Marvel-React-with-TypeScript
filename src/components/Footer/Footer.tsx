import { Grid, Image, Header } from "semantic-ui-react";
import marvelLogo from '../../img/Marvel-logo.png';
import './Footer.scss';
export default function Footer() {
  return (
      <Grid className="ui stackable two column grid centered footer">
        <Header as="h4">Created by #AlbertoGarel</Header>
        <Image src={marvelLogo} alt="logo Marvel" id="footer-image"/>
      </Grid>
  );
}
