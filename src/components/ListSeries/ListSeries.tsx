import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import "./ListSeries.scss";
import {UselastListFetch} from '../../types/useFetch';
import FetchError from "../FetchError/FetchError";

interface ListSeriesProps{
    listSeries: UselastListFetch;
}

export default function ListSeries({ listSeries }: ListSeriesProps) {
  const { loading, result, error } = listSeries;

  if(error.length){
    return (
        <FetchError error={error} />
    )
  }

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando series</Loader>
      </Dimmer>
    );
  }

  return (
    <Card.Group className="ui stackable three column grid" id="list-card-content">
      {result.map((res, index) => (
        <Card key={res.id} className="list-series">
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            wrapped
            alt={res.title}
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>
                <Icon name="users" /> {res.creators.available}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>
                <Icon name="rebel" /> {res.id}
              </span>
            </Card.Meta>
            <Card.Description>{res.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              animated
              fluid
              as="a"
              href={res.urls[0].url}
              target="_blank"
            >
              <Button.Content visible>Más información</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}