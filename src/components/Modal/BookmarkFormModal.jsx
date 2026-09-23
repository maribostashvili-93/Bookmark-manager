import { Modal } from './Modal.jsx'
import Button from '../Button/Button.jsx'
import InputField from '../InputField/InputField.jsx'
import TextareaField from '../TextareaField/TextareaField.jsx'

// mode: "add" | "edit" — edit mode pre-fills the fields from `bookmark`
function BookmarkFormModal({ mode = 'add', bookmark = {} }) {
  const isEdit = mode === 'edit'
  const description = bookmark.description ?? ''

  return (
    <Modal
      title={isEdit ? 'Edit bookmark' : 'Add a Bookmark'}
      description={
        isEdit
          ? 'Update your saved link details — change the title, description, URL, or tags anytime.'
          : 'Save a link with details to keep your collection organized.'
      }
      actions={
        <>
          <Button hierarchy="secondary" size="md">Cancel</Button>
          <Button hierarchy="primary" size="md" type="submit" form="bookmark-form">
            {isEdit ? 'Save Bookmark' : 'Add Bookmark'}
          </Button>
        </>
      }
    >
      <form id="bookmark-form" className="modal__form">
        <InputField id="bookmark-title" label="Title" required defaultValue={bookmark.title} />
        <TextareaField
          id="bookmark-description"
          label="Description"
          required
          maxLength={280}
          defaultValue={description}
          counter={`${description.length}/280`}
        />
        <InputField id="bookmark-url" label="Website URL" required type="url" defaultValue={bookmark.fullUrl} />
        <InputField
          id="bookmark-tags"
          label="Tags"
          required
          placeholder="e.g. design, learning, tools"
          defaultValue={bookmark.tags?.join(', ')}
        />
      </form>
    </Modal>
  )
}

export default BookmarkFormModal
