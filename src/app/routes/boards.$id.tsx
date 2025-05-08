import { BoardPage } from "@/features/board/board.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/boards/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BoardPage />;
}
