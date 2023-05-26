export interface RootObject {
 attributionHTML: string;
 attributionText: string;
 code:            number;
 copyright:       string;
 data:            Data;
 etag:            string;
 status:          string;
}

export interface Data {
 count:   number;
 limit:   number;
 offset:  number;
 results: Result[];
 total:   number;
}

export interface Result {
 characters:  Characters;
 comics:      Characters;
 creators:    Creators;
 description: string;
 end:         Date | null;
 id:          number;
 modified:    string;
 next:        Next | null;
 previous:    Next | null;
 resourceURI: string;
 series:      Characters;
 start:       Date | null;
 stories:     Stories;
 thumbnail:   Thumbnail;
 title:       string;
 urls:        URL[];
}

export interface Characters {
 available:     number;
 collectionURI: string;
 items:         Next[];
 returned:      number;
}

export interface Next {
 name:        string;
 resourceURI: string;
}

export interface Creators {
 available:     number;
 collectionURI: string;
 items:         CreatorsItem[];
 returned:      number;
}

export interface CreatorsItem {
 name:        string;
 resourceURI: string;
 role:        Role;
}

export enum Role {
 Artist = "artist",
 Colorist = "colorist",
 ColoristCover = "colorist (cover)",
 Editor = "editor",
 Inker = "inker",
 InkerCover = "inker (cover)",
 Letterer = "letterer",
 Other = "other",
 Penciler = "penciler",
 PencilerCover = "penciler (cover)",
 Penciller = "penciller",
 PencillerCover = "penciller (cover)",
 RoleColorist = "Colorist",
 RoleLetterer = "Letterer",
 RolePenciller = "Penciller",
 Writer = "writer",
}

export interface Stories {
 available:     number;
 collectionURI: string;
 items:         StoriesItem[];
 returned:      number;
}

export interface StoriesItem {
 name:        string;
 resourceURI: string;
 type:        ItemType;
}

export enum ItemType {
 Cover = "cover",
 Credits = "credits",
 Empty = "",
 InteriorStory = "interiorStory",
 Pinup = "pinup",
 Promo = "promo",
 TableOfContents = "table of contents",
 TextArticle = "text article",
}

export interface Thumbnail {
 extension: Extension;
 path:      string;
}

export enum Extension {
 Jpg = "jpg",
}

export interface URL {
 type: URLType;
 url:  string;
}

export enum URLType {
 Detail = "detail",
 Wiki = "wiki",
}
