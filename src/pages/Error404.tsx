import { Button } from "semantic-ui-react";
import Container from "../components/Container/Container";
import FetchError from "../components/FetchError/FetchError";
export default function Error404() {
  return (
    <>
      <div id="empty-block" />
      <Container>
        <Button
          animated
          fluid
          as="a"
          href={"/inicio"}
          id="button_page_error404"
          style={{margin: '20px 0'}}
        >
          volver a inicio
        </Button>
        <FetchError error={"error 404. No se encuentra el contenido."} />
      </Container>
    </>
  );
}
