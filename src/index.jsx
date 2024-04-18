import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MovieRecommendations from "./MovieRecommendations";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MovieRecommendations />
  </StrictMode>
);
