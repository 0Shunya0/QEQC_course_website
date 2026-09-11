import React, { useEffect } from 'react';
import './GuidePage.css';

export default function GuidePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guide-page">
      <header className="guide-page__header">
        <div className="guide-page__eyebrow">Guide</div>
        <h1 className="guide-page__title">How to use the QEQC course website</h1>
      </header>

      <div className="guide-page__content">
        <p className="guide-page__intro">
          This site collects the course material, supplementary notes, question bank and supporting resources for Quantum Entanglement & Quantum Computing.
        </p>

        <div className="guide-page__section">
          <h2 className="guide-page__section-title"><span className="guide-page__number">01</span> COURSE MATERIAL</h2>
          <p>Where students find the main course material organized by unit. Includes slides, standard notes, and lab notebooks associated with each topic.</p>
        </div>

        <div className="guide-page__section">
          <h2 className="guide-page__section-title"><span className="guide-page__number">02</span> QUESTION BANK</h2>
          <p>Where students find practice questions, combined-unit review sets, and exam-oriented material.</p>
        </div>

        <div className="guide-page__section">
          <h2 className="guide-page__section-title"><span className="guide-page__number">03</span> TA NOTES</h2>
          <p>Supplementary handouts, detailed explanations, and specific mathematical derivations prepared by the teaching assistants for the course.</p>
        </div>

        <hr className="guide-page__divider" />

        <div className="guide-page__where-to-start">
          <h2 className="guide-page__start-title">Where should I start?</h2>
          
          <div className="guide-page__start-item">
            <div className="guide-page__start-condition">IF YOU ARE NEW TO THE COURSE</div>
            <div className="guide-page__start-action">→ Start with Unit 1 in Course Material</div>
          </div>
          
          <div className="guide-page__start-item">
            <div className="guide-page__start-condition">IF YOU ARE REVISING</div>
            <div className="guide-page__start-action">→ Use the TA Notes + Question Bank</div>
          </div>
          
          <div className="guide-page__start-item">
            <div className="guide-page__start-condition">IF YOU ARE PREPARING FOR AN EXAM</div>
            <div className="guide-page__start-action">→ Course Material → TA Notes → Question Bank</div>
          </div>
        </div>
      </div>
    </div>
  );
}
