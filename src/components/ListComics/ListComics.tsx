import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./ListComics.scss";
import FetchError from "../FetchError/FetchError";
import {UselastListFetch} from '../../types/useFetch.d';

interface ListComicsProps{
    listComics: UselastListFetch
    renderComics: number
    setRenderComics: ( comics: number) => void
}

export default function ListComics({
  listComics,
  renderComics,
  setRenderComics,
}: ListComicsProps) {
  const { loading, result, error } = listComics;

  if (error.length) {
    return <FetchError error={error} />;
  }

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading....</Loader>
      </Dimmer>
    );
  }

  const loadMoreComics = () => {
    const numberComics = renderComics + 6;
    setRenderComics(numberComics);
  };

  return (
    <Card.Group className="ui stackable three column grid">
      {result.map((res, index) => (
        <Card key={index} className="list-comics">
          <Image
            src={`${res.images[0].path}.${res.images[0].extension}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>Digital ID: {res.id}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
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
      <div className="container-button">
        <Button color="red" onClick={() => loadMoreComics()}>
          <Icon name="plus" />
          Cargar más cómics
        </Button>
      </div>
    </Card.Group>
  );
}
