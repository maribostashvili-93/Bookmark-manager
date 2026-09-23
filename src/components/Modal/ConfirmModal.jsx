import { Modal } from './Modal.jsx'
import Button from '../Button/Button.jsx'

const variants = {
  archive: {
    title: 'Archive bookmark',
    description: 'Are you sure you want to archive this bookmark?',
    confirm: 'Archive',
  },
  unarchive: {
    title: 'Unarchive bookmark',
    description: 'Move this bookmark back to your active list?',
    confirm: 'Unarchive',
  },
  delete: {
    title: 'Delete bookmark',
    description: 'Are you sure you want to delete this bookmark?',
    confirm: 'Delete Permanently',
    error: true,
  },
}

// variant: "archive" | "unarchive" | "delete"
function ConfirmModal({ variant = 'archive' }) {
  const { title, description, confirm, error } = variants[variant]

  return (
    <Modal
      size="sm"
      title={title}
      description={description}
      actions={
        <>
          <Button hierarchy="secondary" size="md">Cancel</Button>
          <Button hierarchy="primary" size="md" variant={error ? 'error' : 'default'}>
            {confirm}
          </Button>
        </>
      }
    />
  )
}

export default ConfirmModal
