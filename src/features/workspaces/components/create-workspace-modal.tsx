'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCreateWorkspaceModal } from '../store/use-create-workspace-modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCreateWorkspace } from '../api/use-create-workspace'
import { useState } from 'react'
export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal()
  const { mutate, isLoading } = useCreateWorkspace()

  const [name, setName] = useState('')

  const handleClose = () => {
    setOpen(false)
    // TODO reset form
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = mutate(
        { name },
        {
          onSuccess: (data) => {
            // TODO Redirect to workspace
            console.log(data)
          },
          onError: () => {
            // TODO show toast error
          },
          onSettled: () => {
            // TODO reset form
          },
        }
      )
    } catch (e) {
      // TODO show toast error
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            value={name}
            disabled={isLoading}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g My workspace"
          />
          <div className="flex justify-end">
            <Button disabled={isLoading} variant="default">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
