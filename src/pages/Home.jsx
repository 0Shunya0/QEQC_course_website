import React, { useEffect } from 'react';
import { course } from '../data/courseData';
import UnitCard from '../components/UnitCard';
import './Home.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__eyebrow">Course Material</div>
        <h1 className="home__title">{course.title}</h1>
        <div className="home__meta">{course.code}</div>
      </header>

      <div className="home__units" aria-label="Course units">
        {course.units.map(unit => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
