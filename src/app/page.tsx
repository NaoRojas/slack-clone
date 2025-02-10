'use client'
import { UserButton } from '@/features/auth/components/user-button'
import { useGetWorkspaces } from '@/features/workspaces/api/use-get-workspaces'
import { useEffect, useMemo } from 'react'

export default function Home() {
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
    } else {
      console.log('No workspace found')
    }
  }, [isLoading, workspaceId])

  return (
    <div>
      <UserButton />
    </div>
  )
}
