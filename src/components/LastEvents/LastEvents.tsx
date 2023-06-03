import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Result } from "../../types/fetchEvents.d";
import "./LastEvents.scss";


interface LastEventsProps {
  item: Result;
}
export default function LastEvents({ item }: LastEventsProps) {
  
  return (
    <Card key={item.id} className="last-event">
      <Image
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {item.comics.available} Comics
          </span>
        </Card.Meta>
        <Card.Description>{item.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          animated
          fluid
          as="a"
          href={item.urls[0].url}
          target="_blank"
          color="black"
        >
          <Button.Content visible>Ver Evento</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
}
