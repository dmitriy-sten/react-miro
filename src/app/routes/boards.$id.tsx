import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boards/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/boards/$id"!</div>
}
