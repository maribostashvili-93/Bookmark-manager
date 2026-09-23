import Icon from '../Icon/Icon.jsx'
import './EmptyData.css'

function EmptyData({
  message = "You don't have any bookmarks yet.",
  description = 'Add your first bookmark to see it here.',
}) {
  return (
    <section className="empty-data" aria-labelledby="empty-data-title">
      <span className="empty-data__icon" aria-hidden="true">
        <Icon name="link" />
      </span>
      <h2 id="empty-data-title" className="empty-data__title text-preset-2">
        {message}
      </h2>
      <p className="empty-data__description text-preset-4-medium">
        {description}
      </p>
    </section>
  )
}

export default EmptyData
