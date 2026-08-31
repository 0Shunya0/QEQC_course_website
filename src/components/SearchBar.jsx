import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { course } from '../data/courseData';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    
    if (!val.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lowerVal = val.toLowerCase();
    const newResults = [];

    course.units.forEach(unit => {
      if (unit.title.toLowerCase().includes(lowerVal)) {
        newResults.push({ type: 'Unit', title: unit.title, link: `/unit/${unit.id}` });
      }
      unit.topics.forEach(topic => {
        if (topic.title.toLowerCase().includes(lowerVal)) {
          newResults.push({ type: 'Topic', title: topic.title, link: `/unit/${unit.id}/topic/${topic.id}` });
        }
      });
    });

    setResults(newResults.slice(0, 8));
    setIsOpen(true);
  };

  const handleSelect = (link) => {
    navigate(link);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="searchbar" ref={wrapperRef}>
      <div className="searchbar__input-wrapper">
        <svg className="searchbar__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input 
          type="text" 
          className="searchbar__input" 
          placeholder="Search..." 
          value={query}
          onChange={handleSearch}
          onFocus={() => { if(query) setIsOpen(true); }}
        />
      </div>
      {isOpen && results.length > 0 && (
        <div className="searchbar__results">
          {results.map((result, idx) => (
            <div key={idx} className="searchbar__result-item" onClick={() => handleSelect(result.link)}>
              <span className="searchbar__result-title">{result.title}</span>
              <span className="searchbar__result-type">{result.type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
