import { useEffect } from 'react';
import { course } from '../data/courseData';
import './ArchivePage.css';

export default function TaNotesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notes = course.taNotes || [];

  return (
    <div className="archive-page">
      <header className="archive-page__header">
        <div className="archive-page__eyebrow">TA Notes</div>
        <h1 className="archive-page__title">Supplementary handouts</h1>
      </header>

      <div className="archive-page__list">
        {notes.map((note) => (
          <div className="archive-page__row" key={note.title}>
            <div className="archive-page__main">
              <h2>{note.title}</h2>
              {note.description && <p>{note.description}</p>}
            </div>
            <div className="archive-page__actions">
              {note.url ? (
                <>
                  <a href={note.url} target="_blank" rel="noopener noreferrer">Open ↗</a>
                  <a href={note.url} download target="_blank" rel="noopener noreferrer">Download ↓</a>
                </>
              ) : (
                <span className="archive-page__empty">Not uploaded yet</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
