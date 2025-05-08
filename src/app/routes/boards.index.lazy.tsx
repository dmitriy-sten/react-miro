import { BoardsListPage } from "@/features/boards-list/boards-list.page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/boards/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BoardsListPage />;
}
