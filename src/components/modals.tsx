'use client'
import { CreateWorkspaceModal } from '@/features/workspaces/components/create-workspace-modal'
import { useEffect, useState } from 'react'

export const Modals = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  // We just prevent a pontential hydration error
  // by ensuring that all modals that we add
  // will only show on client side rendering
  return (
    <>
      <CreateWorkspaceModal />
    </>
  )
}
