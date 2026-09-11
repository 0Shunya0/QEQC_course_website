import { Link } from 'react-router-dom';
import './UnitCard.css';

export default function UnitCard({ unit }) {
  const numStr = unit.id.toString().padStart(2, '0');

  return (
    <Link to={`/unit/${unit.id}`} className="unit-card">
      <div className="unit-card__number">{numStr}</div>
      <div className="unit-card__content">
        <h3 className="unit-card__title">{unit.title}</h3>
        <div className="unit-card__hours">{unit.hours} Hours</div>
      </div>
      <div className="unit-card__open" aria-hidden="true">Open &rarr;</div>
    </Link>
  );
}
