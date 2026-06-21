import type { PropsWithChildren } from "react"
import { useEffect, useRef } from "react"
import { Button } from "./Button"

type ModalProps = PropsWithChildren<{
  title: string
  open: boolean
  onClose: () => void
}>

export function Modal({ title, open, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!open) return

    const firstInput = dialogRef.current?.querySelector("input")
    firstInput?.focus()
  }, [open])

  if (!open) return null

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <dialog
        aria-labelledby="modal-title"
        aria-modal="true"
        className="modal"
        onMouseDown={event => event.stopPropagation()}
        open
        ref={dialogRef}
      >
        <header className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <Button aria-label="Fechar" onClick={onClose} variant="ghost">
            ×
          </Button>
        </header>
        {children}
      </dialog>
    </div>
  )
}
