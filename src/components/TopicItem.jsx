import { Link } from 'react-router-dom';
import './TopicItem.css';

export default function TopicItem({ topic, unitId, index }) {
  const numStr = (index + 1).toString().padStart(2, '0');

  return (
    <div className="topic-item">
      <div className="topic-item__number">{numStr}</div>
      <Link to={`/unit/${unitId}/topic/${topic.id}`} className="topic-item__title">
        {topic.title}
      </Link>
    </div>
  );
}
