import { useEffect } from 'react';
import { course } from '../data/courseData';
import './ArchivePage.css';

export default function QuestionBankPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documents = course.questionBank?.documents || [];

  return (
    <div className="archive-page">
      <header className="archive-page__header">
        <div className="archive-page__eyebrow">Question Bank</div>
        <h1 className="archive-page__title">Combined-unit question banks</h1>
      </header>

      <div className="archive-page__list">
        {documents.map((document) => (
          <div className="archive-page__row" key={document.title}>
            <div className="archive-page__main">
              <h2>{document.title}</h2>
              {document.description && <p>{document.description}</p>}
            </div>
            <div className="archive-page__actions">
              {document.url ? (
                <>
                  <a href={document.url} className="archive-page__action archive-page__action--open" target="_blank" rel="noopener noreferrer">OPEN ↗</a>
                  <a href={document.url} className="archive-page__action archive-page__action--download" download target="_blank" rel="noopener noreferrer">DOWNLOAD ↓</a>
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
