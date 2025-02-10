interface WorkspaceIdPageProps {
  params: {
    workspaceId: string
  }
}

const WorskspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return (
    <div>
      <h1>Workspace ID Page</h1>
      {params.workspaceId}
    </div>
  )
}

export default WorskspaceIdPage
