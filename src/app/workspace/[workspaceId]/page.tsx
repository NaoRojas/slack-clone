interface WorkspaceIdPageProps {
  params: {
    workspaceId: string
  }
}

export default async function WorkspacePage({ params }: WorkspaceIdPageProps) {
  const { workspaceId } = await params
  return (
    <div>
      <h1>Workspace ID Page</h1>
      <p>Workspace ID: {workspaceId}</p>
    </div>
  )
}
