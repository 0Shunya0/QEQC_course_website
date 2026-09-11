import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { course } from '../data/courseData';
import UnitCard from '../components/UnitCard';
import './Home.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <section className="course-hero">
        <div className="course-hero__eyebrow">Course</div>
        <h1 className="course-hero__title">{course.title}</h1>
        <div className="course-hero__code">{course.code}</div>
        <p className="course-hero__desc">{course.description}</p>
      </section>

      <hr className="home__divider" />

      <section className="course-section">
        <header className="course-section__header">
          <div className="course-section__eyebrow">Course Archive</div>
          <p className="course-section__note">Four units covering the foundations, mathematics, information theory and computational methods of quantum computing.</p>
        </header>

        <div className="home__units" aria-label="Course units">
          {course.units.map(unit => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </section>

      <nav className="home__secondary-nav" aria-label="Additional resources">
        <Link to="/question-bank" className="home__secondary-link">Question Bank</Link>
        <Link to="/ta-notes" className="home__secondary-link">TA Notes</Link>
        <Link to="/guide" className="home__secondary-link">Guide</Link>
      </nav>
    </div>
  );
}
