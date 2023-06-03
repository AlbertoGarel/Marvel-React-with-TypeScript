import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import CharactersComponent from "../components/Characters/Characters";
import LastEvents from "../components/LastEvents/LastEvents";
import Container from "../components/Container/Container";
import FetchError from "../components/FetchError/FetchError";
import Footer from "../components/Footer/Footer";
import Insider from "../components/Insider/Insider";
import ListCharacters from "../components/ListCharacters/ListCharacters";
import ListComics from "../components/ListComics/ListComics";
import ListSeries from "../components/ListSeries/ListSeries";
import {
  Characters_heroes,
  Result,
  URLType,
  ItemType,
  Extension,
  Role,
} from "../types/fetchEvents";

it("test_render_error", () => {
  render(
    <MemoryRouter initialEntries={["/invalid"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Error 404 page/i)).toBeInTheDocument();
});

it("test_render_home", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Disfruta del mejor contenido/i)).toBeInTheDocument();
});

it("test_render_comics", () => {
  render(
    <MemoryRouter initialEntries={["/comics"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Los mejores Cómics/i)).toBeInTheDocument();
});

it("test_render_series", () => {
  render(
    <MemoryRouter initialEntries={["/series"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Las últimas series de Marvel/i)).toBeInTheDocument();
});

it("test_clicking_theme_button_toggles_theme", () => {
  const setThemeMock = jest.fn();
  render(
    <MemoryRouter>
      <Header setTheme={setThemeMock} theme={false} />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText(/light theme/i));
  expect(setThemeMock).toHaveBeenCalled();
});

it("test_characters_component_rendering_valid_data", () => {
  const item: Characters_heroes = {
    id: 1009148,
    name: "Absorbing Man",
    description: "",
    modified: "2013-10-24T14:32:08-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
      extension: Extension["Jpg"],
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1009148",
    comics: {
      available: 97,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1009148/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
          name: "A+X (2012) #8",
        },
      ],
      returned: 20,
    },
    series: {
      available: 48,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1009148/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
          name: "A+X (2012 - 2014)",
        },
      ],
      returned: 20,
    },
    stories: {
      available: 109,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1009148/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/4988",
          name: "1 of 1",
          type: ItemType["Cover"],
        },
      ],
      returned: 20,
    },
    events: {
      available: 4,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1009148/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/238",
          name: "Civil War",
        },
      ],
      returned: 4,
    },
    urls: [
      {
        type: URLType["Detail"],
        url:
          "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=0bf7303edb3e0454b6b9da8bf14821a8",
      },
    ],
  };
  render(<CharactersComponent item={item} />);
  const cardHeader = screen.getByText("Spider-Man");
  const cardImage = screen.getByRole("img");
  const cardDescription = screen.getByText("A web-slinging superhero");
  const button = screen.getByRole("button");
  expect(cardHeader).toBeInTheDocument();
  expect(cardImage).toBeInTheDocument();
  expect(cardDescription).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

it("test_item_missing_or_invalid_properties", () => {
  const item: Result = {
    id: 116,
    title: "Acts of Vengeance!",
    description:
      "Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.",
    resourceURI: "http://gateway.marvel.com/v1/public/events/116",
    urls: [
      {
        type: URLType["Detail"],
        url:
          "http://marvel.com/comics/events/116/acts_of_vengeance?utm_campaign=apiRef&utm_source=0bf7303edb3e0454b6b9da8bf14821a8",
      },
    ],
    modified: "2013-06-28T16:31:24-0400",
    start: null,
    end: null,
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b",
      extension: Extension["Jpg"],
    },
    creators: {
      available: 102,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2707",
          name: "Jeff Albrecht",
          role: Role["Inker"],
        },
      ],
      returned: 20,
    },
    characters: {
      available: 108,
      collectionURI:
        "http://gateway.marvel.com/v1/public/events/116/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009435",
          name: "Alicia Masters",
        },
      ],
      returned: 20,
    },
    stories: {
      available: 161,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12960",
          name: "Fantastic Four (1961) #334",
          type: ItemType["Cover"],
        },
      ],
      returned: 20,
    },
    comics: {
      available: 53,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12744",
          name: "Alpha Flight (1983) #79",
        },
      ],
      returned: 20,
    },
    series: {
      available: 22,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
          name: "Alpha Flight (1983 - 1994)",
        },
      ],
      returned: 20,
    },
    next: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/240",
      name: "Days of Future Present",
    },
    previous: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/233",
      name: "Atlantis Attacks",
    },
  };
  render(<LastEvents item={item} />);
  expect(screen.queryByRole("article")).not.toBeInTheDocument();
});

it("test_content_component_used", () => {
  const { getByText } = render(<Container>Test</Container>);
  expect(getByText("Test")).toBeInTheDocument();
});

it("test_fetch_error_with_valid_error_message", () => {
  render(<FetchError error="Error message" />);
  const header = screen.getByRole("heading", {
    level: 3,
    name: "Error message",
  });
  const image = screen.getByAltText("error en conexión");
  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

it("test_footer_contains_header_with_author", () => {
  const { getByRole } = render(<Footer />);
  const header = getByRole("heading");
  expect(header).toHaveTextContent("Created by #AlbertoGarel");
});

it("test_button_click_triggers_blur_event", () => {
  render(<Insider />);
  const button = screen.getByRole("button", { name: "Únete ahora" });
  fireEvent.click(button);
  expect(button).not.toHaveFocus();
});

it("test_error_fetching_data", async () => {
  const mockError = "Error fetching data";
  jest.spyOn(global, "fetch").mockRejectedValue(mockError);
  const { getByText } = render(<ListCharacters />);
  await waitFor(() => expect(getByText(mockError)).toBeInTheDocument());
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining("characters")
  );
});

it("test_render_comics_successfully", () => {
  const mockListComics = {
    loading: false,
    result: [
      {
        id: 1,
        title: "Comic 1",
        images: [{ path: "path/to/image", extension: "jpg" }],
        urls: ["https://example.com"],
      },
      {
        id: 2,
        title: "Comic 2",
        images: [{ path: "path/to/image", extension: "jpg" }],
        urls: ["https://example.com"],
      },
    ],
    error: "",
  };
  const { getByText, getAllByRole } = render(
    <ListComics
      listComics={mockListComics}
      renderComics={6}
      setRenderComics={() => {}}
    />
  );
  expect(screen.getByText("Comic 1")).toBeInTheDocument();
  expect(screen.getByText("Comic 2")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
  //one button more for button 'load more'. 2 + 1
  expect(screen.getAllByRole("button")).toHaveLength(3);
});

it("test_list_series_with_all_information", () => {
  const listSeries = {
    loading: false,
    result: [
      {
        id: 1,
        title: "Series 1",
        thumbnail: {
          path: "path/to/image",
          extension: "jpg",
        },
        creators: {
          available: 3,
        },
        urls: [
          {
            url: "https://example.com",
          },
        ],
        description: "This is a description",
      },
      {
        id: 2,
        title: "Series 2",
        thumbnail: {
          path: "path/to/image",
          extension: "jpg",
        },
        creators: {
          available: 1,
        },
        urls: [
          {
            url: "https://example.com",
          },
        ],
        description: "This is another description",
      },
    ],
    error: "",
  };

  render(<ListSeries listSeries={listSeries} />);

  expect(screen.getByText("Series 1")).toBeInTheDocument();
  expect(screen.getByText("Series 2")).toBeInTheDocument();
  expect(screen.getByText("This is a description")).toBeInTheDocument();
  expect(screen.getByText("This is another description")).toBeInTheDocument();
});
