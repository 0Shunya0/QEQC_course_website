import { Link } from 'react-router-dom';
import './TopicNav.css';

export default function TopicNav({ prevTopic, nextTopic, unitId, unitTitle }) {
  return (
    <nav className="topic-nav">
      <div className="topic-nav__left">
        {prevTopic && (
          <Link to={`/unit/${unitId}/topic/${prevTopic.id}`} className="topic-nav__link">
            <span className="topic-nav__arrow">←</span>
            <span className="topic-nav__title">{prevTopic.title}</span>
          </Link>
        )}
      </div>

      <Link to={`/unit/${unitId}`} className="topic-nav__center">
        UNIT {unitId.toString().padStart(2, '0')}
      </Link>

      <div className="topic-nav__right">
        {nextTopic && (
          <Link to={`/unit/${unitId}/topic/${nextTopic.id}`} className="topic-nav__link topic-nav__link--next">
            <span className="topic-nav__title">{nextTopic.title}</span>
            <span className="topic-nav__arrow">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
