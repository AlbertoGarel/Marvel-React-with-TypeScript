
import { Card, Header, Dimmer, Loader } from "semantic-ui-react";
import useFetch from "../../hooks/useFetch";
import FetchError from "../../components/FetchError/FetchError";
import { UselastListFetch } from "../../types/useFetch.d";
import Container from "../Container/Container";
import CharactersComponent from "../Characters/Characters";


export default function ListCharacters() {
  const toFetch: string = `${process.env.REACT_APP_URL_BASE}/characters?apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&ts=${process.env.REACT_APP_TIME_STAMP}`;
  const lastListFetch: UselastListFetch = useFetch(toFetch);
  const { loading, result, error } = lastListFetch;

  if (error.length) {
    return <FetchError error={error} />;
  }

  if (loading && !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando series</Loader>
      </Dimmer>
    );
  }
  return (
    <div className="container-list-last-events">
    <Header size="large">Personajes</Header>
    <Container>
      <Card.Group className="ui stackable four column grid">
        {result?.map((item) => {
          return <CharactersComponent key={item.id + item.name} item={item} />;
        })}
      </Card.Group>
    </Container>
  </div>
);
}
