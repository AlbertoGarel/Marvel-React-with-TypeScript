import { useState } from "react";
import BestCharacters from "../components/BestCharacter/BestCharacters";
import Insider from "../components/Insider/Insider";
import ListLastEvents from "../components/ListLastEvents/ListLastEvents";
import ListCharacters from "../components/ListCharacters/ListCharacters";

export default function Home() {
  const [viewCharacters, setViewCharacters] = useState<boolean>(true);

  const handlerViewCharacters = () => {
    setViewCharacters(!viewCharacters);
  };

  return (
    <>
      <BestCharacters handlerViewCharacters={handlerViewCharacters} viewCharacters={viewCharacters} />
      {!viewCharacters ? <ListLastEvents /> : <ListCharacters />}
      <Insider />
    </>
  );
}
