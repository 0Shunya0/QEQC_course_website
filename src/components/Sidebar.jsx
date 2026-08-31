import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { course } from '../data/courseData';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <h1 className="sidebar__title">Quantum Entanglement<br />&amp; Quantum Computing</h1>
        <div className="sidebar__code">{course.code}</div>
      </div>

      <button className="sidebar__close" onClick={onClose} aria-label="Close sidebar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div className="sidebar__search-container">
        <SearchBar />
      </div>

      <nav className="sidebar__nav" aria-label="Course navigation">
        <div className="sidebar__nav-section">Course Material</div>

        {course.units.map(unit => (
          <NavLink
            key={unit.id}
            to={`/unit/${unit.id}`}
            className={({ isActive }) => `sidebar__nav-item sidebar__nav-unit ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <span className="sidebar__unit-number">Unit {unit.id.toString().padStart(2, '0')}</span>
            <span className="sidebar__unit-title">{unit.title}</span>
          </NavLink>
        ))}

        <div className="sidebar__nav-section sidebar__nav-section--standalone">Question Bank</div>
        <NavLink to="/question-bank" className={({ isActive }) => `sidebar__nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
          Question Bank
        </NavLink>

        <div className="sidebar__nav-section sidebar__nav-section--standalone">TA Notes</div>
        <NavLink to="/ta-notes" className={({ isActive }) => `sidebar__nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
          TA Notes
        </NavLink>
      </nav>
    </aside>
  );
}
