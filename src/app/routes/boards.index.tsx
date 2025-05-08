import { BoardsListPage } from "@/features/boards-list/boards-list.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/boards/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BoardsListPage />;
}
