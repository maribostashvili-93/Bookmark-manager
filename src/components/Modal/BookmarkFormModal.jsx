import { useState } from 'react'
import { Modal } from './Modal.jsx'
import Button from '../Button/Button.jsx'
import InputField from '../InputField/InputField.jsx'
import TextareaField from '../TextareaField/TextareaField.jsx'

// mode: "add" | "edit" — edit mode pre-fills the fields from `bookmark`
function BookmarkFormModal({ mode = 'add', bookmark = {}, onSubmit, onCancel }) {
  const isEdit = mode === 'edit'
  const [form, setForm] = useState({
    title: bookmark.title ?? '',
    url: bookmark.fullUrl ?? bookmark.url ?? '',
    description: bookmark.description ?? '',
    tags: bookmark.tags?.join(', ') ?? '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const fullUrl = form.url.trim()
    onSubmit?.({
      title: form.title.trim(),
      url: fullUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      fullUrl,
      description: form.description.trim(),
      tags: form.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    })
  }

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
          <Button hierarchy="secondary" size="md" onClick={onCancel}>Cancel</Button>
          <Button hierarchy="primary" size="md" type="submit" form="bookmark-form">
            {isEdit ? 'Save Bookmark' : 'Add Bookmark'}
          </Button>
        </>
      }
      onClose={onCancel}
    >
      <form id="bookmark-form" className="modal__form" onSubmit={handleSubmit}>
        <InputField
          id="bookmark-title"
          name="title"
          label="Title"
          required
          value={form.title}
          onChange={handleChange}
        />
        <TextareaField
          id="bookmark-description"
          name="description"
          label="Description"
          required
          maxLength={280}
          value={form.description}
          onChange={handleChange}
          counter={`${form.description.length}/280`}
        />
        <InputField
          id="bookmark-url"
          name="url"
          label="Website URL"
          required
          type="url"
          value={form.url}
          onChange={handleChange}
        />
        <InputField
          id="bookmark-tags"
          name="tags"
          label="Tags"
          required
          placeholder="e.g. design, learning, tools"
          value={form.tags}
          onChange={handleChange}
        />
      </form>
    </Modal>
  )
}

export default BookmarkFormModal
