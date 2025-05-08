import { createRootRoute } from "@tanstack/react-router";
import { App } from "../app";
import { Providers } from "../providers";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
