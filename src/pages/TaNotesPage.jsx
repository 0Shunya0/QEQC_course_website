import { useEffect } from 'react';
import { course } from '../data/courseData';
import './TaNotesPage.css';

export default function TaNotesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notes = course.taNotes || [];

  // Group notes by Unit
  const groupedNotes = [
    {
      unitPrefix: 'Unit 1',
      title: 'UNIT 01\nBASICS OF QUANTUM TECHNOLOGY',
      description: 'Foundations of quantum mechanics, Dirac notation, and vector spaces.',
      items: notes.filter(n => n.title.startsWith('Unit 1 ') || n.title.startsWith('Units 1 & 2'))
    },
    {
      unitPrefix: 'Unit 2',
      title: 'UNIT 02\nQUANTUM STATES ALGEBRA',
      description: 'Density matrices, ensembles, and quantum logic gates.',
      items: notes.filter(n => n.title.startsWith('Unit 2 ') || (n.title.startsWith('Units 1 & 2') && !n.title.includes('Unit 1 ')))
    },
    {
      unitPrefix: 'Unit 3',
      title: 'UNIT 03\nENTANGLEMENT & QUANTUM INFORMATION',
      description: 'Bell states, EPR paradox, and information theory.',
      items: notes.filter(n => n.title.startsWith('Unit 3 '))
    },
    {
      unitPrefix: 'Unit 4',
      title: 'UNIT 04\nQUANTUM COMPUTING',
      description: 'Quantum algorithms, complexity, and Fourier transform.',
      items: notes.filter(n => n.title.startsWith('Unit 4 '))
    }
  ];

  return (
    <div className="ta-notes-page">
      <header className="ta-notes-page__header">
        <div className="ta-notes-page__eyebrow">TA Notes</div>
        <h1 className="ta-notes-page__title">Supplementary handouts</h1>
        <p className="ta-notes-page__intro">
          Notes, handouts and supplementary material for the QEQC course prepared by the teaching assistants.
        </p>
      </header>

      <div className="ta-notes-page__groups">
        {groupedNotes.map((group, index) => {
          if (group.items.length === 0) return null;
          
          return (
            <section className="ta-notes-group" key={index}>
              <div className="ta-notes-group__header">
                <h2 className="ta-notes-group__title">
                  <span className="ta-notes-group__unit-number">{group.title.split('\n')[0]}</span>
                  {group.title.split('\n')[1]}
                </h2>
                <p className="ta-notes-group__desc">{group.description}</p>
              </div>
              
              <div className="ta-notes-group__list">
                {group.items.map((note) => {
                  // Clean up title (remove "Unit X — " prefix)
                  const cleanTitle = note.title.includes(' — ') ? note.title.split(' — ')[1] : note.title;
                  
                  return (
                    <div className="ta-notes-item" key={note.title}>
                      <div className="ta-notes-item__main">
                        <h3 className="ta-notes-item__title">{cleanTitle}</h3>
                        {note.description && <p className="ta-notes-item__desc">{note.description}</p>}
                      </div>
                      <div className="ta-notes-item__actions">
                        {note.url ? (
                          <>
                            <a href={note.url} className="ta-notes-item__action ta-notes-item__action--open" target="_blank" rel="noopener noreferrer">OPEN ↗</a>
                            <a href={note.url} className="ta-notes-item__action ta-notes-item__action--download" download target="_blank" rel="noopener noreferrer">DOWNLOAD ↓</a>
                          </>
                        ) : (
                          <span className="ta-notes-item__empty">Not uploaded yet</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
