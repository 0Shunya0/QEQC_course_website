import './ResourceCard.css';

export default function ResourceCard({ resources }) {
  if (!resources) return null;

  const renderItem = (label, item) => {
    if (!item) return null;
    return (
      <div className="resource-item" key={label}>
        <div className="resource-item__label">{label}</div>
        <div className="resource-item__content">
          {item.url ? (
            <div className="resource-item__actions">
              <a href={item.url} className="resource-item__link" target="_blank" rel="noopener noreferrer">
                <span className="resource-item__name">{item.name || `${label}.pdf`}</span>
                <span className="resource-item__action">Open ↗</span>
              </a>
              <a href={item.url} className="resource-item__download" download target="_blank" rel="noopener noreferrer">
                Download ↓
              </a>
            </div>
          ) : (
            <div className="resource-item__empty">Not uploaded yet</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="resource-card">
      {renderItem('SLIDES', resources.slides)}
      {renderItem('NOTES', resources.notes)}
      {renderItem('LAB NOTEBOOK', resources.labNotebook)}
    </div>
  );
}
