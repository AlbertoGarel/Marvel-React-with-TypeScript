import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";
import { UselastListFetch } from "../types/useFetch.d";

export default function Comics() {
  const [renderComics, setRenderComics] = useState<number>(9);

  const listComics: UselastListFetch = useFetch(
    `${process.env.REACT_APP_URL_BASE}/comics?apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&ts=${process.env.REACT_APP_TIME_STAMP}&orderBy=focDate&limit=${renderComics}`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image">
        <div id="empty-block" />
      </div>
      <Grid>
        <Grid.Column>
          <Container>
            <Header as="h2" id="title-comics">
              Los mejores Cómics
            </Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
