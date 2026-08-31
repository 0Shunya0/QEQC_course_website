import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTopicById, getAdjacentTopics, getUnitById } from '../data/courseData';
import TopicNav from '../components/TopicNav';
import ResourceCard from '../components/ResourceCard';
import './TopicPage.css';

export default function TopicPage() {
  const { unitId, topicId } = useParams();
  const uId = Number(unitId);
  const topic = getTopicById(topicId);
  const unit = getUnitById(uId);
  const { prev, next } = getAdjacentTopics(topicId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!topic || !unit) {
    return <div className="topic-page__missing">Topic not found</div>;
  }

  return (
    <div className="topic-page">
      <TopicNav prevTopic={prev} nextTopic={next} unitId={uId} unitTitle={unit.title} />

      <header className="topic-page__header">
        <div className="topic-page__meta">Unit {uId.toString().padStart(2, '0')}</div>
        <h1 className="topic-page__title">{topic.title}</h1>
      </header>

      <div className="topic-page__resources-section">
        <div className="topic-page__resources-label">Course archive</div>
        <hr className="topic-page__divider" />
        <ResourceCard resources={topic.resources} />
      </div>
    </div>
  );
}
