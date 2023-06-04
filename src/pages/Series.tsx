import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";
import { UselastListFetch } from "../types/useFetch.d";

export default function Series() {
  const listSeries: UselastListFetch = useFetch(
    `${process.env.REACT_APP_URL_BASE}/series?apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=20&ts=${process.env.REACT_APP_TIME_STAMP}`
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image">
          <div id="empty-block" />
        </div>
        <Grid>
          <Grid.Column>
            <Container>
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
