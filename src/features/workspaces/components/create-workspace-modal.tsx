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
export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal()
  const { mutate } = useCreateWorkspace()

  const handleClose = () => {
    setOpen(false)
    // TODO reset form
  }

  const handleSubmit = () => {
    mutate(
      { name: 'test' },
      {
        onSuccess: (data) => {
          // TODO Redirect to workspace
        },
        onError: () => {
          // TODO show toast error
        },
        onSettled: () => {
          // TODO reset form
        },
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g My workspace"
          />
          <div className="flex justify-end">
            <Button disabled={false} variant="default">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
