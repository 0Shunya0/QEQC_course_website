import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUnitById } from '../data/courseData';
import TopicItem from '../components/TopicItem';
import './UnitPage.css';

export default function UnitPage() {
  const { unitId } = useParams();
  const id = Number(unitId);
  const unit = getUnitById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!unit) {
    return <div>Unit not found</div>;
  }

  return (
    <div className="unit-page">
      <header className="unit-page__header">
        <div className="unit-page__meta">UNIT {id.toString().padStart(2, '0')}</div>
        <h1 className="unit-page__title">{unit.title}</h1>
        <div className="unit-page__duration">{unit.hours} HOURS</div>
      </header>
      
      <hr className="unit-page__divider" />

      <div className="unit-page__topics">
        {unit.topics.map((topic, index) => (
          <TopicItem key={topic.id} topic={topic} unitId={id} index={index} />
        ))}
      </div>
    </div>
  );
}
