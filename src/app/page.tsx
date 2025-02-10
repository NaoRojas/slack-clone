'use client'
import { UserButton } from '@/features/auth/components/user-button'
import { useCreateWorkspaceModal } from '@/features/store/use-create-workspace-modal'
import { useGetWorkspaces } from '@/features/workspaces/api/use-get-workspaces'
import { useEffect, useMemo } from 'react'

export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModal()
  const { data, isLoading } = useGetWorkspaces()
  const workspaceId = useMemo(() => {
    if (data) {
      return data?.[0]?._id
    }
  }, [data])

  useEffect(() => {
    if (isLoading) return
    if (workspaceId) {
      console.log('Redirecting to workspace', workspaceId)
    } else if (!open) {
      setOpen(true)
    }
  }, [isLoading, workspaceId, open, setOpen])

  return (
    <div>
      <UserButton />
    </div>
  )
}
