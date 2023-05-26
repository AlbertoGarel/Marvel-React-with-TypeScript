import { Card, Header, Dimmer, Loader } from "semantic-ui-react";
import Container from "../Container/Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";
import FetchError from "../FetchError/FetchError";
import {UselastListFetch} from '../../types/useFetch.d'

export default function ListLastEvents() {
  const toFetch: string = `${process.env.REACT_APP_URL_BASE}/events?apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&ts=${process.env.REACT_APP_TIME_STAMP}`;
  const lastListFetch: UselastListFetch = useFetch(toFetch, {});
  const { loading, result, error } = lastListFetch;

  if (error.length) {
    return <FetchError error={error} />;
  }

  
  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );

  return (
    <div className="container-list-last-events" >
      <Header size="large">Últimos eventos</Header>
      <Container>
        <Card.Group className="ui stackable four column grid">
          {result?.map((item) => {
            return <LastEvents key={item.id} item={item} />;
          })}
        </Card.Group>
      </Container>
    </div>
  );
}
