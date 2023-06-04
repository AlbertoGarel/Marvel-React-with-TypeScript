import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Characters_heroes } from "../../types/fetchEvents.d";
import "../ListCharacters/ListCharacters.scss";
import "../ListLastEvents/ListLastEvents.scss";

interface LastEventsProps {
  item: Characters_heroes;
}
export default function CharactersComponent({ item }: LastEventsProps) {

  return (
    <Card key={item.id} className="last-event">
      <Image
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {item.comics.available} Comics
          </span>
        </Card.Meta>
        <Card.Description>
          {item.description ? item.description : "No existe descripción"}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {item.urls.map((item, index) => {
          return (
            <Button
            key={index}
              animated
              fluid
              as="a"
              href={item.url}
              target="_blank"
              color="black"
              style={{marginBottom: 10 + 'px'}}
            >
              <Button.Content visible>Ver Evento</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          );
        })}
      </Card.Content>
    </Card>
  );

}
