import { createRootRoute } from "@tanstack/react-router";
import { App } from "../app";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <App />;
}
