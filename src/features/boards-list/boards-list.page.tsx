import { rqClient } from "@/shared/api/instance";
import { Link } from "@tanstack/react-router";

export function BoardsListPage() {

  rqClient.useQuery('get','/boards')

  return (
    <div>
      <Link to="/boards/$id" params={{ id: "3" }}>
        go to id 3
      </Link>
      <Link to="/login">login</Link>

      <h1>Boards list</h1>
    </div>
  );
}
