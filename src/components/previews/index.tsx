import { GamesPreview } from "./GamesPreview";

export enum PREVIEW {
  GAMES = "games",
}

export const Preview = {
  [PREVIEW.GAMES]: () => <GamesPreview />,
};
