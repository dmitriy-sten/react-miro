import { BoardPage } from "@/features/board/board.page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/boards/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BoardPage />;
}
