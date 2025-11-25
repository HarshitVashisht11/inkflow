"use client"

import { FormEvent, useEffect, useState, useRef } from "react"
import { toast } from "sonner"
import { X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRenameModal } from "@/store/use-rename-modal"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import type { Id } from "../../convex/_generated/dataModel"

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal()
  const [title, setTitle] = useState("")
  const [isPending, setIsPending] = useState(false)
  const updateBoard = useMutation(api.board.update)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTitle(initialValues.title)
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, initialValues.title])

  const handleClose = () => {
    if (!isPending) {
      setTitle("")
      onClose()
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!initialValues.id || !title.trim()) {
      return
    }

    setIsPending(true)

    try {
      await updateBoard({ 
        id: initialValues.id as Id<"boards">, 
        title: title.trim() 
      })
      toast.success("Board renamed")
      setTitle("")
      onClose()
    } catch (error) {
      toast.error("Failed to rename board")
    } finally {
      setIsPending(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/80 animate-in fade-in-0"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg rounded-lg animate-in fade-in-0 zoom-in-95">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
          disabled={isPending}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Rename board</h2>
          <p className="text-sm text-muted-foreground">
            Give your board a descriptive title.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board title"
            disabled={isPending}
            maxLength={60}
            required
          />
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim() || isPending}>
              {isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RenameModal

